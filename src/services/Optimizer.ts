import Compressor from 'compressorjs';

export class Optimizer {
    public static async compressFile(file:Blob, quality: number, width: number, height: number, shouldMaintainAspectRatio:boolean) : Promise<Blob> {
        return new Promise<Blob>((resolve, reject) => {
            new Compressor(file, {
                strict: true,
                width: width,
                height: height,
                quality: quality,
                success(result) {
                    return resolve(result)
                },
                error(err) {
                    // console.log(err.message);
                    return reject(err)
                },
            });
        })
    }
}
