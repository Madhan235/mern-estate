import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import Listing from "../models/listing.model.js";
 
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

  export const deleteUser = async (req, res, next) => {

      if(req.user.id !== req.params.id) {
return next(errorHandler(401, "You can only delete your own account !"));
}

try {
    await User.findByIdAndDelete(req.params.id)
    res.clearCookie('access_token');
    res.status(200).json({message: "User has been deleted"})
} catch (error) {
    next(error);
}
  };

  export const signout = async (req, res, next) => {
     try {
        res.clearCookie('access_token');
        res.status(200).json({message: "User has been logged out"});
     } catch (error) {
        next(error);
     }
  };

  export const getUserListings = async (req, res, next) => {
     if(req.user.id === req.params.id){
        try {
          
      const listings = await Listing.find({userRef : req.params.id});
      res.status(200).json(listings);

        } catch (error) {
          next(error);
        }
     }else{
      return next(errorHandler(401,"You can only view your own listings"));
     }
  };


  export const getUser = async (req, res, next) => {

    try {
      const user = await User.findById(req.params.id);
      if(!user) return next(errorHandler(404,"User not found"));

      const { password : pass , ...rest} = user._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };