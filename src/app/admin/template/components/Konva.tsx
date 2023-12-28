import React from 'react';
import { Layer, Stage, Group, Text } from 'react-konva';

export default function Konva() {
  return (
    <>
      <Stage width={1000} height={300}>
        <Layer>
          <Group>
            <Text text="Click on any place to see an animation" />
          </Group>
        </Layer>
      </Stage>
    </>
  );
}
