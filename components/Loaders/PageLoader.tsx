'use client';
import { useEffect, useState } from 'react';

export default function PageLoader() {
    const [dots, setDots] = useState('   ');

    useEffect(() => {
        // console.log('PageLoader mounted');
        const frames = ['   ', '.  ', '.. ', '...'];
        let idx = 0;

        const intervalId = window.setInterval(() => {
            // console.log('frame', idx, '→', frames[idx]);
            idx = (idx + 1) % frames.length;
            setDots(frames[idx]);
        }, 300);

        return () => {
            // window.console.log('PageLoader unmounted, clearing interval');
            clearInterval(intervalId);
        };
    }, []);

    return (
        <pre
            className="
        absolute inset-0 z-50
        grid place-items-center
        bg-black text-white text-2xl font-mono
        font-bold
      "
        >Loading{dots}</pre>
    );
}
