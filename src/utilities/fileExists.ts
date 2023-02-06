// The approach for this code comes from the Node.js documentation
// https://nodejs.org/docs/v16.16.0/api/fs.html#fspromisesaccesspath-mode
import { access } from 'fs/promises';
import { constants } from 'fs';

const inputImageExists = async (Path: string): Promise<boolean> => {
    try {
        await access(Path, constants.R_OK | constants.W_OK);
        console.log('The image currently exists in the input folder');
        return true;
    } catch (e) {
        console.error('The image does not currently exist in the input folder');
        return false;
    }
};

const outputImageExists = async (Path: string): Promise<boolean> => {
    try {
        await access(Path, constants.R_OK | constants.W_OK);
        console.log('The image currently exists in the output folder');
        return true;
    } catch (e) {
        console.error(
            'The image does not currently exist in the output folder and will be created immediately if there is an image in the input folder'
        );
        return false;
    }
};

export { inputImageExists, outputImageExists };
