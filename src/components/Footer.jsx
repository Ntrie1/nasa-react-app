import React from 'react'

export default function Footer({handleDisplayModel, data}) {
    return (
        <footer>
            <div className='bgGradient'></div>
            <div>
                <h1>Glaxio PROJECT</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleDisplayModel}>
                <i className="fa-solid fa-info"></i>
            </button>

        </footer>
    )
}
