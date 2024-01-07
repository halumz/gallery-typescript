interface ScreenshotResult {
  id: number;
  image: string;
  preview: string;
}
interface Screenshot {
  results: ScreenshotResult[];
}
export default Screenshot;
