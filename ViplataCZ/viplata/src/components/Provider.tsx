import React, { createContext, useContext, FC, ReactNode, useState } from "react";

// Создаем интерфейс для типизации контекста
interface MyContextValue {
  contextValue?: string ;
	countValue : countValue
}
interface countValue {
  count: number;
	increment: () => void;
}

// Создаем контекст с указанием типа
export const MyContext = createContext< MyContextValue | undefined>(undefined);

// Компонент-поставщик контекста
interface ContentProviderProps {
	children: ReactNode;
}

const Provider: FC<ContentProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const contextValue: MyContextValue = {
    countValue: {
      count,
      increment: () => {
        setCount(count + 1);
      },
    },
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export default Provider;
