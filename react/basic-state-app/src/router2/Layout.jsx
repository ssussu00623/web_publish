import React from 'react';
import { Outlet, Link} from 'react-router-dom';
import Header from './Header.jsx';

export default function Layout() {
    return (
        <div>
            <Header>
                <Link to='/' style={{'padding':'20px'}}>home</Link>
                <Link to='airbnb' style={{'padding':'20px'}}>airbnb</Link>
                <Link to='aladin' style={{'padding':'20px'}}>aladin</Link>
                <Link to='olive' style={{'padding':'20px'}}>olive</Link>
                <Link to='yes24' style={{'padding':'20px'}}>yes24</Link>
                <Link to='counter' style={{'padding':'20px'}}>counter</Link>
                <Link to='avatar' style={{'padding':'20px'}}>avatar</Link>
            </Header>
            <Outlet />
            {/* <Footer>
                <div> <Footer></Footer></div>
            </Footer> */}
        </div>
    );
}

