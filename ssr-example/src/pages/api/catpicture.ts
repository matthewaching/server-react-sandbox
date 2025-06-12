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
    f: 'https://react19-chat.s3.us-east-1.amazonaws.com/caroline.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLWVhc3QtMSJGMEQCID%2FuRlxMxaSIZJUjIGlZcILPd56plSNcQRbUM9o45PgyAiBx%2Bhqid%2Bn8JM5M6ToFluZTXOUIKvFVYaREnR5S95mubCrCAwjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDgwNDkwMDg0MTgxNCIM5qdFDPIIMGTk6BKWKpYDNdP75exkjwklZYnNtByRHMzCyPKzh%2BhBCqo1XDC%2B0nNfUmDQUNNEtrX%2B4qXoD6ZcrTd2HBoUY9dQkG5o%2Fq4xJWY73CSr%2BqCWxaiGWl3xhTG43m8XNTDQFBVi3p91Dfnhf58Lx1CYVEZmxHVmdkM41PudrAF9GashwC6j3j6W0Si%2BbE5pwEdg%2B%2FG1ha8W%2Bt64zKc2VottB1FWyr%2F%2FzMJIOFCV8AOgJoWIY4OZPpDIqW39YSrSJDFEwQIKAe1Zvw5gETusHSOFJvJ3iRgo2thq0I1hPfydDFEVz09x2INk6%2Fyeen7PiGururF7D8zvX8h85rkZDlbec69kI4I5LhQHGd%2BpaHNCyNaBchm92d0Xlr5%2FvS3c7ozeGBgQ2V7zT7bzIhO7vp94mOXR0wUuCueX%2FtIS1kKBVYwcgtn6ShdCVrYygmXkQIlvo4Gtreby%2BLHESSEs5wW66BLwF3XBVD91Bk1h1IUuGmV7jiU9B%2FgqH15U6%2Fpw41BcYFcykwPBLaeBQ6znTFW0nJGsvW6QMw6MgaQORScLoDDgpqzCBjrfAj%2B9gWBG0sB2KaykLh0tx6G%2FBD75L3E%2F0AJc9Bjg7yzKv%2Bxlnv6M9aL7VFYfTqz0fv%2F4yFD8lcttpVqNQ5TZ8dlh%2FRyRKthYZqqHYmV5eFapN%2BT9%2BFjRzAbkCAKj7Yi%2FrNen5tl%2B848H06H%2FjVSPzRdXz0PPkj5%2Bx7oWhcs9M8%2F4sIug0E2x73rFy7zRwOx459NCJ3UYE3xGVCiYTFn3kDZkuJX5Z0HYhlI%2BGw7ZLqGDpBhfTisjfcvnG51w%2B9ic5ObaGb%2F5opdXUe4zGk2RnuM5fFkqVVj9wR%2BQQHVL49SP25vokDPm6xEGajgO2MHDfAyhC%2BaW8v%2BvLAsuXFaYmprocoNAeehq7id%2BIwpo%2BPrAZa7SVIhaPyzvn%2BKFrqTdm7KWYpmX%2FjrXisyAxeVqN9PLJwTydLORwWrP6Z%2FB3mejE0d%2BuypQZPOXvyVKfvTlhoQfICQP1f12z3QxwdO8Fg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3WZ6UFFLHBYRDBDZ%2F20250612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250612T175040Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=cdb2084de9f368d523d7299177d322f99333be54e58c7d7b0e934a54a7527350',
    fl: 'https://external-preview.redd.it/ujMwGPprDSxN7QkQY0CftuQ3idk7zdDMAMe_qWz6NeE.jpg?width=640&crop=smart&auto=webp&s=c3de26c698ac45bed4d987a5ec3ddc275bfb5e86',
    h: 'https://i.etsystatic.com/25991493/r/il/9b95e0/2712297494/il_794xN.2712297494_8cyj.jpg',
    l: 'https://i.redd.it/athc0a173a991.jpg',
    m: 'https://preview.redd.it/pnc4kps497531.jpg?width=1080&crop=smart&auto=webp&s=95edd1a89499ecaec7c2a685576d30c091f12c92',
    p: 'https://external-preview.redd.it/qNzOCZjyF0fgk5k7V4D5gm2cCl3pgVziVxWhJx8kYUk.png?width=640&crop=smart&format=pjpg&auto=webp&s=d0d013317e48a7d831af78729d43400671d50382',
    r: 'https://external-preview.redd.it/MjM3hXb4jiMJYn4YuEa0UR1gL-phE1qiu0Ht5lkdPJE.png?format=pjpg&auto=webp&s=215aca58aa1a5e9213c6d757901d83b2e94188a4',
    s: 'https://preview.redd.it/lounging-fat-cat-v0-bwwrhponf9ra1.jpg?auto=webp&s=cabf16f4c022398a96bb84da18d0ccac1dbea7f3',
    t: 'https://preview.redd.it/gatquryg44i11.jpg?width=1080&crop=smart&auto=webp&s=d603417e3bb9de3c2ccca21560ac680c6c3ae19a',
    gy: 'https://react19-chat.s3.us-east-1.amazonaws.com/gyat.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLWVhc3QtMSJGMEQCID%2FuRlxMxaSIZJUjIGlZcILPd56plSNcQRbUM9o45PgyAiBx%2Bhqid%2Bn8JM5M6ToFluZTXOUIKvFVYaREnR5S95mubCrCAwjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDgwNDkwMDg0MTgxNCIM5qdFDPIIMGTk6BKWKpYDNdP75exkjwklZYnNtByRHMzCyPKzh%2BhBCqo1XDC%2B0nNfUmDQUNNEtrX%2B4qXoD6ZcrTd2HBoUY9dQkG5o%2Fq4xJWY73CSr%2BqCWxaiGWl3xhTG43m8XNTDQFBVi3p91Dfnhf58Lx1CYVEZmxHVmdkM41PudrAF9GashwC6j3j6W0Si%2BbE5pwEdg%2B%2FG1ha8W%2Bt64zKc2VottB1FWyr%2F%2FzMJIOFCV8AOgJoWIY4OZPpDIqW39YSrSJDFEwQIKAe1Zvw5gETusHSOFJvJ3iRgo2thq0I1hPfydDFEVz09x2INk6%2Fyeen7PiGururF7D8zvX8h85rkZDlbec69kI4I5LhQHGd%2BpaHNCyNaBchm92d0Xlr5%2FvS3c7ozeGBgQ2V7zT7bzIhO7vp94mOXR0wUuCueX%2FtIS1kKBVYwcgtn6ShdCVrYygmXkQIlvo4Gtreby%2BLHESSEs5wW66BLwF3XBVD91Bk1h1IUuGmV7jiU9B%2FgqH15U6%2Fpw41BcYFcykwPBLaeBQ6znTFW0nJGsvW6QMw6MgaQORScLoDDgpqzCBjrfAj%2B9gWBG0sB2KaykLh0tx6G%2FBD75L3E%2F0AJc9Bjg7yzKv%2Bxlnv6M9aL7VFYfTqz0fv%2F4yFD8lcttpVqNQ5TZ8dlh%2FRyRKthYZqqHYmV5eFapN%2BT9%2BFjRzAbkCAKj7Yi%2FrNen5tl%2B848H06H%2FjVSPzRdXz0PPkj5%2Bx7oWhcs9M8%2F4sIug0E2x73rFy7zRwOx459NCJ3UYE3xGVCiYTFn3kDZkuJX5Z0HYhlI%2BGw7ZLqGDpBhfTisjfcvnG51w%2B9ic5ObaGb%2F5opdXUe4zGk2RnuM5fFkqVVj9wR%2BQQHVL49SP25vokDPm6xEGajgO2MHDfAyhC%2BaW8v%2BvLAsuXFaYmprocoNAeehq7id%2BIwpo%2BPrAZa7SVIhaPyzvn%2BKFrqTdm7KWYpmX%2FjrXisyAxeVqN9PLJwTydLORwWrP6Z%2FB3mejE0d%2BuypQZPOXvyVKfvTlhoQfICQP1f12z3QxwdO8Fg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3WZ6UFFLHBYRDBDZ%2F20250612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250612T175143Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=a2aed24473e4d1c8251b0836da3e0661f9a56ed22eb8e073edd0e50d23ab5037',
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
