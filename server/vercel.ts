
import express from 'express';
import { registerRoutes } from './routes';
import { connectToMongoDB } from './db';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
connectToMongoDB();

// Register all routes
registerRoutes(app);

export default app;
