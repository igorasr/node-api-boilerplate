import HealthCheckModel from "../entities/HealthCheckModel.js";

class HealthCheckService{
    constructor(healthCheckRepository){
        this.repository = healthCheckRepository;
    }
   
    async execute(){
        const healtCheckDTO = await this.repository.getAll();
        const healthCheck = new HealthCheckModel(healtCheckDTO)

        if(healthCheck.notifications.hasNotification())
            return healthCheck.notifications.getNotifications();

        return healthCheck;
    }
}

export default HealthCheckService;