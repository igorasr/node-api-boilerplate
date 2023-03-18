import  Express  from "express";

class ExpressAdapter{
    constructor(){
        this.express = Express();
        this.#configure();
    }

    listen(...props){
        return this.express.listen(...props)
    }

    use(...handles){
        return this.express.use(...handles)
    }

    json(){
        return this.express.json();
    }

    #configure(){
        this.express.disable('x-powered-by');
    }
}

export default ExpressAdapter;