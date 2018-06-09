import * as express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import { router } from './routes/auth';
import captains from './common/logger';
import errorHandling from './common/error-handling';
import passport from './auth';

const app: express.Application = express();
const server: http.Server = http.createServer(app);

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use('/', router);
app.use(errorHandling);

server.listen(process.env.PORT || 3000, () => {
    captains.log('info', `KEVIN DE BRUYNE is now listening on port ${process.env.PORT || 3000}`);
});
