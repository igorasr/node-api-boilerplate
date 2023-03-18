import BaseController from "./BaseController.js";

class HealthCheckController extends BaseController {
  constructor({ service, validator = null }) {
    super({ service, validator });
  }

  static initialize(props) {
    const instance = new HealthCheckController(props);

    return instance;
  }

  async get(req, res) {
    try {

      const result = await this.service.execute();

      return this.ok(res, {data: result});

    } catch (error) {
      return this.fail(res, error);
    }
    
  }
}

export default HealthCheckController;
