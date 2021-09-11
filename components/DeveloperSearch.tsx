import TextInput from "./TextInput";

type Props = {
	onChange: (filter: string) => void;
	resultCount: number;
	visibleCount: number;
};

export default function DeveloperSearch({
	onChange,
	resultCount,
	visibleCount,
}: Props) {
	const resultsMessage =
		resultCount !== visibleCount
			? `Showing first ${visibleCount} results from a total of ${resultCount} matches`
			: `Showing ${resultCount} matches`;

	return (
		<>
			<TextInput
				id="filter"
				label="Filter"
				hint="Separate keywords with spaces, commas or semicolons"
				onChange={onChange}
			/>
			<div className="py-4">{resultsMessage}</div>
		</>
	);
}
