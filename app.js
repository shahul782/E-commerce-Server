// app.js

const express = require('express');
const connectDB = require('./Database/ConnectDatabase'); // Adjust the path as per your project structure
const  cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

// Connect to MongoDB
connectDB();


const products = require('./Routes/Product')
const order = require('./Routes/Order')
const LoginRoutes = require('./Routes/LoginRoutes')
const RegisterRoute = require('./Routes/RegisterRoute')

 app.use('/api/v1/',products);
 app.use('/api/v1/',order)
 app.use('/api/v1',LoginRoutes)
 app.use('/api/v1/',RegisterRoute)




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
