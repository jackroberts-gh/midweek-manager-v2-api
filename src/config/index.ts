import { IConfig } from '../interfaces';

const config: IConfig = {
    client_id: process.env.client_id,
    client_secret: process.env.client_secret,
    domain: process.env.domain,
};

export default config as IConfig;
