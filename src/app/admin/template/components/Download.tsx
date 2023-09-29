export default function download(canvas: HTMLCanvasElement) {
  let link = document.createElement("a");
  link.href = canvas.toDataURL();
  link.download = "telop.png";
  link.click();
}
