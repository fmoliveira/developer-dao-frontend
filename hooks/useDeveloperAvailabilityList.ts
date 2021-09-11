import useAvailableTokens from "./useAvailableTokens";
import useDeveloperList from "./useDeveloperList";

export default function useDeveloperAvailabilityList() {
	const developerList = useDeveloperList();
	const availableTokens = useAvailableTokens();

	if (!developerList.data) {
		return [];
	}

	if (!availableTokens.data) {
		return developerList.data;
	}

	return developerList.data.map((developer) => ({
		...developer,
		available: availableTokens.data.has(developer.id),
	}));
}
