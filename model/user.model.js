import { model, Schema } from "mongoose";


// Write the schema
const schema = new Schema({
   
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  
  
});

// Create your Model

const User = model("Users", schema)


export default User;