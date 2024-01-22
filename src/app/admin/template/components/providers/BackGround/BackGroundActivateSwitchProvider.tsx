import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  checked: boolean,
  setChecked: React.Dispatch<SetStateAction<boolean>>,
};

export const BackGroundActivateSwitchContext = createContext<ValueType>({} as ValueType);

export const BackGroundActivateSwitchProvider = (props: { children: any; }) => {
  const { children } = props;
  const [checked, setChecked] = useState(false);
  return (
    <BackGroundActivateSwitchContext.Provider value={{checked, setChecked}}>
      {children}
    </BackGroundActivateSwitchContext.Provider>
  );
};
