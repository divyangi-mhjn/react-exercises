import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ROUTES_MAP } from "./RoutesMap";

const NavBar = () => {
    return (
        <div >
            <h3 style={{textAlign:'center'}}>React Exercises Index</h3>
            <nav style={{margin:'20px'}}>
               <ol>
                    {ROUTES_MAP.map(({ path, name },index) => {
                        return (
                            <li key={index} style ={{margin:20}}>
                                <Link to={path}>{name}</Link>
                            </li>)
                    })}
                </ol>
                
            </nav>

            <Outlet />
        </div>
    )
}

export default NavBar;