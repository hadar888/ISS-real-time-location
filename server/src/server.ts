import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = 4000;

app.get('/', async (req: Request, res: Response) => {
  console.log('trying to get ISS current location...');
  try {
    const response = await axios.get('http://api.open-notify.org/iss-now.json');
    res.json(response.data);
  } catch (error) {
    console.log('ERROR: could not receive ISS current location');
    res.status(500).json({ error: 'Failed to fetch data from API' });
    return;
  }
  console.log('Successfully received ISS current location');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
