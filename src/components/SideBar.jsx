import React from 'react'

export default function SideBar({handleDisplayModel}) {
    return (
        <div className='sideBar'>
            <div onClick={handleDisplayModel} className='bgOverlay'></div>
            <div className='sideBarContents'>

                <h2>The Martian Landscape</h2>
                <div>
                    <p>Decription</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit repudiandae a omnis necessitatibus debitis ab, deserunt nostrum laboriosam iusto non ducimus, quisquam incidunt pariatur, fugiat consequuntur culpa aliquam. Doloremque, provident!</p>
                </div>
                <button onClick={handleDisplayModel}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
