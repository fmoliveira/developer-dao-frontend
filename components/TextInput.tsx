type Props = {
	id: string;
	label: string;
	hint?: string;
	defaultValue?: string;
	onChange: (value: string) => void;
};

export default function TextInput({
	id,
	label,
	hint,
	defaultValue,
	onChange,
}: Props) {
	return (
		<div>
			<label htmlFor={id} className="font-medium text-gray-100">
				{label}:
			</label>
			<input
				type="text"
				className="px-3 py-2 w-full border bg-gray-700 border-gray-500 rounded-md"
				id={id}
				defaultValue={defaultValue}
				onChange={(event) => onChange(event.target.value)}
			/>
			{hint && <div className="text-sm text-gray-300">{hint}</div>}
		</div>
	);
}
