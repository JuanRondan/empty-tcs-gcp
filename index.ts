import * as express from 'express';

const app: express.Express = express();
const env: string = process.env.NODE_ENV || "localhost";
const PORT = process.env.PORT || 3000;

app.get('/', (req: express.Request, res: express.Response) => {    
    res.send( "Running V2 on " + env );
});

app.listen( PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});