import { createContext, useState, SetStateAction } from "react";

type ValueType = {
  isChecked: boolean,
  setIsChecked: React.Dispatch<SetStateAction<boolean>>,
};

export const StrokeCheckBoxContext = createContext<ValueType>({} as ValueType);

export const StrokeCheckBoxProvider = (props: { children: any; }) => {
  const { children } = props;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <StrokeCheckBoxContext.Provider value={{isChecked, setIsChecked}}>
      {children}
    </StrokeCheckBoxContext.Provider>
  );
};
