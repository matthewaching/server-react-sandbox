import { neon } from '@neondatabase/serverless';
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    catUrl?: string;
    subtitle?: string;
    errorMessage?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const sql = neon(`${process.env.DATABASE_URL}`, { arrayMode: false });
    const rabbitId = req.body.rabbitId;
    const sqlResponse = await sql.query('SELECT * FROM Rabbit WHERE id = $1', [rabbitId]);
    res.status(200).json(sqlResponse);
}
