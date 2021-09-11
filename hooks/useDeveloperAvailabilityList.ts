import useAvailableTokens from "./useAvailableTokens";

export default function useDeveloperAvailabilityList(developerList: any[]) {
	const availableTokens = useAvailableTokens();

	if (!developerList) {
		return [];
	}

	if (!availableTokens.data) {
		return developerList;
	}

	return developerList.map((developer) => ({
		...developer,
		available: availableTokens.data.has(developer.id),
	}));
}
