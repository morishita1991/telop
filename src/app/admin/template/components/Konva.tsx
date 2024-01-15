import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import React, { useRef } from 'react';
import { Layer, Stage } from 'react-konva';
import { Stage as StageType } from 'konva/lib/Stage';
import { canvasH, canvasW } from '../Areas/Const';
import { TextShape } from './TextShape';
import { KonvaProps } from './KonvaType';

export default function Konva(props: KonvaProps) {
  const [texts, setTexts] = React.useState([props]);
  const [selectedId, selectShape] = React.useState<string>('');

  const checkDeselect = (e: any) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape('');
    }
  };

  const stageRef = useRef<StageType>(null);
  const onClickEvent = () => {
    const temp = stageRef.current;
    if (temp !== null) {
      // dataUrlに、画像データがdata URL(MIME Type + base64文字列)形式で書き込まれる。
      // toDataURLの引数を変更すれば、PNG以外の画像形式への変換も可能
      let link = document.createElement("a");
      link.href = temp.toDataURL();
      link.download = "telop.png";
      link.click();
    }
  }

  return (
    <>
      <Stage
        width={canvasW}
        height={canvasH}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        style={{ border: '5px solid black' }}
        ref={stageRef}
      >
        <Layer>
          {texts.map((text, i) => {
            return (
              <TextShape
                key={i}
                shapeProps={text}
                isSelected={text.id === selectedId}
                onSelect={() => {
                  selectShape(text.id);
                }}
                onChange={(newAttrs: any) => {
                  const txts = texts.slice();
                  txts[i] = newAttrs;
                  setTexts(txts);
                }}
              />
            );
          })}
        </Layer>
      </Stage>
      <div className="d-flex flex-row-reverse mt-4">
        <Button
          component="label"
          variant="contained"
          size="large"
          color="primary"
          startIcon={<CloudDownloadIcon />}
          onClick={onClickEvent}>
          画像ダウンロード
        </Button>
      </div>
    </>
  );
}
