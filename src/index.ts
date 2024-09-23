import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON
app.use('/api/users', userRoutes); // Ruta para el perfil de usuario

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;