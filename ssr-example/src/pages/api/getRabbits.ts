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
    const sqlResponse = await sql.query('SELECT * FROM Rabbit');
    // Insert the comment from the form into the Postgres database
    res.status(200).json(sqlResponse);
}
