import { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = [
    'CTO', 'Answer to Everything Tech', 'Web Developer', 'Answer to Everything Tech', 'NFT Creator','Answer to Everything Tech' , 'Ecommerce Provider','Answer to Everything Tech', 'Security Engineer', 'Blockchain Expert'
]

const Rotating_Text = props => {

    const [index, setIndex]  = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => 
            setIndex(index => index + 1),
            4000
        );
        return () => clearTimeout(intervalId);
    }, []);



    return (
        <div>
            <TextTransition 
                text={ TEXTS[index % TEXTS.length]}
                springConfig={presets.wobbly}
            />
        </div>
    )
}

export default Rotating_Text;
