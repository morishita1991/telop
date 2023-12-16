import React, { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const ShadowOpacityRangeBarContext = createContext<ValueType>({} as ValueType);

export const ShadowOpacityRangeBarProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(1);
  return (
    <ShadowOpacityRangeBarContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </ShadowOpacityRangeBarContext.Provider>
  );
};
