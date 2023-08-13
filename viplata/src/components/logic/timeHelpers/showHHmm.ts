import { format } from "date-fns";

export default function showHHmm(date: number): string {
	const answer = format(new Date(date), "HH:mm");
	return answer;
}
