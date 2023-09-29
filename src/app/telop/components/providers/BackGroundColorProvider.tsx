import { createContext, useState, SetStateAction } from "react";

type ValueType = {
  bgColorValue: string,
  setBgColorValue: React.Dispatch<SetStateAction<string>>,
};

export const BackGroundColorContext = createContext<ValueType>({} as ValueType);

export const BackGroundColorProvider = (props: { children: any; }) => {
  const { children } = props;
  const [bgColorValue, setBgColorValue] = useState('#FFFFFF');
  return (
    <BackGroundColorContext.Provider value={{bgColorValue, setBgColorValue}}>
      {children}
    </BackGroundColorContext.Provider>
  );
};
