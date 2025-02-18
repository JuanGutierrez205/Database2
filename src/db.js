import mongoose from "mongoose";



const DB_USER = "admin"; // Usuario de MongoDB
const DB_PASSWORD = "vagrant"; // Contraseña del usuario
const DB_HOST = "selene.unicauca.edu.co"; // O IP del servidor MongoDB
const DB_PORT = "8004"; // Puerto en el que corre MongoDB
const DB_NAME = "appdb"; // Nombre de la base de datos

const mongoURI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
    
}


