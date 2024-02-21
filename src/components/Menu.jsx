import React from 'react'

const links = [
    { id: 1, name: 'Homepage' },
    { id: 2, name: 'Portfolio' },
    { id: 3, name: 'Motion' },
]

const Menu = ({ isOpen }) => {
    return (
        <div className={isOpen ? 'styled-menu menu-open' : 'styled-menu'}>
            <div className='links'>
                {
                    links.map((link) => (
                        <span key={link.id}>{link.name}</span>
                    ))
                }
            </div>

            <div className='social'>
                <p>Instagram</p>
                <p>Vimeo</p>
                <p>Facebook</p>
                <p>YouTube</p>
            </div>
        </div>
    )
}

export default Menu