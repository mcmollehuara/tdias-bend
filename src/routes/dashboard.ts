'use strict';

// Test routes
import { Router } from 'express';
import { dashboardData } from '../controllers/dashboard';

let router = Router();
router.get('/dashboard', dashboardData);

export = router;
