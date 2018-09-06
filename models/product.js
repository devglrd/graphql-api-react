import mongoose from "mongoose";
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    title : {type : String, required : true},
    qty : {type : Number}
});

const product = mongoose.model('product', ProductSchema);

export default product;