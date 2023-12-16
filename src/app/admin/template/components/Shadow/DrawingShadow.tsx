import { baseX, baseY } from "../../Areas/Const";

export function getShadowPosition(
  shadowAngleValue: number,
  shadowDistanceValue: number
) {
  const rad = shadowAngleValue * (Math.PI / 180);
  const d = shadowDistanceValue;
  const shadowX = baseX + d * Math.cos(rad);
  const shadowY = baseY + d * Math.sin(rad);
  return { shadowX, shadowY };
}

