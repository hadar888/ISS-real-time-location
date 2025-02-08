import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';
import appConfig from './appConfig';
import { IssLocation } from './modals';

const app = express();

const corsOptions = {
  origin: appConfig.clientUrl,
  methods: ['GET'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

let cache: IssLocation = { data: null, timestamp: 0 };
const CACHE_DURATION = 1000;

app.get('/', async (req: Request, res: Response) => {
  console.log('trying to get ISS current location...');

  const now = Date.now();

  try {
    if (cache.data && now - cache.timestamp < CACHE_DURATION) {
      res.json(cache.data);
    }
    else {
      const response = await axios.get(appConfig.apiUrl);
      cache = { data: response.data.iss_position, timestamp: now };
      res.json(response.data);
    }
  } catch (error) {
    console.log('ERROR: could not receive ISS current location');
    res.status(500).json({ error: 'Failed to fetch data from API' });
    return;
  }
  console.log('Successfully received ISS current location');
});

app.listen(appConfig.port, () => {
  console.log(`Server is running on http://localhost:${appConfig.port}`);
});
