export class FileUploadService {
    constructor() {}

    private checkFolder( folderPath: string ){
        throw new Error('Not Implemented');
    }

    uploadSingle(
        file: any,
        folder: string = 'uploads',
        validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif']
    ){}

    uploadMultiple(
        file: any[],
        folder: string = 'uploads',
        validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif']
    ){}
}