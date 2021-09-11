import useSWR from "swr";

export default function useFetch(endpoint) {
	return useSWR(endpoint, fetcher);
}

async function fetcher(input: RequestInfo, init?: RequestInit) {
	const res = await fetch(input, init);
	return res.json();
}
