import { Canvas } from './canvas.js';

export class Stroke {
  constructor() {
    Stroke.addStrokeElement();

    // ストローク利用
    const useStrokeCheckBox = document.getElementById('strokeCheckBox');
    useStrokeCheckBox.addEventListener('change', () => {
      Canvas.createCanvas();
    });

    // 向きの選択を監視
    const edge1 = document.getElementById('stroke-edge-inner-1');
    edge1.addEventListener('change', () => {
      Canvas.createCanvas();
    });
    const edge2 = document.getElementById('stroke-edge-outer-1');
    edge2.addEventListener('change', () => {
      Canvas.createCanvas();
    });
    // 線の太さの選択を監視
    const strokeWidthRange = document.getElementById('strokeWidthRange1');
    strokeWidthRange.addEventListener('change', (e) => {
      const inputStrokeWeight = document.getElementById('input-stroke-weight-1');
      inputStrokeWeight.value = e.target.value;
      Canvas.createCanvas();
    });
    const inputStrokeWeight = document.getElementById('input-stroke-weight-1');
    inputStrokeWeight.addEventListener('change', (e) => {
      const strokeWidthRange = document.getElementById('strokeWidthRange1');
      strokeWidthRange.value = e.target.value;
      Canvas.createCanvas();
    });
    // 不透明度を監視
    const strokeOpacityRange = document.getElementById('strokeOpacityRange1');
    strokeOpacityRange.addEventListener('change', (e) => {
      const inputOpacityStroke = document.getElementById('input-opacity-stroke-1');
      inputOpacityStroke.value = e.target.value;
      Canvas.createCanvas();
    });
    const inputOpacityStroke = document.getElementById('input-opacity-stroke-1');
    inputOpacityStroke.addEventListener('change', (e) => {
      const strokeOpacityRange = document.getElementById('strokeOpacityRange1');
      strokeOpacityRange.value = e.target.value;
      Canvas.createCanvas();
    });
    // 色の選択を監視
    const strokeColor = document.getElementById('color-stroke-1');
    strokeColor.addEventListener('change', (e) => {
      const inputStrokeColor = document.getElementById('input-color-storke-1');
      inputStrokeColor.value = e.target.value;
      Canvas.createCanvas();
    });
    const inputStrokeColor = document.getElementById('input-color-storke-1');
    inputStrokeColor.addEventListener('change', (e) => {
      const strokeColor = document.getElementById('color-stroke-1');
      strokeColor.value = e.target.value;
      Canvas.createCanvas();
    });
  }

  static addStrokeElement(targetId = null) {
    // ストローク追加ボタンのDOM生成
    const newStrokeId = Stroke.addStroke(targetId);
    if (!newStrokeId) {
      return;
    }
    if (targetId !== null) {
      Stroke.changeToRemoveStrokeButton(targetId);
    }

    // 新しいストローク追加ボタンのクリックイベント付与
    const newAddStroke = document.getElementById(newStrokeId);
    newAddStroke.addEventListener('click', (e) => {
      this.addStrokeElement(e.target.id);
    });
  }

  static changeToRemoveStrokeButton(strokeId) {
    // ストローク追加ボタンを削除ボタンに変更
    const strokeArr = strokeId.split('_');
    const newRemoveId = 'removeStroke_' + strokeArr[1];
    const additionalStrokeDiv = document.getElementById('additionalStrokeDiv_' + strokeArr[1]);
    additionalStrokeDiv.innerHTML = `<p class="mt-2 mb-2">削除</p>
          <button type="button" class="btn btn-warning rounded-circle p-0 removeStroke" id="${newRemoveId}" style="width:2rem;height:2rem;">−</button>`;

    // ストローク削除ボタンのクリックイベント付与
    const removeStroke = document.getElementById(newRemoveId);
    removeStroke.addEventListener('click', (e) => {
      const targetId = e.target.id;
      const strokeArr = targetId.split('_');
      Stroke.removeStroke(strokeArr[1]);
    });
  }

  static removeStroke(strokeNum) {
    const strokeDiv = document.getElementById('stroke_' + strokeNum);
    strokeDiv.remove();
  }

  static addStroke(strokeId = null) {
    if (!strokeId) {
      strokeId = 'addStroke_0';
    }
    const strokeArr = strokeId.split('_');
    if (strokeArr.length !== 2) {
      return null;
    }
    const newStrokeNum = String(Number(strokeArr[1]) + 1);
    const newStrokeId = 'addStroke_' + newStrokeNum;

    const html = `<div class="row" id="stroke_${newStrokeNum}">
      <div class="col-sm-11" style="max-width:980px">
        <div class="row border m-3 me-3 h5">
          <div class="row p-3 ms-3">
            <div class="col-sm-4 pt-4 mt-2 mb-3 me-4" style="max-width:150px">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="strokeEdge" id="stroke-edge-inner-${newStrokeNum}">
                <label class="form-check-label" for="stroke-edge-inner-${newStrokeNum}">
                  内側
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="strokeEdge" checked id="stroke-edge-outer-${newStrokeNum}">
                <label class="form-check-label" for="stroke-edge-outer-${newStrokeNum}">
                  外側
                </label>
              </div>
            </div>
            <div class="col-sm-4 me-5" style="max-width:200px">
              <div class="row">
                <div class="col-12 mt-4">
                  <span class="mb-2" style="display: inline-block">太さ</span>
                  <input type="text" class="form-control ms-2" id="input-stroke-weight-${newStrokeNum}" value="0" style="max-width: 50px; display: inline-block">
                  <input type="range" class="form-range" min="0" max="20" step="1" id="strokeWidthRange${newStrokeNum}" value="0" style="max-width:200px">
                </div>
              </div>
            </div>
            <div class="col-sm-4" style="max-width:200px">
              <div class="col-12 mt-3">
                <span style="display: inline-block">色</span>
                <input type="text" class="form-control ms-2" id="input-color-storke-${newStrokeNum}" value="#000000" style="max-width:100px; display: inline-block">
                <input type="color" class="form-control form-control-color mt-2" id="color-stroke-${newStrokeNum}" name="color" style="font-size:20px;" value="#000000">
              </div>
            </div>
            <div class="col-sm-4 ms-3" style="max-width:200px">
              <div class="row">
                <div class="col-12 mt-4">
                  <span style="display: inline-block">不透明度</span>
                  <input type="text" class="form-control ms-2" id="input-opacity-stroke-${newStrokeNum}" value="1" style="max-width:50px; display: inline-block">
                  <input type="range" class="form-range" min="0" max="1" step="0.1" id="strokeOpacityRange${newStrokeNum}" value="1" style="max-width:200px">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-1 m-2">
        <div class="col-12 mt-4 pt-3 h6" id="additionalStrokeDiv_${newStrokeNum}">
          <p class="mt-2 mb-2">追加</p>
          <button type="button" class="btn btn-secondary rounded-circle p-0" id="${newStrokeId}" style="width:2rem;height:2rem;">＋</button>
        </div>
      </div>
    </div>`;

    document.getElementById('strokeAria').insertAdjacentHTML('beforeend', html);
    return newStrokeId;
  }
}
