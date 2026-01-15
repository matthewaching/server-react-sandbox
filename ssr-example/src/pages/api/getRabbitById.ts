import { neon } from '@neondatabase/serverless';
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: string;
    name: string;
    age: number;
    imgUrl: string;
    preferences: string[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const rabbitId = req.body.rabbitId;
    const rabbitResponse = await sql.query('SELECT * FROM Rabbit WHERE id = $1', [rabbitId], { arrayMode: false });
    const preferenceResponse = await sql.query('SELECT * FROM RabbitPreference WHERE rabbitId = $1', [rabbitId], { arrayMode: false });
    rabbitResponse[0].preferences = preferenceResponse.filter(pref => pref.preference).map(pref => pref.food);
    res.status(200).json(rabbitResponse[0]);
}
