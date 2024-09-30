const express = require('express');
const app = express();

const port = process.env.PORT || 5001; // Changed to 5001

const products =[
    {
        id:1,
        name:'karthik'
    },
    {
        id:2,
        name:'ram'
    },
    {
        id:3,
        name:'ramesh'
    },
    {
        id:4,
        name:'fathima'
    },
    {
        id:5,
        name:'bandi'
    },
    {
        id:6,
        name:'rajesh'
    },
    {
        id:7,
        name:'ram'
    }

]
app.get('/',(req,res)=>{
    res.json(products);
})
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);

});
