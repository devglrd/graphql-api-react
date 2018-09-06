import Product from './models/product';

export const resolvers = {
    Query : {
        async allProducts() {
            return await Product.find();
        },
        async getProduct(root, {_id}){
            return await Product.findById(_id);
        }
    },
    Mutation : {
        async addProduct(root, {input}){
            return await Product.create(input);
        },
        async updateProduct(root, {_id, input}){
            console.log("id",_id);
            console.log("input",input);
            return await Product.findOneAndUpdate({_id}, input, { new : true});
        },
        async deleteProduct(root, {_id}){
            return await Product.findOneAndDelete({_id});
        }
    }
}