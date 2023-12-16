import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  textValue: string,
  setTextValue: React.Dispatch<SetStateAction<string>>,
};

export const TextInputContext = createContext<ValueType>({} as ValueType);

export const TextInputProvider = (props: { children: any; }) => {
  const { children } = props;
  const [textValue, setTextValue] = useState('サンプルABC');
  return (
    <TextInputContext.Provider value={{textValue, setTextValue}}>
      {children}
    </TextInputContext.Provider>
  );
};
