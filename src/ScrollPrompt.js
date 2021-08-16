import './ScrollPrompt.css'
import { useState, useEffect } from 'react'

export default function ScrollPrompt(props) {
    const [opacity, setOpacity] = useState(1);

    const onScroll = () => {
        setOpacity(((500 - window.pageYOffset) /500))
    }

    useEffect(() => {
        onScroll();
        window.addEventListener('scroll', onScroll)
    }, [])

    return (
        <div className="ScrollPrompt" style={{opacity: opacity}}>

        </div>
    )
}