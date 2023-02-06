import sharp from 'sharp';
import path from 'path';

const resize = async (
    fileNameIn: string,
    fileNameOut: string,
    imageWidth: number,
    imageHeight: number
): Promise<void> => {
    try {
        await sharp(path.join(__dirname, '../../images/full', fileNameIn))
            .resize(imageWidth, imageHeight)
            .toFile(path.join(__dirname, '../../images/thumb', fileNameOut));
    } catch (e) {
        console.error('Error in resize function');
        throw e;
    }
};

export default resize;
