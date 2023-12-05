import React, { useContext } from 'react';
import styled from "styled-components";
import Collapse from '../../../../../node_modules/@mui/material/Collapse/Collapse';
import Button from '../../../../../node_modules/@mui/material/Button/Button';
import { ShadowCheckButtonContext } from '../components/providers/Shadow/ShadowCheckButtonProvider';
import ShadowDistanceRangeBar from '../components/Shadow/ShadowDistanceRangeBar';
import ShadowAngleRangeBar from '../components/Shadow/ShadowAngleRangeBar';
import ShadowSizeRangeBar from '../components/Shadow/ShadowSizeRangeBar';
import ShadowColorPicker from '../components/Shadow/ShadowColorPicker';
import ShadowOpacityRangeBar from '../components/Shadow/ShadowOpacityRangeBar';

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

export default function ShadowArea() {
  const { open, setOpen } = useContext(ShadowCheckButtonContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="d-flex flex-row h4">
        <Button variant="outlined" color="primary" size="small" onClick={handleClick}>
          影
        </Button>
      </div>
      <Collapse in={open}>
          <SDiv2 className="border ms-3 mb-5">
            <div className="row p-3 h6">
              <SDiv5 className="col-sm-3 ms-3">
                <ShadowDistanceRangeBar text={'距離'} min={0} max={50} step={1}></ShadowDistanceRangeBar>
              </SDiv5>
              <SDiv5 className="col-sm-3">
                <ShadowAngleRangeBar text={'角度'} min={0} max={360} step={1}></ShadowAngleRangeBar>
              </SDiv5>
              <SDiv5 className="col-sm-3">
                <ShadowSizeRangeBar text={'サイズ'} min={30} max={180} step={1}></ShadowSizeRangeBar>
              </SDiv5>
              <SDiv5 className="col-sm-2 ms-2 mt-5">
                <ShadowColorPicker></ShadowColorPicker>
              </SDiv5>
              <SDiv5 className="col-sm-2 ms-2">
                <ShadowOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></ShadowOpacityRangeBar>
              </SDiv5>
            </div>
          </SDiv2>
      </Collapse>
    </>
  );
}


// export class Shadow {
//   constructor() {
//     // 影チェックボックス
//     const useShadowCheckBox = document.getElementById('shadowCheckBox');
//     useShadowCheckBox.addEventListener('change', () => {
//       Canvas.createCanvas();
//     });

//     // 角度の選択を監視
//     const shadowDir = document.getElementById('shadowDegRange');
//     shadowDir.addEventListener('change', (e) => {
//       const inputShadowDeg = document.getElementById('input-shadow-deg');
//       inputShadowDeg.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputShadowDeg = document.getElementById('input-shadow-deg');
//     inputShadowDeg.addEventListener('change', (e) => {
//       const shadowDir = document.getElementById('shadowDegRange');
//       shadowDir.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     // 距離の選択を監視
//     const shadowGap = document.getElementById('shadowDisRange');
//     shadowGap.addEventListener('change', (e) => {
//       const inputShadowDis = document.getElementById('input-shadow-dis');
//       inputShadowDis.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputShadowDis = document.getElementById('input-shadow-dis');
//     inputShadowDis.addEventListener('change', (e) => {
//       const shadowGap = document.getElementById('shadowDisRange');
//       shadowGap.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     // 影のサイズの選択を監視
//     const shadowSize = document.getElementById('shadowSizeRange');
//     shadowSize.addEventListener('change', (e) => {
//       const inputShadowSize = document.getElementById('input-shadow-size');
//       inputShadowSize.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputShadowSize = document.getElementById('input-shadow-size');
//     inputShadowSize.addEventListener('change', (e) => {
//       const shadowSize = document.getElementById('shadowSizeRange');
//       shadowSize.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     // 影の不透明度の選択を監視
//     const shadowOpacity = document.getElementById('shadowOpacityRange');
//     shadowOpacity.addEventListener('change', (e) => {
//       const inputShadowOpacity = document.getElementById('input-shadow-opacity');
//       inputShadowOpacity.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputShadowOpacity = document.getElementById('input-shadow-opacity');
//     inputShadowOpacity.addEventListener('change', (e) => {
//       const shadowOpacity = document.getElementById('shadowOpacityRange');
//       shadowOpacity.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     // 色の選択を監視
//     const shadowColor = document.getElementById('color-shadow');
//     shadowColor.addEventListener('change', (e) => {
//       const inputColorShadow = document.getElementById('input-color-shadow');
//       inputColorShadow.value = e.target.value
//       Canvas.createCanvas();
//     });
//     const inputColorShadow = document.getElementById('input-color-shadow');
//     inputColorShadow.addEventListener('change', (e) => {
//       const shadowColor = document.getElementById('color-shadow');
//       shadowColor.value = e.target.value;
//       Canvas.createCanvas();
//     });
//   }

//   static shadowPosition()
//   {
//     const deg = document.getElementById('shadowDegRange').value;
//     const rad = deg * (Math.PI / 180);
//     const d = document.getElementById('shadowDisRange').value;
//     const shadowX = baseX + d * Math.cos(rad);
//     const shadowY = baseY + (d * Math.sin(rad) * (-1));
//     return { shadowX, shadowY };
//   }
// }
