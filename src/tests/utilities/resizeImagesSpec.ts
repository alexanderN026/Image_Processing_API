import resize from '../../utilities/resizeImage';

describe('Test resize function', () => {
    const imageIn = 'icelandwaterfall.jpg';
    const imageOut = '600_300_icelandwaterfall.jpg';
    const width = 600;
    const height = 300;
    it('expects resize() to be resolved', async () => {
        await expectAsync(
            resize(imageIn, imageOut, width, height)
        ).toBeResolved();
    });
    describe('Behavior of the resize function without image', () => {
        it('resize function fails, because no image exists', async () => {
            await expectAsync(resize('', '', width, height)).toBeRejected();
        });
    });
});
