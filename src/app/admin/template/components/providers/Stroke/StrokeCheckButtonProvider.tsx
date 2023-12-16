import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  open: boolean,
  setOpen: React.Dispatch<SetStateAction<boolean>>,
};

export const StrokeCheckButtonContext = createContext<ValueType>({} as ValueType);

export const StrokeCheckButtonProvider = (props: { children: any; }) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  return (
    <StrokeCheckButtonContext.Provider value={{open, setOpen}}>
      {children}
    </StrokeCheckButtonContext.Provider>
  );
};
