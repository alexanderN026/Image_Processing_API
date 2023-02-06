import express from 'express';
import path from 'path';
import resize from '../../utilities/resizeImage';
import {
    inputImageExists,
    outputImageExists
} from '../../utilities/fileExists';

const images = express.Router();

images.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        const fileNameUrl = req.query.filename as string;
        const widthImage = Number(req.query.width);
        const heightImage = Number(req.query.height);
        const outputFile = `${widthImage}_${heightImage}_${fileNameUrl}`;
        try {
            const fileNameUrlExists = await inputImageExists(
                path.join(__dirname, '../../../images/full', fileNameUrl)
            );
            const outputFileExists = await outputImageExists(
                path.join(__dirname, '../../../images/thumb', outputFile)
            );
            if (!fileNameUrlExists) {
                res.send(
                    'The filename is invalid. For example, a valid file name would be http://localhost:3000/api/images?filename=fjord.jpg&width=1000&height=600'
                );
            } else if (
                Number.isNaN(widthImage) ||
                Number.isNaN(heightImage) ||
                widthImage < 0 ||
                heightImage < 0
            ) {
                res.send(
                    'The numbers for width and height are invalid. The valid numbers must be greater than zero'
                );
            } else if (!outputFileExists) {
                await resize(fileNameUrl, outputFile, widthImage, heightImage);
                res.sendFile(
                    path.join(__dirname, '../../../images/thumb', outputFile)
                );
            } else {
                res.sendFile(
                    path.join(__dirname, '../../../images/thumb', outputFile)
                );
            }
        } catch (e) {
            console.error('Image cannot be displayed due to an error');
            throw e;
        }
    }
);

export default images;
