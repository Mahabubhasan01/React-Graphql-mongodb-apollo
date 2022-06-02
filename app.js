const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema =  require('./schema/schema');

// middle ware 
app.use('/graphql',graphqlHTTP({
    schema,
    graphql:true
}))


app.listen(4000,()=>{
    console.log('port is running')
})