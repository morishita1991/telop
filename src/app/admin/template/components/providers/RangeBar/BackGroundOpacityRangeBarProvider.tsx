import { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const BackGroundOpacityRangeBarContext = createContext<ValueType>({} as ValueType);

export const BackGroundOpacityRangeBarProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(1);
  return (
    <BackGroundOpacityRangeBarContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </BackGroundOpacityRangeBarContext.Provider>
  );
};
