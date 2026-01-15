import { neon } from '@neondatabase/serverless';
import type { NextApiRequest, NextApiResponse } from "next";

type AllRabbitData = {
    id: string;
    name: string;
    imgurl: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<AllRabbitData[]>,
) {
    const sql = neon(`${process.env.DATABASE_URL}`, { arrayMode: false });
    const sqlResponse = await sql.query('SELECT id, name, imgurl FROM Rabbit') as AllRabbitData[];
    res.status(200).json(sqlResponse);
}
