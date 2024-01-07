import { interfaceMathInputsObj } from "helper/abstractionObjects/mathInputsObj";
import React, { createContext, useState, useCallback, useContext, ReactNode } from "react";

interface ContentContextType {
	selectedMonth: Date;
	handleMonthChange: (date: Date) => void;
	MathInfo: interfaceMathInputsObj | null;
	setMathInfo: React.Dispatch<React.SetStateAction<interfaceMathInputsObj | null>>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

interface ContentProviderProps {
	children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
	const [selectedMonth, setSelectedMonth] = useState(new Date());
	const [MathInfo, setMathInfo] = useState<interfaceMathInputsObj | null>(null);

	const handleMonthChange = useCallback((date: Date) => {
		setSelectedMonth(date);
	}, []);

	const contextValue: ContentContextType = {
		selectedMonth,
		handleMonthChange,
		MathInfo,
		setMathInfo
	};

	return <ContentContext.Provider value={contextValue}>{children}</ContentContext.Provider>;
};

export const useContentContext = (): ContentContextType => {
	const context = useContext(ContentContext);
	if (!context) {
		throw new Error("useContentContext must be used within a ContentProvider");
	}
	return context;
};
