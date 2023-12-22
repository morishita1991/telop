import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  colorValue: string,
  setColorValue: React.Dispatch<SetStateAction<string>>,
};

export const GradationCenterColorContext = createContext<ValueType>({} as ValueType);

export const GradationCenterColorProvider = (props: { children: any; }) => {
  const { children } = props;
  const [colorValue, setColorValue] = useState('#00CCFF');
  return (
    <GradationCenterColorContext.Provider value={{colorValue, setColorValue}}>
      {children}
    </GradationCenterColorContext.Provider>
  );
};
