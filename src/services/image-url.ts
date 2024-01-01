import ImagePlaceholder from '../assets/no-image-placeholder.webp';

const cropImage = (url: string) => {
  if (!url) {
    return ImagePlaceholder;
  }
  const croppedUrl = url.replace('/media/', '/media/crop/600/400/');
  return croppedUrl;
};
export { cropImage };
