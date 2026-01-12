require("dotenv").config();
const express = require("express");
const connectToDB=require('./database/db.js')
const authRoutes=require('./routes/auth-routes')
const homeRoutes=require('./routes/home-routes')
const adminRoutes=require('./routes/admin-routes')
const uploadImageRoutes=require('./routes/image-routes')

const app = express();
const PORT = process.env.PORT || 3000;


//middle wares 
app.use(express.json());

app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/images',uploadImageRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//connecting to database
connectToDB()