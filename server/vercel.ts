
import express from 'express';
import { registerRoutes } from './routes';
import { connectToMongoDB } from './db';

const app = express();

// Add CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('dist/public'));

// Connect to MongoDB
connectToMongoDB();

// Register all routes
registerRoutes(app);

export default app;
