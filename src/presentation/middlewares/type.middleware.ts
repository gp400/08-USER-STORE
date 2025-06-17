import { NextFunction, Request, Response } from "express";

export class TypeMiddlware {
    static validTypes( validTypes: string[] ){

        return ( req: Request, res:Response, next: NextFunction ) => {
            const type = req.url.split('/').at(2) ?? '';
            console.log({ type });
            if (!validTypes.includes( type )) {
                return res.status(400)
                    .json({ error: `Invalid type: ${ type }, valid ones ${ validTypes }` });
            }

            next();
        }

        // if ( !req.files || Object.keys(req.files).length === 0 ){
        //     return res.status(400).json({ error: 'No files were selected' })
        // }

        // if ( !Array.isArray( req.files.file ) ){
        //     req.body.files = [ req.files.file ];
        // } else {
        //     req.body.files = req.files.file;
        // }

        // next();
    }
}