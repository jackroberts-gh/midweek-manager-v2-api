import { NextFunction, Request, Response, Router } from 'express';
import passport from '../auth';

const router: Router = Router();

router.get('/login', passport.authenticate('auth0', {}), (req: Request, res: Response, next: NextFunction) => {
    console.log('1');
    res.redirect('/');
});

router.get('/callback', passport.authenticate('auth0', { failureRedirect: '/login'}), (req: Request, res: Response, next: NextFunction) => {
    console.log('2');
    if (!req.user) {
        return next({ status: 401, message: 'No user found by auth0'});
    }
    res.redirect('/');
});

export { router };
