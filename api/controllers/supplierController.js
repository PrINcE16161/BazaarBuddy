import { Supplier } from "../models/index.js";
import { User } from "../models/index.js"; // your user model
import CustomErrorHandler from "../services/CustomErrorHandler.js"; // assuming you use centralized error handler
import { APP_URL } from "../config/index.js"; // for image URLs
import fs from "fs";
import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    // 3746674586-836534453.png
    cb(null, uniqueName);
  },
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).array("image"); // 5mb

const supplierController = {
  async store(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) return next(CustomErrorHandler.serverError(err.message));

      const { userId } = user.userId;

      let user;
      try {
        user = await User.findById(userId);
        if (!user) return next(CustomErrorHandler.notFound("User not found"));
      } catch (err) {
        return next(err);
      }

      const {
        category,
        location,
        fullAddress,
        phone,
        whatsapp,
        rating,
        reviews,
        established,
        employees,
        description,
        specialties,
        deliveryAreas,
        deliveryTime,
        minimumOrder,
        paymentMethods,
        totalProducts,
        activeOrders,
        completedOrders,
        responseTime,
        certifications,
        businessHours,
        deliveryHours,
      } = req.body;

      let avatar = "",
        coverImage = "";
      if (req.files) {
        if (req.files.avatar) {
          avatar = `${APP_URL}/uploads/${req.files.avatar[0].filename}`;
        }
        if (req.files.coverImage) {
          coverImage = `${APP_URL}/uploads/${req.files.coverImage[0].filename}`;
        }
      }

      try {
        const supplier = await Supplier.create({
          id: user._id.toString(),
          type: user.contactType,
          name: user.businessName || `${user.firstName} ${user.lastName}`,
          owner: `${user.firstName} ${user.lastName}`,
          category: category || user.category,
          location: user.area || "N/A",
          fullAddress,
          phone,
          email: user.contactType === "email" ? user.contactValue : "",
          whatsapp,
          verified: true,
          rating,
          reviews,
          established,
          employees,
          description,
          avatar,
          coverImage,
          specialties: JSON.parse(specialties || "[]"),
          businessHours: JSON.parse(businessHours || "{}"),
          deliveryHours: JSON.parse(deliveryHours || "[]"),
          deliveryAreas: JSON.parse(deliveryAreas || "[]"),
          paymentMethods: JSON.parse(paymentMethods || "[]"),
          minimumOrder,
          deliveryTime,
          totalProducts,
          activeOrders,
          completedOrders,
          responseTime,
          certifications: JSON.parse(certifications || "[]"),
        });

        res.status(201).json(supplier);
      } catch (err) {
        return next(err);
      }
    });
  },
  async update(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) return next(CustomErrorHandler.serverError(err.message));

      const { id } = req.params;

      let supplier;
      try {
        supplier = await Supplier.findOne({ id });
        if (!supplier)
          return next(CustomErrorHandler.notFound("Supplier not found"));
      } catch (err) {
        return next(err);
      }

      const {
        category,
        location,
        fullAddress,
        phone,
        whatsapp,
        rating,
        reviews,
        established,
        employees,
        description,
        specialties,
        deliveryAreas,
        deliveryTime,
        minimumOrder,
        paymentMethods,
        totalProducts,
        activeOrders,
        completedOrders,
        responseTime,
        certifications,
        businessHours,
        deliveryHours,
      } = req.body;

      let avatar = supplier.avatar,
        coverImage = supplier.coverImage;
      if (req.files) {
        if (req.files.avatar) {
          avatar = `${APP_URL}/uploads/${req.files.avatar[0].filename}`;
        }
        if (req.files.coverImage) {
          coverImage = `${APP_URL}/uploads/${req.files.coverImage[0].filename}`;
        }
      }

      try {
        const updated = await Supplier.findOneAndUpdate(
          { id },
          {
            category,
            location,
            fullAddress,
            phone,
            whatsapp,
            rating,
            reviews,
            established,
            employees,
            description,
            avatar,
            coverImage,
            specialties: JSON.parse(specialties || "[]"),
            businessHours: JSON.parse(businessHours || "{}"),
            deliveryHours: JSON.parse(deliveryHours || "[]"),
            deliveryAreas: JSON.parse(deliveryAreas || "[]"),
            paymentMethods: JSON.parse(paymentMethods || "[]"),
            minimumOrder,
            deliveryTime,
            totalProducts,
            activeOrders,
            completedOrders,
            responseTime,
            certifications: JSON.parse(certifications || "[]"),
          },
          { new: true }
        );

        res.status(200).json(updated);
      } catch (err) {
        return next(err);
      }
    });
  },
};

export default supplierController;
