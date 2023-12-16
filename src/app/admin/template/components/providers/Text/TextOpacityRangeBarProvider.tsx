import React, { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const TextOpacityRangeBarContext = createContext<ValueType>({} as ValueType);

export const TextOpacityRangeBarProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(1);
  return (
    <TextOpacityRangeBarContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </TextOpacityRangeBarContext.Provider>
  );
};
