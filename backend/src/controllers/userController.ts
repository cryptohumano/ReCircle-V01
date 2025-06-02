import { Request, Response } from 'express';
import { User } from '../models/User';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { walletAddress, username, email } = req.body;

    const userExists = await User.findOne({ 
      $or: [{ walletAddress }, { email }] 
    });

    if (userExists) {
      return res.status(400).json({ 
        message: 'Usuario ya existe con esa wallet o email' 
      });
    }

    const user = await User.create({
      walletAddress,
      username,
      email,
    });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al registrar usuario',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ walletAddress: req.params.walletAddress });
    
    if (!user) {
      return res.status(404).json({ 
        message: 'Usuario no encontrado' 
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener perfil',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
}; 