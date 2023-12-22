import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  colorValue: string,
  setColorValue: React.Dispatch<SetStateAction<string>>,
};

export const GradationLeftColorContext = createContext<ValueType>({} as ValueType);

export const GradationLeftColorProvider = (props: { children: any; }) => {
  const { children } = props;
  const [colorValue, setColorValue] = useState('#00CCFF');
  return (
    <GradationLeftColorContext.Provider value={{colorValue, setColorValue}}>
      {children}
    </GradationLeftColorContext.Provider>
  );
};
