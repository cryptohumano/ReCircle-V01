import { Request, Response } from 'express';
import { RecyclingRecord } from '../models/RecyclingRecord';
import { User } from '../models/User';

export const createRecyclingRecord = async (req: Request, res: Response) => {
  try {
    const { userId, materialType, weight } = req.body;
    
    // Calcular puntos basados en el peso y tipo de material
    const pointsMultiplier = {
      plastic: 10,
      paper: 5,
      glass: 8,
      metal: 12,
      electronic: 15,
    };
    
    const points = weight * pointsMultiplier[materialType as keyof typeof pointsMultiplier];

    const record = await RecyclingRecord.create({
      userId,
      materialType,
      weight,
      points,
    });

    // Actualizar puntos del usuario
    await User.findByIdAndUpdate(userId, {
      $inc: { recyclingPoints: points }
    });

    res.status(201).json({
      success: true,
      data: record,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear registro de reciclaje',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
};

export const getUserRecyclingHistory = async (req: Request, res: Response) => {
  try {
    const records = await RecyclingRecord.find({ userId: req.params.userId })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: records,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener historial de reciclaje',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
}; 