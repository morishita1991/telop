import { createContext, useState, SetStateAction } from "react";

export type ValueType = {
  rangeValue: number,
  setRangeValue: React.Dispatch<SetStateAction<number>>,
};
export const ShadowAngleRangeBarContext = createContext<ValueType>({} as ValueType);

export const ShadowAngleRangeBarProvider = (props: { children: any; }) => {
  const { children } = props;
  const [rangeValue, setRangeValue] = useState(0);
  return (
    <ShadowAngleRangeBarContext.Provider value={{rangeValue, setRangeValue}}>
      {children}
    </ShadowAngleRangeBarContext.Provider>
  );
};
