import { useState } from "react";

import useDeveloperAvailabilityList from "hooks/useDeveloperAvailabilityList";
import useFilteredList from "hooks/useFilteredList";

import Table from "./Table";
import TextInput from "./TextInput";

export default function DevelopersList() {
	const [filter, setFilter] = useState("");

	const developerList = useDeveloperAvailabilityList();
	const filteredList = useFilteredList(developerList, filter);
	const cappedList = useCappedList(filteredList, 100);
	const totalResults =
		filteredList.length !== cappedList.length
			? `Showing first ${cappedList.length} results from a total of ${filteredList.length} matches`
			: `Showing ${filteredList.length} matches`;

	return (
		<>
			<TextInput
				id="filter"
				label="Filter"
				hint="Separate keywords with spaces, commas or semicolons"
				onChange={setFilter}
			/>
			<div className="py-4">{totalResults}</div>
			<Table
				caption="List of developers by token id and attributes"
				data={cappedList}
			/>
		</>
	);
}

function useCappedList(data: any[] = [], capacity: number) {
	return data.slice(0, capacity);
}
