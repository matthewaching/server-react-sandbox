import { neon } from '@neondatabase/serverless';
import type { NextApiRequest, NextApiResponse } from "next";
import type { Note } from './getRabbitById/[rabbitId]';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Note[]>,
) {
    const sql = neon(`${process.env.DATABASE_URL}`, { arrayMode: false });
    if (req.method === 'POST') {
        // await Promise.all(req.body.notes.map((note: Note) => sql.query('UPDATE RabbitNote SET note = $1 WHERE id = $2', [note.note, note.id])));
        await sql.query("UPDATE RabbitNote SET note = 'Loves belly rubs' WHERE id = 1");
    }
    res.status(200);
}
