import * as express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import { router } from './routes/auth';
import captains from './common/logger';
import errorHandling from './common/error-handling';

const app: express.Application = express();
const server: http.Server = http.createServer(app);

app.use(bodyparser.json());
app.use('/', router);
app.use(errorHandling);

server.listen(process.env.PORT || 3000, () => {
    captains.log('info', `KEVIN DE BRUYNE is now listening on port ${process.env.PORT || 3000}`);
});
