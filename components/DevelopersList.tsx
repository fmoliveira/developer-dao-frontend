import { useQuery } from "react-query";
import Table from "./Table";

export default function DevelopersList() {
	const query = useQuery("devs", getDevelopersList);

	return (
		<Table
			caption="List of developers by token id and attributes"
			data={query.data}
		/>
	);
}

function getDevelopersList() {
	return fetch("/data/developers.json").then((res) => res.json());
}
