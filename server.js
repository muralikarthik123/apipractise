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
    }
]
app.get('/products',(req,res)=>{
    res.json(products);
})
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);

});
