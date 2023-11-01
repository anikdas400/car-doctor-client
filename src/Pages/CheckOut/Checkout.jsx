import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Checkout = () => {
    const service = useLoaderData()
    const { price,_id, title,img } = service
    const {user}=useContext(AuthContext)
    const handleCarCheckOut = event=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const phone = form.phone.value
        const price = form.price.value
        const email = user?.email
        const booking ={
            customerName : name,
            date,
            title,
            email,
            phone,
            img,
            service_id:_id,
            price

        }
        console.log(booking)

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert ('service book successfully')
            }
        })
    }
    
    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-5">car services:{title}</h2>
            <form onSubmit={handleCarCheckOut} className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>

                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>

                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input type="email" placeholder="Your Email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>

                        <input type="text" placeholder="Due Amount" defaultValue={'$'+ price} name="price" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>

                        <input type="text" placeholder="Your Phone" name="phone" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6 w-full">
                    <input type="submit" className="btn btn-block btn-success " value="Order Confirm" />

                </div>
            </form>
        </div>
    );
};

export default Checkout;