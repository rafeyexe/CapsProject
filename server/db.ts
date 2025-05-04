import mongoose from 'mongoose';

// Construct the MongoDB connection string with the password from environment variables
const password = process.env.MONGODB_PASSWORD;
if (!password) {
  throw new Error("MONGODB_PASSWORD must be set");
}

const connectionString = `mongodb://aleeshayirfan:${password}@ac-y6d4qdl-shard-00-00.cpfhpgx.mongodb.net:27017,ac-y6d4qdl-shard-00-01.cpfhpgx.mongodb.net:27017,ac-y6d4qdl-shard-00-02.cpfhpgx.mongodb.net:27017/?replicaSet=atlas-9127lx-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB with improved error handling
export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    //More robust error handling might be needed here, such as retry logic or alerting.
    process.exit(1); //Exit the process if connection fails.
  }
};

// Export the mongoose instance for use in other parts of the application
export { mongoose };