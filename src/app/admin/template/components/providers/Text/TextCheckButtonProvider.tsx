import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  open: boolean,
  setOpen: React.Dispatch<SetStateAction<boolean>>,
};

export const TextCheckButtonContext = createContext<ValueType>({} as ValueType);

export const TextCheckButtonProvider = (props: { children: any; }) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  return (
    <TextCheckButtonContext.Provider value={{open, setOpen}}>
      {children}
    </TextCheckButtonContext.Provider>
  );
};
