import React from 'react'
import {
    Nav,
    NavLink, 
    Bars,
    NavMenu, 
    MyImage,
} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <MyImage to = './' >Football<span>STATS</span></MyImage>
                <Bars />
                <NavMenu >
                    <NavLink to = './Players'>
                        Players
                    </NavLink>
                     <NavLink to = './WorldCup'>
                        WorldCup
                    </NavLink>
                    <NavLink to = './ChampionsLeague'>
                        ChampionsLeague
                    </NavLink>
                </NavMenu>
            </Nav>
        </> 
    )
}

export default Navbar