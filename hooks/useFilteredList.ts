type Filter = {
	search: string;
	onlyAvailable: boolean;
};

export default function useFilteredList(data: any[] = [], filter: Filter) {
	const loadedAvailability = typeof data[0]?.available === "boolean";
	const keywordList = getKeywordList(filter, loadedAvailability);

	return data.filter((row) => {
		const cellList: string[] = Object.values(row);

		// a row must contain all keywords to be matched
		return keywordList.every((keyword) => {
			return cellList.some((cell) =>
				String(cell).toLowerCase().includes(keyword),
			);
		});
	});
}

function getKeywordList(filter: Filter, loadedAvailability: boolean): string[] {
	const keywords = filter.search.toLowerCase().split(/[ ,;]/).filter(Boolean);

	if (loadedAvailability && filter.onlyAvailable) {
		keywords.push("available");
	}

	return keywords;
}
