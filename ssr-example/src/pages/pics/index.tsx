import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const availableLetters = ['b', 'c', 'f', 'h', 'l', 'm', 'p', 'r', 's', 't', 'gy', 'x'];

export default function CatPics() {
    const [selectedLetter, setSelectedLetter] = useState<string>('_');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [subtitle, setSubtitle] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const swapLetter = async (event: React.MouseEvent) => {
        const letter = event.currentTarget.id ?? '';
        setIsLoading(true);
        setSelectedLetter(letter || '_');

        const res = await fetch('https://ssr-sandbox.mching.dev/api/catpicture', {
            method: 'POST',
            body: JSON.stringify({ letterInput: letter }),
        });

        const body = await res.json();
        setImageUrl(body.catUrl ?? '');
        setIsLoading(false);

        if (letter === 'f') {
            setSubtitle('that\'s not very nice');
        } else if (letter === 'l') {
            setSubtitle('the gainz');
        } else if (letter === 'gy') {
            setSubtitle('sheeeeesh');
        } else if (letter === 'x') {
            setSubtitle('that doesn\'t look right...');
        } else {
            setSubtitle('');
        }
    };

    return (
        <>
            <Head>
                <title>cat pics</title>
            </Head>
            <Link href='/'>go to cat facts</Link>
            <div className='contentContainer'>
                <div className='imageContainer'>
                    {isLoading && <div className='loadingSpinner' />}
                    {!isLoading && imageUrl && (
                        <Image className='catImage' src={imageUrl} alt='this is cat' height={500} width={400} />
                    )}
                </div>
                <div className="headerContainer">
                    <h1>
                        {'this is a '}
                        <span className='letterSlot'>
                            {selectedLetter}
                        </span>
                        {'at cat.'}
                    </h1>
                    {subtitle && <p className='imageSubtitle'>{subtitle}</p>}
                </div>
                <div className='buttons'>
                    {availableLetters.map(letter => (
                        <button
                            id={letter}
                            key={letter}
                            className='letterButton'
                            onClick={swapLetter}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
