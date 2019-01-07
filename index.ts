import * as express from 'express';

const app: express.Express = express();

app.get('/', (req: express.Request, res: express.Response) => {    
    res.send( "Running TypeScript on Google App Engine" );
});

const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});