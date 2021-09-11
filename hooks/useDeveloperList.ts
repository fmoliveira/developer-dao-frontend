import useFetch from "./useFetch";

export default function useDeveloperList() {
	return useFetch("/data/developers.json");
}
