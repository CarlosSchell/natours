import express from 'express'
import {
  checkID,
  checkBody,
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
} from './../controllers/tourController.js'

const router = express.Router()

router.param('id', checkID)

router
  .route('/')
  .get(getAllTours)
  .post(checkBody, createTour)

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour)

export default router
