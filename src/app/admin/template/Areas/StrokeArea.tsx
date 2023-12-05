import React, { useContext } from 'react';
import styled from "styled-components";
import Collapse from '../../../../../node_modules/@mui/material/Collapse/Collapse';
import Button from '../../../../../node_modules/@mui/material/Button/Button';
import StrokeColorPicker from '../components/Stroke/StrokeColorPicker';
import StrokeEdgeRadioButtons from '../components/Stroke/StrokeEdgeRadioButtons';
import StrokeOpacityRangeBar from '../components/Stroke/StrokeOpacityRangeBar';
import StrokeWidthRangeBar from '../components/Stroke/StrokeWidthRangeBar';
import { StrokeCheckButtonContext } from "../components/providers/Stroke/StrokeCheckButtonProvider";

const SDiv2 = styled.div`
  max-width: 1080px;
`;
const SDiv3 = styled.div`
  max-width: 980px;
`;
const SDiv4 = styled.div`
  max-width: 150px;
`;
const SDiv5 = styled.div`
  max-width: 200px;
`;

export default function StrokeArea() {
  const { open, setOpen } = useContext(StrokeCheckButtonContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="d-flex flex-row h4">
        <Button variant="outlined" color="primary" size="small" onClick={handleClick}>
          ストローク
        </Button>
      </div>
      <Collapse in={open}>
          <SDiv2 className="border ms-3 mb-5">
            <div className="row">
              <SDiv3 className="col-sm-11">
                <div className="row border m-3 me-3 h5">
                  <div className="row p-3 ms-3">
                    <SDiv4 className="col-sm-4 pt-4 mt-2 mb-3 me-4">
                      <StrokeEdgeRadioButtons></StrokeEdgeRadioButtons>
                    </SDiv4>
                    <SDiv5 className="col-sm-4 me-5">
                      <StrokeWidthRangeBar text={'太さ'} min={0} max={20} step={1}></StrokeWidthRangeBar>
                    </SDiv5>
                    <SDiv5 className="col-sm-4 ms-3 mt-5">
                      <StrokeColorPicker></StrokeColorPicker>
                    </SDiv5>
                    <SDiv5 className="col-sm-4">
                      <StrokeOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></StrokeOpacityRangeBar>
                    </SDiv5>
                  </div>
                </div>
              </SDiv3>
              <div className="col-sm-1 m-2">
                <div className="col-12 mt-4 pt-3 h6">
                  <p className="mt-2 mb-2">追加</p>
                  <button
                    type="button"
                    className="btn btn-secondary rounded-circle p-0"
                    style={{ width: '2rem', height: '2rem' }}>
                    ＋
                  </button>
                </div>
              </div>
            </div>
          </SDiv2>
      </Collapse>
    </>
  );
}


// export class Stroke {
//   constructor() {

//     // 向きの選択を監視
//     const edge1 = document.getElementById('stroke-edge-inner-1');
//     edge1.addEventListener('change', () => {
//       Canvas.createCanvas();
//     });
//     const edge2 = document.getElementById('stroke-edge-outer-1');
//     edge2.addEventListener('change', () => {
//       Canvas.createCanvas();
//     });
//     // 線の太さの選択を監視
//     const strokeWidthRange = document.getElementById('strokeWidthRange1');
//     strokeWidthRange.addEventListener('change', (e) => {
//       const inputStrokeWeight = document.getElementById('input-stroke-weight-1');
//       inputStrokeWeight.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputStrokeWeight = document.getElementById('input-stroke-weight-1');
//     inputStrokeWeight.addEventListener('change', (e) => {
//       const strokeWidthRange = document.getElementById('strokeWidthRange1');
//       strokeWidthRange.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     // 不透明度を監視
//     const strokeOpacityRange = document.getElementById('strokeOpacityRange1');
//     strokeOpacityRange.addEventListener('change', (e) => {
//       const inputOpacityStroke = document.getElementById('input-opacity-stroke-1');
//       inputOpacityStroke.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputOpacityStroke = document.getElementById('input-opacity-stroke-1');
//     inputOpacityStroke.addEventListener('change', (e) => {
//       const strokeOpacityRange = document.getElementById('strokeOpacityRange1');
//       strokeOpacityRange.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     // 色の選択を監視
//     const strokeColor = document.getElementById('color-stroke-1');
//     strokeColor.addEventListener('change', (e) => {
//       const inputStrokeColor = document.getElementById('input-color-storke-1');
//       inputStrokeColor.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputStrokeColor = document.getElementById('input-color-storke-1');
//     inputStrokeColor.addEventListener('change', (e) => {
//       const strokeColor = document.getElementById('color-stroke-1');
//       strokeColor.value = e.target.value;
//       Canvas.createCanvas();
//     });
//   }

//   static addStrokeElement(targetId = null) {
//     // ストローク追加ボタンのDOM生成
//     const newStrokeId = Stroke.addStroke(targetId);
//     if (!newStrokeId) {
//       return;
//     }
//     if (targetId !== null) {
//       Stroke.changeToRemoveStrokeButton(targetId);
//     }

//     // 新しいストローク追加ボタンのクリックイベント付与
//     const newAddStroke = document.getElementById(newStrokeId);
//     newAddStroke.addEventListener('click', (e) => {
//       this.addStrokeElement(e.target.id);
//     });
//   }

//   static changeToRemoveStrokeButton(strokeId) {
//     // ストローク追加ボタンを削除ボタンに変更
//     const strokeArr = strokeId.split('_');
//     const newRemoveId = 'removeStroke_' + strokeArr[1];
//     const additionalStrokeDiv = document.getElementById('additionalStrokeDiv_' + strokeArr[1]);
//     additionalStrokeDiv.innerHTML = `<p class="mt-2 mb-2">削除</p>
//           <button type="button" class="btn btn-warning rounded-circle p-0 removeStroke" id="${newRemoveId}" style="width:2rem;height:2rem;">−</button>`;

//     // ストローク削除ボタンのクリックイベント付与
//     const removeStroke = document.getElementById(newRemoveId);
//     removeStroke.addEventListener('click', (e) => {
//       const targetId = e.target.id;
//       const strokeArr = targetId.split('_');
//       Stroke.removeStroke(strokeArr[1]);
//     });
//   }

//   static removeStroke(strokeNum) {
//     const strokeDiv = document.getElementById('stroke_' + strokeNum);
//     strokeDiv.remove();
//   }
// }
