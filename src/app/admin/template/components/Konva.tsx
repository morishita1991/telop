import React from 'react';
import { Layer, Stage, Text, Transformer } from 'react-konva';

const TextShape = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
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
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

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
            height: Math.max(node.height() * scaleX),
          });
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
    text: "Text 1",
    x: 30,
    y: 30,
    fontSize: 30,
    letterSpacing: 0,
    fill: 'blue',
    id: 'text1',
  },
  {
    text: "Text 2",
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
  const [selectedId, selectShape] = React.useState(null);

  const checkDeselect = (e: any) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <>
      <Stage
        width={1000}
        height={300}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
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
    </>
  );
}
