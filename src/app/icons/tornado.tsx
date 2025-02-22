
function TornadoIcon () {

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 50 50'
            width='auto'
            height='auto'
            >
            <defs>
                <linearGradient id='textGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' stopColor='#606060'/>
                <stop offset='100%' stopColor='#A0A0A0'/>
                </linearGradient>
                <linearGradient id='letterFlameLight' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#FF4500'/>
                <stop offset='30%' stopColor='#FFA500'/>
                <stop offset='50%' stopColor='#FF0000'/>
                <stop offset='70%' stopColor='#FFA500'/>
                <stop offset='100%' stopColor='#FF4500'/>
                </linearGradient>
            </defs>
            <circle cx='25' cy='25' r='12' stroke='url(#textGradient)' strokeWidth='2' fill='none'/>
            <text x='17' y='30' fontSize='14' fontFamily='Arial' fontWeight='bold' fill='url(#letterFlameLight)'>AI</text>
        </svg>
    )
}

export default TornadoIcon
