import { useState } from "react";
import useSWR from "swr";

import Table from "./Table";
import TextInput from "./TextInput";

export default function DevelopersList() {
	const developerQuery = useSWR("/", getDevelopersList);
	const availableTokensQuery = useSWR("available", getAvailableTokens);

	const [filter, setFilter] = useState("");
	const developerList = useDeveloperList(
		developerQuery.data,
		availableTokensQuery.data,
	);
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

function getDevelopersList() {
	return fetch("/data/developers.json").then((res) => res.json());
}

async function getAvailableTokens(): Promise<Set<string>> {
	const availableTokens: string[] = await fetch("/api/tokens/available")
		.then((res) => res.json())
		.then((res) => res.available);
	return new Set(availableTokens);
}

function useDeveloperList(developerData: any, availableTokens: Set<string>) {
	if (!developerData) {
		return [];
	}

	if (!availableTokens) {
		return developerData;
	}

	return developerData.map((developer) => ({
		...developer,
		status: availableTokens.has(developer.id) ? "Available" : "Claimed",
	}));
}

function useFilteredList(data: any[] = [], filter: string) {
	const keywordList = filter.toLowerCase().split(/[ ,;]/).filter(Boolean);

	return data.filter((row) => {
		const cellList: string[] = Object.values(row);

		// a row must contain all keywords to be matched
		return keywordList.every((keyword) => {
			return cellList.some((cell) => cell.toLowerCase().includes(keyword));
		});
	});
}

function useCappedList(data: any[] = [], capacity: number) {
	return data.slice(0, capacity);
}
