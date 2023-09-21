import { Canvas } from './canvas.js';
import { baseX, baseY } from './const.js';

export class Shadow {
  constructor() {
    // 影チェックボックス
    const useShadowCheckBox = document.getElementById('shadowCheckBox');
    useShadowCheckBox.addEventListener('change', () => {
      Canvas.createCanvas();
    });

    // 角度の選択を監視
    const shadowDir = document.getElementById('shadowDegRange');
    shadowDir.addEventListener('change', (e) => {
      const inputShadowDeg = document.getElementById('input-shadow-deg');
      inputShadowDeg.value = e.target.value;
      Canvas.createCanvas();
    });
    const inputShadowDeg = document.getElementById('input-shadow-deg');
    inputShadowDeg.addEventListener('change', (e) => {
      const shadowDir = document.getElementById('shadowDegRange');
      shadowDir.value = e.target.value;
      Canvas.createCanvas();
    });
    // 距離の選択を監視
    const shadowGap = document.getElementById('shadowDisRange');
    shadowGap.addEventListener('change', (e) => {
      const inputShadowDis = document.getElementById('input-shadow-dis');
      inputShadowDis.value = e.target.value;
      Canvas.createCanvas();
    });
    const inputShadowDis = document.getElementById('input-shadow-dis');
    inputShadowDis.addEventListener('change', (e) => {
      const shadowGap = document.getElementById('shadowDisRange');
      shadowGap.value = e.target.value;
      Canvas.createCanvas();
    });
    // 影のサイズの選択を監視
    const shadowSize = document.getElementById('shadowSizeRange');
    shadowSize.addEventListener('change', (e) => {
      const inputShadowSize = document.getElementById('input-shadow-size');
      inputShadowSize.value = e.target.value;
      Canvas.createCanvas();
    });
    const inputShadowSize = document.getElementById('input-shadow-size');
    inputShadowSize.addEventListener('change', (e) => {
      const shadowSize = document.getElementById('shadowSizeRange');
      shadowSize.value = e.target.value;
      Canvas.createCanvas();
    });
    // 影の不透明度の選択を監視
    const shadowOpacity = document.getElementById('shadowOpacityRange');
    shadowOpacity.addEventListener('change', (e) => {
      const inputShadowOpacity = document.getElementById('input-shadow-opacity');
      inputShadowOpacity.value = e.target.value;
      Canvas.createCanvas();
    });
    const inputShadowOpacity = document.getElementById('input-shadow-opacity');
    inputShadowOpacity.addEventListener('change', (e) => {
      const shadowOpacity = document.getElementById('shadowOpacityRange');
      shadowOpacity.value = e.target.value;
      Canvas.createCanvas();
    });
    // 色の選択を監視
    const shadowColor = document.getElementById('color-shadow');
    shadowColor.addEventListener('change', (e) => {
      const inputColorShadow = document.getElementById('input-color-shadow');
      inputColorShadow.value = e.target.value
      Canvas.createCanvas();
    });
    const inputColorShadow = document.getElementById('input-color-shadow');
    inputColorShadow.addEventListener('change', (e) => {
      const shadowColor = document.getElementById('color-shadow');
      shadowColor.value = e.target.value;
      Canvas.createCanvas();
    });
  }

  static shadowPosition()
  {
    const deg = document.getElementById('shadowDegRange').value;
    const rad = deg * (Math.PI / 180);
    const d = document.getElementById('shadowDisRange').value;
    const shadowX = baseX + d * Math.cos(rad);
    const shadowY = baseY + (d * Math.sin(rad) * (-1));
    return { shadowX, shadowY };
  }
}
