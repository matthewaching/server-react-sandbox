// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { catImageMap } from "./catpicture";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Record<string, string>>
) {
    res.status(200).json(catImageMap);
}
