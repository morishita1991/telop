import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  open: boolean,
  setOpen: React.Dispatch<SetStateAction<boolean>>,
};

export const ShadowCheckButtonContext = createContext<ValueType>({} as ValueType);

export const ShadowCheckButtonProvider = (props: { children: any; }) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  return (
    <ShadowCheckButtonContext.Provider value={{open, setOpen}}>
      {children}
    </ShadowCheckButtonContext.Provider>
  );
};
