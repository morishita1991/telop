import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  value: string,
  setValue: React.Dispatch<SetStateAction<string>>,
};

export const GradationPatternRadioButtonContext = createContext<ValueType>({} as ValueType);

export const GradationPatternRadioButtonProvider = (props: { children: any; }) => {
  const { children } = props;
  const [value, setValue] = useState("three");
  return (
    <GradationPatternRadioButtonContext.Provider value={{value, setValue}}>
      {children}
    </GradationPatternRadioButtonContext.Provider>
  );
};
