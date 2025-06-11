import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middlware';
import { ProductController } from './controller';

export class ProductRoutes {

  static get routes(): Router {

    const router = Router();
    // const categoryService = new CategoryService();
    const controller = new ProductController();

    router.get('/', controller.getProducts);
    router.post('/', [AuthMiddleware.validateJWT], controller.createProduct)

    return router;
  }

}

