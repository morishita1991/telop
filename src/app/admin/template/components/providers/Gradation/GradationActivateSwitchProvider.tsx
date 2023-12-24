import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  checked: boolean,
  setChecked: React.Dispatch<SetStateAction<boolean>>,
};

export const GradationActivateSwitchContext = createContext<ValueType>({} as ValueType);

export const GradationActivateSwitchProvider = (props: { children: any; }) => {
  const { children } = props;
  const [checked, setChecked] = useState(false);
  return (
    <GradationActivateSwitchContext.Provider value={{checked, setChecked}}>
      {children}
    </GradationActivateSwitchContext.Provider>
  );
};
