import React, { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const TextSizeRangeBarContext = createContext<ValueType>({} as ValueType);

export const TextSizeRangeBarProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(105);
  return (
    <TextSizeRangeBarContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </TextSizeRangeBarContext.Provider>
  );
};
