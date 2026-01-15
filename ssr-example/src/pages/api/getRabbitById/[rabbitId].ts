import { neon } from '@neondatabase/serverless';
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: number;
    name: string;
    age: number;
    imgurl: string;
    preferences?: { food: string, preference: boolean }[];
    notes: Note[];
};

export type Note = {
    id: number;
    rabbitId: number;
    note: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { rabbitId } = req.query;
    const rabbitResponse = await sql.query('SELECT * FROM Rabbit WHERE id = $1', [rabbitId], { arrayMode: false });
    const preferenceResponse = await sql.query('SELECT * FROM RabbitPreference WHERE rabbitId = $1', [rabbitId], { arrayMode: false }) as { food: string, preference: boolean }[];
    const noteResponse = await sql.query('SELECT * FROM RabbitNote WHERE rabbitId = $1', [rabbitId], { arrayMode: false }) as Note[];

    const response = {
        id: rabbitResponse[0].id,
        breed: rabbitResponse[0].breed,
        name: rabbitResponse[0].name,
        age: rabbitResponse[0].age,
        imgurl: rabbitResponse[0].imgurl,
        preferences: preferenceResponse,
        notes: noteResponse,
    };

    res.status(200).json(response);
}
