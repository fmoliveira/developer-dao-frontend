import { useState } from "react";

import useDeveloperAvailabilityList from "./useDeveloperAvailabilityList";
import useFilteredList from "./useFilteredList";

export default function useDeveloperSearch() {
	const [filter, setFilter] = useState("");

	const developerList = useDeveloperAvailabilityList();
	const filteredList = useFilteredList(developerList, filter);
	const cappedList = useCappedList(filteredList, 100);

	return {
		filter,
		setFilter,
		resultList: cappedList,
		resultCount: filteredList.length,
		visibleCount: cappedList.length,
	};
}

function useCappedList(data: any[] = [], capacity: number) {
	return data.slice(0, capacity);
}
