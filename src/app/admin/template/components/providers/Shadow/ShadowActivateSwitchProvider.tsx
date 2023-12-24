import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  checked: boolean,
  setChecked: React.Dispatch<SetStateAction<boolean>>,
};

export const ShadowActivateSwitchContext = createContext<ValueType>({} as ValueType);

export const ShadowActivateSwitchProvider = (props: { children: any; }) => {
  const { children } = props;
  const [checked, setChecked] = useState(false);
  return (
    <ShadowActivateSwitchContext.Provider value={{checked, setChecked}}>
      {children}
    </ShadowActivateSwitchContext.Provider>
  );
};
