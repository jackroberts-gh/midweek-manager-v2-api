import * as passport from 'passport';
import * as auth0 from 'passport-auth0';
import config from '../config';

const callback = (accessToken, refreshToken, extraParams, profile, done) => done(null, profile);

const strat = new auth0({
    callbackURL: '/callback',
    clientID: config.client_id,
    clientSecret: config.client_secret,
    domain: config.domain,
}, callback);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

export default passport.use(strat);
