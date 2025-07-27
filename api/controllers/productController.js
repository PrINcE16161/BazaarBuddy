import { Product } from "../models/index.js";
import multer from "multer";
import path from "path";
import CustomErrorHandler from "../services/CustomErrorHandler.js";
import fs from "fs";
import productSchema from "../validators/productValidator.js";
import { APP_URL } from "../config/index.js";

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

const productController = {
  async store(req, res, next) {
    // Multipart form data
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }

      const filePath = req.files.path;
      // validation
      const { error } = productSchema.validate(req.body);
      if (error) {
        // Delete the uploaded file
        fs.unlink(`${appRoot}/${filePath}`, (err) => {
          if (err) {
            return next(CustomErrorHandler.serverError(err.message));
          }
        });

        return next(error);
        // rootfolder/uploads/filename.png
      }

      const {
        id,
        name,
        price,
        stock,
        colors,
        category,
        company,
        description,
        featured,
        shipping,
        reviews,
        stars,
      } = req.body;
      let document;
      try {
        var arrImages = [];
        for (let i = 0; i < req.files.length; i++) {
          arrImages[i] = `${APP_URL}/uploads/` + req.files[i].filename;
        }
        document = await Product.create({
          id,
          name,
          price,
          stock,
          image: arrImages,
          colors,
          category,
          company,
          description,
          featured,
          shipping,
          reviews,
          stars,
        });
      } catch (err) {
        return next(err);
      }
      res.status(201).json(document);
    });
  },
  update(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }
      let filePath;
      if (req.file) {
        filePath = req.file.path;
      }

      // validation
      const { error } = productSchema.validate(req.body);
      if (error) {
        // Delete the uploaded file
        if (req.file) {
          fs.unlink(`${appRoot}/${filePath}`, (err) => {
            if (err) {
              return next(CustomErrorHandler.serverError(err.message));
            }
          });
        }

        return next(error);
        // rootfolder/uploads/filename.png
      }

      const {
        id,
        name,
        price,
        stock,
        colors,
        category,
        company,
        description,
        featured,
        shipping,
        reviews,
        stars,
      } = req.body;
      let document;
      try {
        document = await Product.findOneAndUpdate(
          { id: req.params.id },
          {
            id,
            name,
            price,
            stock,
            colors,
            category,
            company,
            description,
            featured,
            shipping,
            reviews,
            stars,
            ...(req.file && { image: arrImages /*filePath*/ }),
          },
          { new: true }
        );
      } catch (err) {
        return next(err);
      }
      res.status(201).json(document);
    });
  },
  async destroy(req, res, next) {
    const document = await Product.findOneAndRemove({ _id: req.params.id });
    if (!document) {
      return next(new Error("Nothing to delete"));
    }
    // image delete
    const imagePath = document._doc.image;
    // http://localhost:5000/uploads/1616444052539-425006577.png
    // approot/http://localhost:5000/uploads/1616444052539-425006577.png
    fs.unlink(`${appRoot}/${imagePath}`, (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError());
      }
      return res.json(document);
    });
  },
  async index(req, res, next) {
    let documents;
    // pagination mongoose-pagination
    try {
      documents = await Product.find()
        .select("-updatedAt -__v -createdAt -_id")
        .sort({ _id: -1 });
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    return res.json(documents);
  },
  async show(req, res, next) {
    let document;
    try {
      document = await Product.findOne({ id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    return res.json(document);
  },
  async getProducts(req, res, next) {
    let documents;
    try {
      documents = await Product.find({
        id: { $in: req.body.ids },
      }).select("-updatedAt -__v");
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    return res.json(documents);
  },
};

export default productController;
