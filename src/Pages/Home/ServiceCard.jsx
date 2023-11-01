import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id,img, title, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex">
                <p className="text-lg font-medium">Price:<span>{price}</span></p>
                
                <Link to={`/checkout/${_id}`}>
                <button className="btn-secondary btn-outline text-2xl p-1 rounded-full" >
                <FaArrowRight className=""></FaArrowRight>
                </button>
                </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;