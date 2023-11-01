import { Link } from "react-router-dom";
import logo from '../../src/assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Navber = () => {

    const {user,logOut} = useContext(AuthContext)

    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    const navManu = <>
    <Link className="text-lg mr-2 hover:text-violet-800 font-medium" to='/'><li>Home</li></Link>
    <Link className="text-lg mr-2 hover:text-violet-800 font-medium" to='/about'><li>About</li></Link>
    <Link className="text-lg mr-2 hover:text-violet-800 font-medium" to='/service'><li>Service</li></Link>
    {
        user?.email? <>
        <Link className="text-lg mr-2 hover:text-teal-600 font-medium" to='/bookings'><li>My Bookings</li></Link>
        <li><button onClick={handleLogOut}>LogOut</button></li>
        </>:<Link className="text-lg hover:text-violet-800 font-medium" to='/login'><li>Login</li></Link>
    }
    
    
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navManu}
                    </ul>
                </div>
                <Link className="w-20 h-20" to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navManu}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-secondary">Appointment</button>
                
            </div>
        </div>
    );
};

export default Navber;