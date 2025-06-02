import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import userRoutes from './routes/userRoutes';
import recyclingRoutes from './routes/recyclingRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/recycling', recyclingRoutes);

// Conectar a la base de datos
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
}); 