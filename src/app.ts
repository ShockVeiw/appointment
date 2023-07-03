import express from 'express';
import { connect } from 'mongoose';

const app = express();
const port = 8080;

connect('mongodb://localhost:27017/appointment')
    .then(() => {
        console.log('db connected');

        app.listen(port, () => {
            console.log(`server started at http://localhost:${ port }`);
        });
    })
    .catch(err => {
        console.error("Error during database connection:", err);
    })
