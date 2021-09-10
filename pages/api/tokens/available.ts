import { NextApiResponse } from "next";

import getDeveloperTokens from "lib/getDeveloperTokens";

const MIN_TOKEN = 1;
const MAX_TOKEN = 8000;

export default async function handler(req, res: NextApiResponse) {
	const tokens = await getDeveloperTokens();
	const available: string[] = [];

	for (let i = MIN_TOKEN; i <= MAX_TOKEN; i++) {
		if (!tokens[i]) {
			available.push(i.toString());
		}
	}

	res.status(200).json({ available });
}
