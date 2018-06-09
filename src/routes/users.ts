import { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res, next) => {
    res.send(200).json();
});

export { router };
