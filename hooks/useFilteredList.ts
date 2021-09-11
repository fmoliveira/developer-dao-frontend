export default function useFilteredList(data: any[] = [], filter: string) {
	const keywordList = filter.toLowerCase().split(/[ ,;]/).filter(Boolean);

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
