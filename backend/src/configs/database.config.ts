import { connect, ConnectOptions } from 'mongoose';
import mongoose from 'mongoose';

mongoose.set('strictQuery', true)
export const dbConnect = () => {
    connect (process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions).then(
        () => console.log( 'Database connected' ),
        (error) => console.log(error)
    )   
}