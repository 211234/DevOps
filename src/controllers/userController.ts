import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import userService from '../services/userService';

export const updateUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const { name, email, password } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: 'Nombre y correo son obligatorios' });
        }

        let hashedPassword = undefined;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }

        const updatedUser = await userService.updateUserProfile(userId, name, email, hashedPassword);

        if (updatedUser) {
            res.status(200).json({ message: 'Perfil actualizado con éxito', user: updatedUser });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ message: 'Error del servidor', error: errorMessage });
    }
};
