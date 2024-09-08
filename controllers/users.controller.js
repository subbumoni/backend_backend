
import User from "../model/user.model.js";

export const UserIndex = (req, res) => {
  res.send("Get all user List");
};

export const UserCreate = async (req, res) => {
  const {email,phonenumber,password}=req.body
  const user = new User({ email ,phoneNumber:phonenumber,password});

  // save the data
  user
    .save()
    .then((response) => {
      if (response && response._id) {
        return res.status(201).json({
          message: "User create successfull",
          data: response,
        });
      } else {
        return res.status(500).json({
          message: "User creation failed",
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        error: error.message,
        message: "Something went wrong",
      });
    });
};

export const userlogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is Invalid",
    });
  }
  if (!password) {
    return res.status(400).json({
      message: "Password is Invalid",
    });
   
  }
   const matchinguser = await User.findOne({ email });

 
  
  if (!matchinguser) {
    return res.status(400).json({
      message:"No User Found",
    })
  }

  if (matchinguser.password === password) {
    return res.status(200).json({
      message:"Login successful"
    })
    
  } else {
    return (
      res.status(200).json({
        error: "Wrong Credential",
        message:"Login failed",
      })
    )
  }
};



