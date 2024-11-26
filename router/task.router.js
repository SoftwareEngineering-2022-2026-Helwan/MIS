import {Router} from 'express';
import { task1Controller } from '../controller/task1.controller.js';
import { task2Controller } from '../controller/task2.controller.js';
import { task3Controller } from '../controller/task3.controller.js';
import { task4Controller } from '../controller/task4.controller.js';
import { task5Controller } from '../controller/task5.controller.js';
import { task6Controller } from '../controller/task6.controller.js';

export const taskRouter = Router();

taskRouter.post('/task1', task1Controller);
taskRouter.post('/task2', task2Controller);
taskRouter.post('/task3', task3Controller);
taskRouter.post('/task4', task4Controller);
taskRouter.post('/task5', task5Controller);
taskRouter.post('/task6', task6Controller);