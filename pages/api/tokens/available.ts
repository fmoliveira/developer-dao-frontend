import { NextApiResponse } from "next";

import getAvailableTokens from "lib/getAvailableTokens";

export default async function handler(req, res: NextApiResponse) {
	const available = await getAvailableTokens();
	res.status(200).json({ available });
}
