

import express from 'express'
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from '../controllers/tourController.js'

const router = express.Router()

// create new tour
router.post('/',createTour)

// update new tour
router.put('/:id',updateTour)

// delete new tour
router.delete('/:id',deleteTour)

// get single tour
router.get('/:id',getSingleTour)

// get all tour
router.get('/',getAllTour)


export default router;