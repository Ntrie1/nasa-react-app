import React from 'react'

export default function Footer({handleDisplayModel}) {
    return (
        <footer>
            <div className='bgGradient'></div>
            <div>
                <h2>The Brutal Marsian Landscape</h2>
                <h1>Glaxio PROJECT</h1>
            </div>
            <button onClick={handleDisplayModel}>
                <i className="fa-solid fa-info"></i>
            </button>

        </footer>
    )
}
