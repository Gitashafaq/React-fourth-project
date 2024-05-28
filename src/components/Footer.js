import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer =()=>{
    return(
       <div className="container-fluid bg-primary py-5 text-center text-white">
          <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1>BookStore</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error provident repellat distinctio ad veritatis amet animi exercitationem magni adipisci consectetur, expedita quis laudantium ut quia molestiae pariatur saepe id!</p>

                    <ul className="social">
                        <li><NavLink className="link-item" to="/"><i class="fa-brands fa-facebook"></i></NavLink></li>
                        <li><NavLink className="link-item" to="/"><i class="fa-brands fa-instagram"></i></NavLink></li>
                        <li><NavLink className="link-item" to="/"><i class="fa-brands fa-x-twitter"></i></NavLink></li>
                    </ul>
                </div>
            </div>
          </div>
       </div>
    );

}
export default Footer;