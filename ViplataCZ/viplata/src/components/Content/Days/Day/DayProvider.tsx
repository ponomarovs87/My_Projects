import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { getDefaultTimeValues, isDayOff } from "helper/DataAndTimeHelpers";
import { DayObj, interfaceDayObj } from "helper/abstractionObjects/dayObj";
import { interfaceMathInputsObj } from "helper/abstractionObjects/mathInputsObj";
import { loadFromBase, loadFromBaseMathInputs } from "helper/LocaleStorage/loadFromBase";
import { useContentContext } from "components/Content/ContentProvider";

interface DayProviderProps {
	children: ReactNode;
	date: Date;
}
interface defaultTimeValues {
	defaultStartOfWork?: string;
	defaultEndOfWork?: string;
	defaultLunchtime?: string;
}
interface DayContextProps {
	date: Date;
	dayOffValue: boolean;
	showForm: boolean;
	setShowForm: (data: boolean) => void;
	newDay: DayObj | null;
	setNewDay: (data: DayObj) => void;
	mathInput: interfaceMathInputsObj | null;
	setMathInput: (data: interfaceMathInputsObj | null) => void;
	defaultTimeValues: defaultTimeValues;
	setDefaultTimeValues: (data: defaultTimeValues) => void;
	loadedDay: interfaceDayObj | null;
	mathInputs: interfaceMathInputsObj | null;
}

const DayContext = createContext<DayContextProps | undefined>(undefined);

export const useDayContext = (): DayContextProps => {
	const context = useContext(DayContext);
	if (!context) {
		throw new Error("useDayContext must be used within a DayProvider");
	}
	return context;
};

export const DayProvider: React.FC<DayProviderProps> = ({ children, date }) => {
	const { MathInfo } = useContentContext();
	const [showForm, setShowForm] = useState(false);
	const [newDay, setNewDay] = useState<DayObj | null>(null);
	const [mathInput, setMathInput] = useState<interfaceMathInputsObj | null>(null);
	const [defaultTimeValues, setDefaultTimeValues] = useState<defaultTimeValues>(getDefaultTimeValues(date, MathInfo));

	const loadedDay = loadFromBase(date);
	const mathInputs = loadFromBaseMathInputs(date);
	const dayOffValue = isDayOff(date);

	useEffect(() => {
		if (loadedDay) {
			setShowForm(true);
		}
	}, [loadedDay]);

	const contextValue: DayContextProps = { date, dayOffValue, showForm, setShowForm, newDay, setNewDay, mathInput, setMathInput, defaultTimeValues, setDefaultTimeValues, loadedDay, mathInputs };

	return <DayContext.Provider value={contextValue}>{children}</DayContext.Provider>;
};
