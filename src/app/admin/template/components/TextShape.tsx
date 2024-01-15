import React from 'react';
import { Text, Transformer } from 'react-konva';

type TextShapeData = {
  shapeProps: any,
  isSelected: any,
  onSelect: any,
  onChange: any,
}

export const TextShape = ({ shapeProps, isSelected, onSelect, onChange }: TextShapeData) => {
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
