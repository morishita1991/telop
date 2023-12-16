import React, { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const TextWeightRangeBarContext = createContext<ValueType>({} as ValueType);

export const TextWeightRangeBarProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(500);
  return (
    <TextWeightRangeBarContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </TextWeightRangeBarContext.Provider>
  );
};
