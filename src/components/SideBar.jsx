import React from 'react'

export default function SideBar({handleDisplayModel, data}) {
    return (
        <div className='sideBar'>
            <div onClick={handleDisplayModel} className='bgOverlay'></div>
            <div className='sideBarContents'>

                <h2>{data?.title}</h2>
                <div className='descriptionContainer'>
                    <p className='descriptionTitle'>{data.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleDisplayModel}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
