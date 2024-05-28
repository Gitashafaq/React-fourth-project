import { NavLink } from "react-router-dom";

const Card = (props) => {
    let{title,subtitle,isbn13,price,image,url} =props;
    return (
        <>
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subtitle}</p>
                    <p className="card-text">{isbn13}</p>
                    <button className="btn btn-primary">{price}</button>
                    <NavLink target="_blank" className="btn btn-danger ms-2" to={url}>Buy Now</NavLink>
                </div>
            </div>
        </>
    );
}
export default Card;
