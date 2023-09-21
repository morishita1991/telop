export class Downloader {
  constructor() {
    const downloader = document.getElementById('download');
    downloader.addEventListener('click', (e) => {
      Downloader.downloadImage();
    });
  }
  static downloadImage()
  {
    const canvas = document.getElementById('canvas');
    let link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "telop.png";
    link.click();
  }
}
