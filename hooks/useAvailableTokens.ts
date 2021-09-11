import useFetch from "./useFetch";

export default function useAvailableTokens() {
	const { data, ...args } = useFetch("/api/tokens/available");

	if (Array.isArray(data?.available)) {
		return {
			data: new Set(data.available),
			...args,
		};
	}

	return { data, ...args };
}
