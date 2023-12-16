import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  colorValue: string,
  setColorValue: React.Dispatch<SetStateAction<string>>,
};

export const StrokeColorContext = createContext<ValueType>({} as ValueType);

export const StrokeColorProvider = (props: { children: any; }) => {
  const { children } = props;
  const [colorValue, setColorValue] = useState('#00CCFF');
  return (
    <StrokeColorContext.Provider value={{colorValue, setColorValue}}>
      {children}
    </StrokeColorContext.Provider>
  );
};
