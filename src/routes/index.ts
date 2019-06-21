import { Router } from 'express';
// import '../models';
import { listEvent, createEvent } from './event.route';
import { listUser } from './user.route';
// import cve from './cve.route';

const router = Router();

// router.get('/', async (req, res) => {
//   const users = await User.findAll();
//   res.send(users);
// });
router.get('/users', listUser);
router.get('/events', listEvent);
router.post('/events', createEvent);

router.get('/users', listUser);

// router.get(/^\/cve(\.(json|html|xml))?$/, cve.list);
// router.get(/^\/cve\/([a-zA-Z0-9\-]+)(\.(json|html|xml))?$/, cve.get);

export default router;
