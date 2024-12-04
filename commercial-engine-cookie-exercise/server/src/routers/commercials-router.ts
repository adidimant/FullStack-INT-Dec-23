import express from 'express';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { CommercialModel } from '../models/commercial.model';
import { UserWatchingModel } from '../models/user-watchings.model';

const commercialsRouter = express.Router();

commercialsRouter.get('/', async (req, res) => {
  const UID = req?.cookies?.UID; // the userId in the commercial system

  let commercialsToWatch;

  if (UID) {
    const watchedCommercials = await UserWatchingModel.find({ userId: UID });

    if (watchedCommercials.length) {
      const commercialsConditionsArr = watchedCommercials.map((watchedCommercial) => {
        return { id: watchedCommercial.commercialId };
      });
      commercialsToWatch = await CommercialModel.find({$or: commercialsConditionsArr});

      await UserWatchingModel.updateMany({ userId: UID }, { watchedDate: new Date() });// updating that the user watched again
    }
  }

  const userId = UID || uuidv4();

  if (!commercialsToWatch) {
    commercialsToWatch = await CommercialModel.find().limit(5);
    
    await Promise.all(commercialsToWatch.map(async (commercialToWatch) => {
      const watchedDate = new Date();

      const userWatchedInstance = new UserWatchingModel({
        userId,
        commercialId: commercialToWatch.id,
        watchedDate,
      });

      await userWatchedInstance.save();
    })).catch((err) => {
      // logging without respondin with 500, since anyway we would like to response with commercials
      console.log("Error occured when saving new commercials watched");
    });
  }

  res.cookie('UID', userId);
  res.json(commercialsToWatch);
});

commercialsRouter.put('/create', async (req, res) => {
  const { title, description, imageUrl } = req.body;

  if (!imageUrl || typeof imageUrl != 'string') {
    res.status(400).send('imageUrl is required for a commercial');
  }

  const commercialId = uuidv4();
  const createdDate = new Date();

  await CommercialModel.create({
    title,
    description,
    imageUrl,
    id: commercialId,
    createdDate,
  });

  res.status(201).json({ commercialId, message: 'Commercial upload succesfully '});
});

export default commercialsRouter;