import { neon } from '@neondatabase/serverless';
import type { NextApiRequest, NextApiResponse } from "next";
import type { Note } from './getRabbitById/[rabbitId]';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    const sql = neon(`${process.env.DATABASE_URL}`, { arrayMode: false });

    if (req.method === 'POST') {
        const notes = JSON.parse(req.body).notes;
        await Promise.all(notes.map((note: Note) => sql.query('UPDATE RabbitNote SET note = $1 WHERE id = $2', [note.note, note.id])));
    }
    res.status(200).send({});
}
