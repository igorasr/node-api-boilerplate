import cors from "cors";
import httpCodes from "../../shared/enums/HttpCodes.js";

class Server {
    constructor(adapter) {
      this.server = adapter;
    }

    static initialize(adapter, routes, middlewares = "") {
      const server = new Server(adapter);
      // server._configureMiddlewares(middlewares);
      server._configureRoutes(routes);
      return server.server;
    }

    _configureRoutes(routes) {
      this.server.use("/api/v1", routes);
      this.server.use((req, res, next) => {
        res.status(httpCodes.NOT_FOUND).json({
          message:
            "Ohh you are lost, read the API documentation to find your way back home :)",
        });
      });
    }

    _configureMiddlewares(middlewares) {
      this._defaultMiddlewares();
      this.server.use(middlewares);
    }

    _defaultMiddlewares() {
      this.server.use(this.server.json());
      this.server.use(cors());
    }
}

export default Server;
