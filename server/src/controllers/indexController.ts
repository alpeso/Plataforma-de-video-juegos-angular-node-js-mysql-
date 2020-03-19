import { Request, Response } from 'express';

class IndexController{

    public index(re:Request, res: Response){
        res.json({text: 'Api Is /Api/games'});
    }
}

export const indexController = new IndexController();