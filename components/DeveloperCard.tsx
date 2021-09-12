const attributeClassName = "font-serif text-base";

interface Props {
	os: string;
	textEditor: string;
	clothing: string;
	language: string;
	industry: string;
	location: string;
	mind: string;
	vibe: string;
}

export default function DeveloperCard({
	os,
	textEditor,
	clothing,
	language,
	industry,
	location,
	mind,
	vibe,
}: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMinYMin meet"
			viewBox="0 0 350 350"
			width={500}
		>
			<rect width="100%" height="100%" fill="white" />
			<text x="10" y="20" className={attributeClassName}>
				{os}
			</text>
			<text x="10" y="40" className={attributeClassName}>
				{textEditor}
			</text>
			<text x="10" y="60" className={attributeClassName}>
				{clothing}
			</text>
			<text x="10" y="80" className={attributeClassName}>
				{language}
			</text>
			<text x="10" y="100" className={attributeClassName}>
				{industry}
			</text>
			<text x="10" y="120" className={attributeClassName}>
				{location}
			</text>
			<text x="10" y="140" className={attributeClassName}>
				{mind}
			</text>
			<text x="10" y="160" className={attributeClassName}>
				{vibe}
			</text>
		</svg>
	);
}
