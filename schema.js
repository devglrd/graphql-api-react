import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `

type Product {
    _id : ID!
    title: String!
    qty: Int
}

type Query {
    allProducts : [Product]
    getProduct(_id: ID!) : Product
}

input ProductInput {
    title : String!
    qty : Int
}

type Mutation {
    addProduct(input: ProductInput) : Product
    updateProduct(_id : ID!, input : ProductInput) : Product
    deleteProduct(_id : ID!) : Product
}
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
