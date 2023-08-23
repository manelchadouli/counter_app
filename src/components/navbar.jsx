import React, { Component } from 'react';
//stateless functional comonenets
const NavBar = ({totalCounters}) => {
    console.log('NavBar- rendered')
    return (  
    <nav className="navbar navbar-light bg-light">
    <a href="#" className="navbar-brand">Navbar
    <span className="badge badge-pill badge-secondary">{totalCounters}</span></a>
</nav>  );
}
 



 
export default NavBar;