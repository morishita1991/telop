import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  fontValue: string,
  setFontValue: React.Dispatch<SetStateAction<string>>,
};

export const TextFontContext = createContext<ValueType>({} as ValueType);

export const TextFontProvider = (props: { children: any; }) => {
  const { children } = props;
  const [fontValue, setFontValue] = useState('Noto Sans Japanese');
  return (
    <TextFontContext.Provider value={{fontValue, setFontValue}}>
      {children}
    </TextFontContext.Provider>
  );
};
