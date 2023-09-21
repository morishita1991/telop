import { Canvas } from './canvas.js';

export class Text {
  constructor() {
    // フォント選択を監視
    const fontSelect = document.getElementById('font-select');
    fontSelect.addEventListener('click', (e) => {
      let fontButton = document.getElementById('fontFamilyList');
      const selectedValue = e.target.value;
      fontButton.value = selectedValue;
      fontButton.innerText = selectedValue;
      fontButton.setAttribute('style', `font-family: ${selectedValue};`);
      Canvas.createCanvas();
    });

    // サイズ選択を監視
    const fontSizeSelect = document.getElementById('fontSizeRange');
    fontSizeSelect.addEventListener('change', (e) => {
      // テキストのサイズ変更を影のサイズに追随させる
      let shadowSize = document.getElementById('shadowSizeRange');
      shadowSize.value = e.target.value;

      const inputFontSize = document.getElementById('input-font-size');
      inputFontSize.value = e.target.value;
      Canvas.createCanvas();
    });
    const inputFontSize = document.getElementById('input-font-size');
    inputFontSize.addEventListener('change', (e) => {
      // テキストのサイズ変更を影のサイズに追随させる
      let shadowSize = document.getElementById('shadowSizeRange');
      shadowSize.value = e.target.value;

      const fontSizeSelect = document.getElementById('fontSizeRange');
      fontSizeSelect.value = e.target.value;
      Canvas.createCanvas();
    });

    // 太さ選択を監視
    const fontWeightSelect = document.getElementById('fontWeightRange');
    fontWeightSelect.addEventListener('change', (e) => {
      const inputFontWeight = document.getElementById('input-font-weight');
      inputFontWeight.value = e.target.value;
      Canvas.createCanvas();
    });
    const inputFontWeight = document.getElementById('input-font-weight');
    inputFontWeight.addEventListener('change', (e) => {
      const fontWeightSelect = document.getElementById('fontWeightRange');
      fontWeightSelect.value = e.target.value;
      Canvas.createCanvas();
    });

    // 不透明度
    const fontOpacityRange = document.getElementById('fontOpacityRange');
    fontOpacityRange.addEventListener('change', (e) => {
      const inputOpacityText = document.getElementById('input-opacity-text');
      inputOpacityText.value = e.target.value;
      Canvas.createCanvas();
    });
    const inputOpacityText = document.getElementById('input-opacity-text');
    inputOpacityText.addEventListener('change', (e) => {
      const fontOpacityRange = document.getElementById('fontOpacityRange');
      fontOpacityRange.value = e.target.value;
      Canvas.createCanvas();
    });

    // 文字入力を監視
    const textInput = document.getElementById('input-text');
    textInput.addEventListener('input', (e) => {
      Canvas.createCanvas();
    });

    // 色選択を監視
    const textColor = document.getElementById('color-text');
    textColor.addEventListener('change', (e) => {
      const inputColor = document.getElementById('input-color-text');
      inputColor.value = e.target.value;
      Canvas.createCanvas();
    });
    const inputColorText = document.getElementById('input-color-text');
    inputColorText.addEventListener('change', (e) => {
      const inputColor = document.getElementById('color-text');
      inputColor.value = e.target.value;
      Canvas.createCanvas();
    });


  }
  static createDropDown() {
    const fontFamilies = [
      // 日本語
      'Kosugi', 'Noto Sans Japanese', 'Kiwi Maru',
      // 英語
      'Coiny', 'Squada One', 'Audiowide', 'Abril Fatface',
    ];
    fontFamilies.forEach(function (element) {
      // button要素
      let button = document.createElement("button");
      button.setAttribute('class', 'dropdown-item');
      button.setAttribute('button', 'button');
      button.value = element;
      button.innerText = element;
      button.setAttribute('style', `font-size:20px; font-family: ${element};`);

      // li要素
      let list = document.createElement("li");
      list.appendChild(button);

      const ul = document.getElementById('font-select');
      ul.appendChild(list);
    });
  }
}
