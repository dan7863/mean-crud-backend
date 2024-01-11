import mongoose from "mongoose";


//Crear el Schema
const productSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: [true, "Please complete the field"]
        },
        stock: {
            type: Number,
            required: [true, "Please complete the field"]
        },
        price: {
            type: Number,
            required: [true, "Please complete the field"]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);


//Crear el modelo a partir del schema
export const ProductModel = mongoose.model("Product", productSchema);