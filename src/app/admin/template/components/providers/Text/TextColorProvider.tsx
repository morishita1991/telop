import React, { createContext, useState, SetStateAction } from "react";

type ValueType = {
  colorValue: string,
  setColorValue: React.Dispatch<SetStateAction<string>>,
};

export const TextColorContext = createContext<ValueType>({} as ValueType);

export const TextColorProvider = (props: { children: any; }) => {
  const { children } = props;
  const [colorValue, setColorValue] = useState('#ff00bb');
  return (
    <TextColorContext.Provider value={{colorValue, setColorValue}}>
      {children}
    </TextColorContext.Provider>
  );
};
