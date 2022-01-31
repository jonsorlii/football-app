import React from 'react'
import {
    Nav,
    NavLink, 
    Bars,
    NavMenu, 
} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu >
                    <NavLink to = './'> 
                        Home
                    </NavLink>
                    <NavLink to = './Players'>
                        Players
                    </NavLink>
                     <NavLink to = './WorldCup'>
                        WorldCup
                    </NavLink>
                </NavMenu>
            </Nav>
        </> 
    )
}

export default Navbar