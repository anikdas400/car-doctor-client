import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBookings(data)
            })
    }, [url])

    const handleDelete = id =>{
        const procced = confirm('Are you sure you want to delete')
        if(procced){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    alert ('deleted successfully')
                    const remening = bookings.filter(booking=> booking._id !== id)
                    setBookings(remening)
                }
            })
        }
    }

    const handleBookingConfirm = id =>{
        const procced = confirm('Are you sure to confirm')
        if(procced){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'PATCH',
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify({status:"confirm"})
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.modifiedCount > 0){

                    // update status
                    const remening = bookings.filter(booking=> booking._id !== id)
                    const updated = bookings.find(booking=> booking._id === id)
                    updated.status='confirm'
                    const newBookings =[updated,...remening]
                    setBookings(newBookings)
                }
            })
        }
    }

    return (
        <div>
            <h2>Bookings element:{bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>service</th>
                            <th>price</th>
                            <th>date</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking=><BookingRow
                                 key={booking._id}
                                  booking={booking}
                                  handleDelete={handleDelete}
                                  handleBookingConfirm={handleBookingConfirm}
                                  ></BookingRow>)
                        }
                        
                        
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default Bookings;