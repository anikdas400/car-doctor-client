import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
    const { img, title, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex">
                <p className="text-lg font-medium">Price:<span>{price}</span></p>
                
                <button className="btn-secondary btn-outline text-2xl p-1 rounded-full" >
                <FaArrowRight className=""></FaArrowRight>
                </button>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;