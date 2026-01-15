import { neon } from '@neondatabase/serverless';
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: string;
    name: string;
    age: number;
    imgurl: string;
    preferences?: string[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { rabbitId } = req.query;
    const rabbitResponse = await sql.query('SELECT * FROM Rabbit WHERE id = $1', [rabbitId], { arrayMode: false });
    const preferenceResponse = await sql.query('SELECT * FROM RabbitPreference WHERE rabbitId = $1', [rabbitId], { arrayMode: false });
    const noteResponse = await sql.query('SELECT * FROM RabbitNote WHERE rabbitId = $1', [rabbitId], { arrayMode: false });

    const response = {
        id: rabbitResponse[0].id,
        breed: rabbitResponse[0].breed,
        name: rabbitResponse[0].name,
        age: rabbitResponse[0].age,
        imgurl: rabbitResponse[0].imgurl,
        preferences: preferenceResponse.map(pref => pref.food),
        notes: noteResponse,
    };
    res.status(200).json(response);
}
