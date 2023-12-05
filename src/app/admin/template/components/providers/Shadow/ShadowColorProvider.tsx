import { createContext, useState, SetStateAction } from "react";

type ValueType = {
  colorValue: string,
  setColorValue: React.Dispatch<SetStateAction<string>>,
};

export const ShadowColorContext = createContext<ValueType>({} as ValueType);

export const ShadowColorProvider = (props: { children: any; }) => {
  const { children } = props;
  const [colorValue, setColorValue] = useState('#00CCFF');
  return (
    <ShadowColorContext.Provider value={{colorValue, setColorValue}}>
      {children}
    </ShadowColorContext.Provider>
  );
};
