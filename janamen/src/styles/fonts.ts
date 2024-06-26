import localFont from 'next/font/local';

export const conthrax = localFont({
    src: '../../public/fonts/conthrax-sb.ttf',
    weight: '400',
    style: 'normal',
});

export const futuraPT = localFont({
    src: [
        {
            path: '../../public/fonts/FuturaPT/FuturaPT-Book.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/FuturaPT/FuturaPT-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/FuturaPT/FuturaPT-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/FuturaPT/FuturaPT-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
    ],
});
