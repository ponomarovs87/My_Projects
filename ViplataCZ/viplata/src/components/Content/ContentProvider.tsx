import React, { createContext, useContext, FC, ReactNode } from 'react';

// Создаем интерфейс для типизации контекста
interface MyContextProps {
  contextValue: string;
}

// Создаем контекст с указанием типа
const MyContext = createContext<MyContextProps | undefined>(undefined);

// Компонент-поставщик контекста
interface ContentProviderProps {
  children: ReactNode;
}

const ContentProvider: FC<ContentProviderProps> = ({ children }) => {
  const contextValue: MyContextProps = {
    contextValue: 'Значение контекста',
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default ContentProvider;
