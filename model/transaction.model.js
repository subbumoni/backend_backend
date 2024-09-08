import  { model, Schema } from "mongoose";



const schema = new Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Transaction=model("transactions", schema);

export default Transaction;