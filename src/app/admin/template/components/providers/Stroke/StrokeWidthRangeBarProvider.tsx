import { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const StrokeWidthRangeBarContext = createContext<ValueType>({} as ValueType);

export const StrokeWidthRangeBarProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(0);
  return (
    <StrokeWidthRangeBarContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </StrokeWidthRangeBarContext.Provider>
  );
};
