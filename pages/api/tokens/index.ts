import { NextApiResponse } from "next";

import getTokenHolders from "lib/getTokenHolders";

export default async function handler(req, res: NextApiResponse) {
	const tokens = await getTokenHolders();
	res.status(200).json({ tokens });
}
