import { neon } from '@neondatabase/serverless';
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: string;
    name: string;
    age: number;
    imgUrl: string;
    preferences?: string[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>,
) {
    const sql = neon(`${process.env.DATABASE_URL}`, { arrayMode: false });
    const sqlResponse = await sql.query('SELECT * FROM Rabbit') as Data[];
    res.status(200).json(sqlResponse);
}
