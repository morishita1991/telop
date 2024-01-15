import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import React, { useRef } from 'react';
import { Layer, Stage, Text, Transformer } from 'react-konva';
import { Stage as StageType } from 'konva/lib/Stage';
import { canvasH, canvasW } from '../Areas/Const';

type TextShapeData = {
  shapeProps: any,
  isSelected: any,
  onSelect: any,
  onChange: any,
}

const TextShape = ({ shapeProps, isSelected, onSelect, onChange }: TextShapeData) => {
  const shapeRef = React.useRef<Text>(null);
  const trRef: any = React.useRef();

  React.useEffect(() => {
    const current: any = trRef.current;
    if (isSelected) {
      // we need to attach transformer manually
      current.nodes([shapeRef.current]);
      current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Text
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          const node: any = shapeRef.current;
          const scaleX = node.scaleX();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            fontSize: shapeProps.fontSize * scaleX,
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleX), // depend on scaleX
          });
        }}
        onMouseEnter={e => {
          const stage = e.target.getStage();
          if (stage)
          {
            const container = stage.container();
            container.style.cursor = "pointer";
          }
        }}
        onMouseLeave={e => {
          const stage = e.target.getStage();
          if (stage)
          {
            const container = stage.container();
            container.style.cursor = "default";
          }
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          borderStrokeWidth={2}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

const initialTexts = [
  {
    text: "ドラッグ&ドロップ 1",
    x: 30,
    y: 30,
    fontSize: 30,
    letterSpacing: 0,
    fill: 'blue',
    id: 'text1',
  },
  {
    text: "ドラッグ&ドロップ 2",
    x: 130,
    y: 130,
    fontSize: 30,
    letterSpacing: 1,
    fill: 'green',
    id: 'text2',
  },
];

export default function Konva() {
  const [texts, setTexts] = React.useState(initialTexts);
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
