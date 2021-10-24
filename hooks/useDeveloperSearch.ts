import { useState } from "react";

import useDeveloperAvailabilityList from "./useDeveloperAvailabilityList";
import useDeveloperList from "./useDeveloperList";
import useDeveloperMap from "./useDeveloperMap";
import useFilteredList from "./useFilteredList";

export const DEVELOPER_COLUMNS = [
	"id",
	"os",
	"textEditor",
	"clothing",
	"language",
	"industry",
	"location",
	"mind",
	"vibe",
	"available",
];

export default function useDeveloperSearch() {
	const [filter, setFilter] = useState({ search: "", onlyAvailable: false });

	const developerQuery = useDeveloperList();
	const developerList = developerQuery.data ?? [];

	const developerMap = useDeveloperMap(developerList);
	const developerAvailabilityList = useDeveloperAvailabilityList(developerList);
	const filteredList = useFilteredList(developerAvailabilityList, filter);
	const cappedList = useCappedList(filteredList, 100);

	return {
		filter,
		setFilter,
		developerMap,
		resultList: cappedList,
		resultCount: filteredList.length,
		visibleCount: cappedList.length,
	};
}

function useCappedList(data: any[] = [], capacity: number) {
	return data.slice(0, capacity);
}
