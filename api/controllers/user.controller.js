import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
 
export const test = (req,res)=>{
    res.json({message:"i m working fine"});
} ;

export const updateUser = async (req, res, next) => {
    // console.log("Request Body:", req.body);
  
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, "You can only update your own account"));
    }
  
    try {
      // If the password is being updated, hash the new password
      if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }
  
      // Update user details
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        }
      }, { new: true });
  
      // Check if user was successfully updated
      if (!updatedUser) {
        return next(errorHandler(404, "User not found"));
      }
  
      // Destructure the password out of the updated user object
      const { password, ...rest } = updatedUser._doc;
  
      // Log the updated user object (excluding password) for debugging
      
    //   console.log("Updated User:", rest);
  
      // Respond with the updated user object (excluding password)
      res.status(200).json(rest);
  
    } catch (error) {
      // Log any caught errors
      console.error("Error in updateUser:", error);
  
      // Pass the error to the error handling middleware
      next(error);
    }
  };