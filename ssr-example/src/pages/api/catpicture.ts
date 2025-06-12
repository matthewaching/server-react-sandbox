// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    catUrl?: string;
    subtitle?: string;
    errorMessage?: string;
};

export const catImageMap = {
    b: 'https://i.redd.it/trvw9nduhx261.jpg',
    c: 'https://preview.redd.it/y6llo83po8d01.jpg?auto=webp&s=a599dd20e053b793a8268276ea9cc5555d2a0ff0',
    f: 'https://react19-chat.s3.us-east-1.amazonaws.com/caroline.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCICQW7wahcO74sjKLjGYpOjsRJSri8CRUR43GJSWX3j2rAiAcI3HGUJCLgTTTGBNRIWycfB6FeX0ieJV8RhFCLEkb5irLAwgcEAEaDDgwNDkwMDg0MTgxNCIMS2UcqIXzaimxsOcGKqgDDWzYgONTrbyaSOTMJ9m9sYOGuQa0o%2BwXssBXIa4mggLv4ZrA61D9cAT88FTeoU1OG2Ta7%2Fl%2Fzbwmd%2FQPsNFwOO62LgRIKyNw%2FwqpjcdSbhgZhQM7SZDUvWZOpjNxnPgVLYtAcqAABhWqtDDUfFqLbQQ7eOZi4%2BbHs5pLHlvzxaxUb5bVwpUyiEsWXsrOToYCyqZzQP3Jr50QDmtxGbrHIML8UOZN%2BKyDV5xmMJpVX9VOzx0%2FInQknnqBDt67AaEqLfgDqibBSehZmqZg3e1J0tL%2BxQRTpTOWFq%2FApArZoDDPNXmR1F5gtK1iF5WLQWnFsW1NpXrObuPsbEuMn72oT9SXwkq7Bxh3HEizmg6tgeZO4g9o%2BG3t9Rzef437ELPOSZeIcQE%2BWCXV4gro37473FCRM3B7pDb4cdLnIFCtR1ASsV0D11lEojyX7lcgWFrj9cHWg%2BvW7MSMuM2k9dCcYeVCkkTo4HhnNLvVq2pDuhDtUEJTiBGNUbU6chPb1cuUd0YljfqS2vw%2BnXkPZEv3mzSFFq7c3iEVSQMr92T13vlnqdy6uSg9PzD%2F%2Bri9BjrlAn55Xw9aHmvuUd%2B7%2BbE1OtrnV4wT6rXhtzxXWJYaGKSGMgY3mEC3JscY9A84Nk%2FzgETcFyWxd1NO%2Bn6ZWH5KUiRl5Qp0gvswIDZj%2Bd0AY2yQzMIp8GV5Yme85q7Y46bvX8xg0skR6i9UErrwkMgAOjIj0ajsidypd%2FV2%2FNhnZjcVEpXvgXDcKlfTwAA76PZfEZI7ewSrX0qnmbNvc7Oay1SJ8ftCaJU7I%2FozZYOZWW6RhDA9cYHq5LDYwbg6O%2B8AHjFnzYb4wDDHol7NIkL4D3IUE6kh3WiO4pmtYFUdcQmiV%2B%2F9fL%2Fm1w0qMLRzh%2BsIWQChGW3Z9dRFrpJNwDpri3OIel1pBei44gxeM1buoSWQznuTOu4oMKpQwBPNMlbagt9edasUwFRrScNqsBa63FCAxazQ4Jm0aM7nXP6yFJAhIUsXXkLEPlo%2Bt%2B9UWfyyG4I7xoZQpP0mxRNK2KDzdyziCmYUYw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3WZ6UFFLODGGZWL6%2F20250213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250213T184527Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=e93bc4fe48726c4ad692f847bd29d5b6b500e9c3ecacb09c6a5d11f430065644',
    fl: 'https://external-preview.redd.it/ujMwGPprDSxN7QkQY0CftuQ3idk7zdDMAMe_qWz6NeE.jpg?width=640&crop=smart&auto=webp&s=c3de26c698ac45bed4d987a5ec3ddc275bfb5e86',
    h: 'https://i.etsystatic.com/25991493/r/il/9b95e0/2712297494/il_794xN.2712297494_8cyj.jpg',
    l: 'https://i.redd.it/athc0a173a991.jpg',
    m: 'https://preview.redd.it/pnc4kps497531.jpg?width=1080&crop=smart&auto=webp&s=95edd1a89499ecaec7c2a685576d30c091f12c92',
    p: 'https://external-preview.redd.it/qNzOCZjyF0fgk5k7V4D5gm2cCl3pgVziVxWhJx8kYUk.png?width=640&crop=smart&format=pjpg&auto=webp&s=d0d013317e48a7d831af78729d43400671d50382',
    r: 'https://external-preview.redd.it/MjM3hXb4jiMJYn4YuEa0UR1gL-phE1qiu0Ht5lkdPJE.png?format=pjpg&auto=webp&s=215aca58aa1a5e9213c6d757901d83b2e94188a4',
    s: 'https://preview.redd.it/lounging-fat-cat-v0-bwwrhponf9ra1.jpg?auto=webp&s=cabf16f4c022398a96bb84da18d0ccac1dbea7f3',
    t: 'https://preview.redd.it/gatquryg44i11.jpg?width=1080&crop=smart&auto=webp&s=d603417e3bb9de3c2ccca21560ac680c6c3ae19a',
    gy: 'https://react19-chat.s3.us-east-1.amazonaws.com/gyat.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCICQW7wahcO74sjKLjGYpOjsRJSri8CRUR43GJSWX3j2rAiAcI3HGUJCLgTTTGBNRIWycfB6FeX0ieJV8RhFCLEkb5irLAwgcEAEaDDgwNDkwMDg0MTgxNCIMS2UcqIXzaimxsOcGKqgDDWzYgONTrbyaSOTMJ9m9sYOGuQa0o%2BwXssBXIa4mggLv4ZrA61D9cAT88FTeoU1OG2Ta7%2Fl%2Fzbwmd%2FQPsNFwOO62LgRIKyNw%2FwqpjcdSbhgZhQM7SZDUvWZOpjNxnPgVLYtAcqAABhWqtDDUfFqLbQQ7eOZi4%2BbHs5pLHlvzxaxUb5bVwpUyiEsWXsrOToYCyqZzQP3Jr50QDmtxGbrHIML8UOZN%2BKyDV5xmMJpVX9VOzx0%2FInQknnqBDt67AaEqLfgDqibBSehZmqZg3e1J0tL%2BxQRTpTOWFq%2FApArZoDDPNXmR1F5gtK1iF5WLQWnFsW1NpXrObuPsbEuMn72oT9SXwkq7Bxh3HEizmg6tgeZO4g9o%2BG3t9Rzef437ELPOSZeIcQE%2BWCXV4gro37473FCRM3B7pDb4cdLnIFCtR1ASsV0D11lEojyX7lcgWFrj9cHWg%2BvW7MSMuM2k9dCcYeVCkkTo4HhnNLvVq2pDuhDtUEJTiBGNUbU6chPb1cuUd0YljfqS2vw%2BnXkPZEv3mzSFFq7c3iEVSQMr92T13vlnqdy6uSg9PzD%2F%2Bri9BjrlAn55Xw9aHmvuUd%2B7%2BbE1OtrnV4wT6rXhtzxXWJYaGKSGMgY3mEC3JscY9A84Nk%2FzgETcFyWxd1NO%2Bn6ZWH5KUiRl5Qp0gvswIDZj%2Bd0AY2yQzMIp8GV5Yme85q7Y46bvX8xg0skR6i9UErrwkMgAOjIj0ajsidypd%2FV2%2FNhnZjcVEpXvgXDcKlfTwAA76PZfEZI7ewSrX0qnmbNvc7Oay1SJ8ftCaJU7I%2FozZYOZWW6RhDA9cYHq5LDYwbg6O%2B8AHjFnzYb4wDDHol7NIkL4D3IUE6kh3WiO4pmtYFUdcQmiV%2B%2F9fL%2Fm1w0qMLRzh%2BsIWQChGW3Z9dRFrpJNwDpri3OIel1pBei44gxeM1buoSWQznuTOu4oMKpQwBPNMlbagt9edasUwFRrScNqsBa63FCAxazQ4Jm0aM7nXP6yFJAhIUsXXkLEPlo%2Bt%2B9UWfyyG4I7xoZQpP0mxRNK2KDzdyziCmYUYw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3WZ6UFFLODGGZWL6%2F20250213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250213T184609Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=81d0880e31122fe46f6917c45085fa9bff8b694021cf18e9880fd512d12b5b3f',
    x: 'https://react19-chat.s3.us-east-1.amazonaws.com/picturenoworko',
};

const catSubtitles = {
    f: 'that\'s not very nice',
    fl: 'don\'t tread on me',
    l: 'the gainz',
    gy: 'sheeeeesh',
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.method === 'POST') {
        const catLetter = JSON.parse(req.body).letterInput;

        if (catLetter) {
            const imageUrl = catImageMap[catLetter as keyof typeof catImageMap];

            if (imageUrl) {
                res.status(200).json({ catUrl: imageUrl, subtitle: catSubtitles[catLetter as keyof typeof catSubtitles] });
            } else {
                res.status(404).json({ errorMessage: 'Invalid letter.' });
            }
        } else {
            res.status(400).json({ errorMessage: 'No letter detected.' });
        }
    } else {
        res.status(400).json({ errorMessage: 'Cat image request must be sent as a POST.' });
    }
}
