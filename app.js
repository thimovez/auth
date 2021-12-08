const express = require('express');
const authRouter = require('./authRouter');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;


const app =  express();
app.use(express.json());
app.use("/auth", authRouter);

async function start() {
  try { 
      await mongoose.connect('mongodb+srv://thimovez:k1v72tr5@cluster0.gbgjf.mongodb.net/chat_node?retryWrites=true&w=majority')
      app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
      console.log(e);
  }
}

start();