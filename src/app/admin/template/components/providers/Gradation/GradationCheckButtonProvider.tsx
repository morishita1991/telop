import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  open: boolean,
  setOpen: React.Dispatch<SetStateAction<boolean>>,
};

export const GradationCheckButtonContext = createContext<ValueType>({} as ValueType);

export const GradationCheckButtonProvider = (props: { children: any; }) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  return (
    <GradationCheckButtonContext.Provider value={{open, setOpen}}>
      {children}
    </GradationCheckButtonContext.Provider>
  );
};
