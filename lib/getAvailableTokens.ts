import getDeveloperTokens from "./getDeveloperTokens";

const MIN_TOKEN = 1;
const MAX_TOKEN = 8000;

export default async function getAvailableTokens() {
	const tokens = await getDeveloperTokens();
	const available: string[] = [];

	for (let i = MIN_TOKEN; i <= MAX_TOKEN; i++) {
		if (!tokens[i]) {
			available.push(i.toString());
		}
	}

	return available;
}
