import path from 'path';
import {
    inputImageExists,
    outputImageExists
} from '../../utilities/fileExists';

describe('test inputImageExists function', () => {
    it('expects inputImageExists() to be resolved', async () => {
        const resultInputPath = await inputImageExists(
            path.join(__dirname, '../../../images/full/fjord.jpg')
        );
        expect(resultInputPath).toBeTrue();
    });
});

describe('test inputImageExists function with a wrong file name', () => {
    it('inputImageExists function fails, because the file name is wrong', async () => {
        const resultInputPath = await inputImageExists(
            path.join(__dirname, '../../../images/full/jor.jpg')
        );
        expect(resultInputPath).toBeFalse();
    });
});

// For these two tests, the image 600_350_fjord.jpg must be present in the thumb folder
describe('test outputImageExists function', () => {
    it('expects outputImageExists() to be resolved', async () => {
        const resultOutputPath = await outputImageExists(
            path.join(__dirname, '../../../images/thumb/600_350_fjord.jpg')
        );
        expect(resultOutputPath).toBeTrue();
    });
});

describe('test outputImageExists function with a wrong file name', () => {
    it('outputImageExists function fails, because the file name is wrong', async () => {
        const resultOutputPath = await outputImageExists(
            path.join(__dirname, '../../../images/thumb/600_350_jor.jpg')
        );
        expect(resultOutputPath).toBeFalse();
    });
});
