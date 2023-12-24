import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  checked: boolean,
  setChecked: React.Dispatch<SetStateAction<boolean>>,
};

export const StrokeActivateSwitchContext = createContext<ValueType>({} as ValueType);

export const StrokeActivateSwitchProvider = (props: { children: any; }) => {
  const { children } = props;
  const [checked, setChecked] = useState(false);
  return (
    <StrokeActivateSwitchContext.Provider value={{checked, setChecked}}>
      {children}
    </StrokeActivateSwitchContext.Provider>
  );
};
