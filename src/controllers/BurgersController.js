import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('/test', this.getTest)

  }


  async getTest(request, response, next) {
    try {
      response.send('Test Success!')
    } catch (error) {
      next(error)
    }
  }
}

