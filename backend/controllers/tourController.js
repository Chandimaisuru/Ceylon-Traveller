

import Tour from "../models/Tour.js";

// create new tour

export const createTour = async (req,res) =>{
    const newTour = new Tour(req.body);

    try {
        const savedTour =await newTour.save();
        res.status(200).json({success:true,message:"Successfully Created",data:savedTour})
    } catch (error) {
        res.status(500).json({success:true,message:"Failed to created.Try again"})
    }
}

// update tour
export const updateTour = async (req,res) =>{

    const id = req.params.id;

   try {
     const updatedTour = await Tour.findByIdAndUpdate(
        id,
        {
            $set:req.body,
        },
        {new:true}
     );
     res.status(200).json({success:true,message:"Successfully Updated",data:updatedTour})

   } catch (error) {
    res.status(500).json({success:true,message:"Failed to update.Try again"})
   }
}  


// delete tour
export const deleteTour = async (req,res) =>{
    
    const id = req.params.id;

    try {
      const deletedTour = await Tour.findByIdAndDelete(id);
      res.status(200).json({success:true,message:"Successfully Deleted"})
 
    } catch (error) {
     res.status(500).json({success:true,message:"Failed to delete.Try again"})
    }
 }  


 // getsingle tour
export const getSingleTour = async (req,res) =>{
    
    const id = req.params.id;

    try {
      const tour = await Tour.findById(id);
      res.status(200).json({success:true,message:"Successfully",data:tour})
 
    } catch (error) {
     res.status(500).json({success:true,message:"Failed to search.Try again"})
    }
 }  

 // getAll tour

export const getAllTour = async (req,res) =>{

    // for pagination
    const page = parseInt(req.query.page);
    
    
    try {
        const tour = await Tour.find({})
        .skip(page * 8)
        .limit(8);

        res.status(200).json({success:true,count:tour.length,message:"Successfully",data:tour})
   
      } catch (error) {
       res.status(500).json({success:true,message:"Failed to search.Try again"})
      }
 }  