import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { getDefaultTimeValues, isDayOff } from "helper/dataAndTimeHelpers";
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
	loadedDay: interfaceDayObj;
	mathInputs: interfaceMathInputsObj | null;
	handleButtonClick: () => void;
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
	const [ferstMounting, setFerstMounting] = useState(true);
	const [showForm, setShowForm] = useState(false);
	const [newDay, setNewDay] = useState<DayObj | null>(null);
	const [mathInput, setMathInput] = useState<interfaceMathInputsObj | null>(null);
	const [defaultTimeValues, setDefaultTimeValues] = useState<defaultTimeValues>(getDefaultTimeValues(date, MathInfo));
	const [loadedDay, setLoadedDay] = useState(loadFromBase(date));
	const [mathInputs, setMathInputs] = useState(loadFromBaseMathInputs(date));
	const [dayOffValue, setDayOffValue] = useState(isDayOff(date));

	const handleButtonClick = () => {
		setShowForm(!showForm);
		console.log(showForm);
	};

	useEffect(() => {
		if (ferstMounting) {
			if (loadedDay) {
				setShowForm(true);
			}
			setFerstMounting(false);
		}
	}, [loadedDay]);

	const contextValue: DayContextProps = { date, dayOffValue, showForm, setShowForm, newDay, setNewDay, mathInput, setMathInput, defaultTimeValues, setDefaultTimeValues, loadedDay, mathInputs, handleButtonClick };

	return <DayContext.Provider value={contextValue}>{children}</DayContext.Provider>;
};
