import { IConfig } from '../interfaces';

const config: IConfig = {
    callback: '/callback',
    client_id: process.env.cient_id,
    client_secret: process.env.client_secret,
    domain: process.env.domain,
};

export default config as IConfig;
