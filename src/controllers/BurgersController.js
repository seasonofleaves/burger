import BaseController from "../utils/BaseController.js";
import { burgersService } from "../services/BurgersService.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('/menu', this.getBurgers)

  }


  async getBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }
}

