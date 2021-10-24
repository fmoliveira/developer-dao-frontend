import useAvailableTokens from "./useAvailableTokens";

export default function useDeveloperAvailabilityList(developerList: any[]) {
	const availableTokens = useAvailableTokens();

	if (!developerList) {
		return [];
	}

	if (!availableTokens.data) {
		return developerList;
	}

	return developerList.map((developer) => {
		const available = availableTokens.data.has(developer.id);

		return {
			...developer,
			available,
			availableText: available ? "Available" : "Claimed", // searchable words
		};
	});
}
