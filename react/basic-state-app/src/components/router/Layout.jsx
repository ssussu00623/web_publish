import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <header>
                <Link to='/' style={{'padding':"20px"}}>Home</Link>
                <Link to='/login' style={{'padding':"20px"}}>Login</Link>
                <Link to='/signup' style={{'padding':"20px"}}>Signup</Link>
                <Link to='/about' style={{'padding':"20px"}}>About</Link>
                <Link to='/support' style={{'padding':"20px"}}>Support</Link>
                <Link to='/bestbook' style={{'padding':"20px"}}>bestbook</Link>
                {/* a 태그를 사용하면 자동으로 link로 변환... 되도록 링크로 사용하는 것이 좋음 */}
            </header>
            <Outlet />
            <footer></footer>
        </div>
    );
}

