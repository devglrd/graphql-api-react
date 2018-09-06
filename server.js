import express from "express";
import mongoose from "mongoose";
import graphqlHTTP from "express-graphql";
import schema from './schema';
import cors from 'cors';




const app = express();
const PORT = 9000;
const MONGOURL = "mongodb://127.0.0.1:27017/graphql-api";
mongoose.Promise = global.Promise;
mongoose.connect(MONGOURL);


app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Methods", "GET", "POST", "OPTIONS");
    next();
});

app.get('/', (req, res) => {
     res.json({msg : "Welcome to graphQL API"})
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql :  true
}));

app.listen(PORT, () => {
    console.log(`server runing on post ${PORT}`)
});