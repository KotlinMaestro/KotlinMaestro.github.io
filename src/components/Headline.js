import React, { useState, useEffect, useMemo } from 'react';
import '../Headline.css';

function Headline() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    const sentences = useMemo(() => [
        "I'm Vincent.",
        "I'm a Freelancer.",
        "I'm a Software Developer."
    ], []);

    useEffect(() => {
        const interval = setInterval(() => {
            setText(sentences[index].substr(0, text.length + 1));
            if (text.length === sentences[index].length) {
                clearInterval(interval);
                setTimeout(() => {
                    setIndex((index + 1) % sentences.length);
                    setText('');
                }, 1000);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [text, index, sentences]);

    return (
        <div className="headline-container m-4 text-slate-200 text-2xl font-extrabold">
            <h1>{text}</h1>
        </div>
    );
}

export default Headline;
