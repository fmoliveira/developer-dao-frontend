type Props = {
	id: string;
	label: string;
	defaultValue?: string;
	onChange: (value: string) => void;
};

export default function TextInput({
	id,
	label,
	defaultValue,
	onChange,
}: Props) {
	return (
		<div>
			<label htmlFor={id} className="font-medium text-gray-700">
				{label}:
			</label>
			<input
				type="text"
				className="px-3 py-1 w-full border border-gray-300 rounded-md"
				id={id}
				defaultValue={defaultValue}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	);
}
