import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  value: string,
  setValue: React.Dispatch<SetStateAction<string>>,
};

export const StrokeEdgeRadioButtonContext = createContext<ValueType>({} as ValueType);

export const StrokeEdgeRadioButtonProvider = (props: { children: any; }) => {
  const { children } = props;
  const [value, setValue] = useState("outer");
  return (
    <StrokeEdgeRadioButtonContext.Provider value={{value, setValue}}>
      {children}
    </StrokeEdgeRadioButtonContext.Provider>
  );
};
