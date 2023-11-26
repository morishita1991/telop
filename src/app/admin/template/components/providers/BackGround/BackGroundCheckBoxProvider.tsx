import { createContext, useState, SetStateAction } from "react";

type ValueType = {
  isChecked: boolean,
  setIsChecked: React.Dispatch<SetStateAction<boolean>>,
};

export const BackGroundCheckBoxContext = createContext<ValueType>({} as ValueType);

export const BackGroundCheckBoxProvider = (props: { children: any; }) => {
  const { children } = props;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <BackGroundCheckBoxContext.Provider value={{isChecked, setIsChecked}}>
      {children}
    </BackGroundCheckBoxContext.Provider>
  );
};
