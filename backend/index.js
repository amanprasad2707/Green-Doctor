
const express = require('express'); 
const userRouter=require('./routers/userRouter');
const orderRouter=require('./routers/orderRouter');
const imageRouter=require('./routers/imageRouter');
const expertRouter=require('./routers/expertRouter');


const cors = require('cors');


const app=express();
const port= 5000;


app.use(express.json());  

app.use(cors({
    origin:['http://localhost:3000']
}));

app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('image', imageRouter);
app.use('expert', expertRouter);



app.get('/', (req , res)=>{
    res.send('response from express')
});


app.listen(port, ()=>{
    console.log('server started')
});
