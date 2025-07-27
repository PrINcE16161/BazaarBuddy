import Joi from "joi";
import { User, RefreshToken } from "../../models/index.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";
import bcrypt from "bcrypt";
import JwtService from "../../services/JwtService.js";
import { REFRESH_SECRET } from "../../config/index.js";

const loginController = {
  async login(req, res, next) {
    // 1. Validation
    const loginSchema = Joi.object({
      contactType: Joi.string().valid("email", "phone").required(),
      contactValue: Joi.string().required(), // We'll custom-validate format
      password: Joi.string().min(3).max(30).required(),
    });

    const { error } = loginSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    const { contactType, contactValue, password } = req.body;

    // 2. Find user by contact type
    let user;
    try {
      const query =
        contactType === "email"
          ? { contactType: "email", contactValue }
          : { contactType: "phone", contactValue };

      user = await User.findOne(query);
      if (!user) {
        return next(CustomErrorHandler.wrongCredentials());
      }

      // 3. Compare passwords
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return next(CustomErrorHandler.wrongCredentials());
      }

      // 4. Generate tokens
      const username = user.firstName;
      const access_token = JwtService.sign({
        _id: user._id,
        userType: user.userType,
      });
      const refresh_token = JwtService.sign(
        { _id: user._id, userType: user.userType },
        "1y",
        REFRESH_SECRET
      );

      // 5. Store refresh token in DB
      await RefreshToken.create({ token: refresh_token });

      // 6. Respond with tokens
      res.json({ username, access_token, refresh_token });
    } catch (err) {
      return next(err);
    }
  },
  async logout(req, res, next) {
    const refreshSchema = Joi.object({
      refresh_token: Joi.string().required(),
    });

    const { error } = refreshSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    try {
      await RefreshToken.deleteOne({ token: req.body.refresh_token });
      res.json({ status: 1, message: "Logged out successfully." });
    } catch (err) {
      return next(new Error("Something went wrong in the database"));
    }
  },
};

export default loginController;
