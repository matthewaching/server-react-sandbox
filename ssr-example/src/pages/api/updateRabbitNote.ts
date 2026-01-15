import { neon } from '@neondatabase/serverless';
import type { NextApiRequest, NextApiResponse } from "next";
import type { Note } from './getRabbitById/[rabbitId]';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Note[]>,
) {
    const sql = neon(`${process.env.DATABASE_URL}`, { arrayMode: false });
    await sql.query('UPDATE RabbitNote SET note = $1 WHERE id = $2', [req.body.note, req.body.id]);
    res.status(200);
}
