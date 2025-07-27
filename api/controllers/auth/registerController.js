import Joi from "joi";
import { User, RefreshToken } from "../../models/index.js";
import bcrypt from "bcrypt";
import JwtService from "../../services/JwtService.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";
import { REFRESH_SECRET } from "../../config/index.js";

const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  contactType: Joi.string().valid("email", "phone").required(),
  contactValue: Joi.string().required(), // You can add .email() or .pattern() if stricter
  userType: Joi.string().valid("vendor", "supplier").required(),
  password: Joi.string().required(),
  repeatPassword: Joi.ref("password"),
  businessName: Joi.string().allow(null, ""),
  category: Joi.string().allow(null, ""),
  area: Joi.string().allow(null, ""),
  city: Joi.string().allow(null, ""),
});

const registerController = {
  async register(req, res, next) {
    const { error } = registerSchema.validate(req.body);
    if (error) return next(error);

    const {
      firstName,
      lastName,
      contactType,
      contactValue,
      userType,
      businessName,
      category,
      area,
      city,
      password,
    } = req.body;

    try {
      const exist = await User.exists({ contactValue });
      if (exist) {
        return next(CustomErrorHandler.alreadyExist("User already exists."));
      }
    } catch (err) {
      return next(err);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      contactType,
      contactValue,
      password: hashedPassword,
      userType,
      businessName,
      category,
      area,
      city,
    });

    let access_token, refresh_token;
    try {
      const result = await user.save();

      access_token = JwtService.sign({
        _id: result._id,
        userType: result.userType,
      });
      refresh_token = JwtService.sign(
        { _id: result._id, userType: result.userType },
        "1y",
        REFRESH_SECRET
      );

      await RefreshToken.create({ token: refresh_token });
      res.json({
        userId: result._id,
        username: result.firstName,
        access_token,
        refresh_token,
      });
    } catch (err) {
      return next(err);
    }
  },
};

export default registerController;
