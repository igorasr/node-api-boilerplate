import NotificationsContext from './../../shared/libs/notifications/NotificationsContext.js';


class HealthCheckModel{

    constructor({uptime, memoryUsage, status='OK'}){
        this.uptime=uptime;
        this.memoryUsage=memoryUsage;
        this.status=status;

        this.notifications = new NotificationsContext();
        this.validate();
    }

    validate(){
        if(!this.uptime || this.uptime == '')
            this.notifications.addNotification('healthCheck', 'Cpu usage is missing');
        if(!this.memoryUsage || this.memoryUsage == '')
            this.notifications.addNotification('healthCheck', 'Memory usage is missing');
    }
}

export default HealthCheckModel;