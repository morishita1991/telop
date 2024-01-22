import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  open: boolean,
  setOpen: React.Dispatch<SetStateAction<boolean>>,
};

export const BackGroundCheckButtonContext = createContext<ValueType>({} as ValueType);

export const BackGroundCheckButtonProvider = (props: { children: any; }) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  return (
    <BackGroundCheckButtonContext.Provider value={{open, setOpen}}>
      {children}
    </BackGroundCheckButtonContext.Provider>
  );
};
