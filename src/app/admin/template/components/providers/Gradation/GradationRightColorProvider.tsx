import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  colorValue: string,
  setColorValue: React.Dispatch<SetStateAction<string>>,
};

export const GradationRightColorContext = createContext<ValueType>({} as ValueType);

export const GradationRightColorProvider = (props: { children: any; }) => {
  const { children } = props;
  const [colorValue, setColorValue] = useState('#00CCFF');
  return (
    <GradationRightColorContext.Provider value={{colorValue, setColorValue}}>
      {children}
    </GradationRightColorContext.Provider>
  );
};
