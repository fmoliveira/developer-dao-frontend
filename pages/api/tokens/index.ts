import { NextApiResponse } from "next";

import getDeveloperTokens from "../../../lib/getDeveloperTokens";

export default async function handler(req, res: NextApiResponse) {
	const tokens = await getDeveloperTokens();
	res.status(200).json({ tokens });
}
