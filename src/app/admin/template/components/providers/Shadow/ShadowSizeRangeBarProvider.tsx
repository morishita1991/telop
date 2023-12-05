import { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const ShadowSizeRangeBarContext = createContext<ValueType>({} as ValueType);

export const ShadowSizeRangeBarProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(0);
  return (
    <ShadowSizeRangeBarContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </ShadowSizeRangeBarContext.Provider>
  );
};
