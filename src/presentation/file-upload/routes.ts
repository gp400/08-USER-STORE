import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middlware';
import { FileUploadController } from './controller';

export class FileUploadRoutes {

  static get routes(): Router {

    const router = Router();
    const controller = new FileUploadController();

    router.post('/single/:type', controller.uploadFile);
    router.post('/multiple/:type', controller.uploadMultipleFiles)

    return router;
  }

}

