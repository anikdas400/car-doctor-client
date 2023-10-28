import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';




    
const Signup = () => {
    const {createUser} = useContext(AuthContext)

    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{
            console.error(error);
        })

    
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">

                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-violet-500 text-center">SignUp</h1>
                    <form onSubmit={handleSignUp} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <button className='py-4'>Already have an account? <Link to='/login' className='text-indigo-600 font-semibold'>Login</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Signup;