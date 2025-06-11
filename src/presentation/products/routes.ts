import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middlware';
import { ProductController } from './controller';
import { ProductService } from '../services/productService';

export class ProductRoutes {

  static get routes(): Router {

    const router = Router();
    const productService = new ProductService();
    const controller = new ProductController(productService);

    router.get('/', controller.getProducts);
    router.post('/', [AuthMiddleware.validateJWT], controller.createProduct)

    return router;
  }

}

