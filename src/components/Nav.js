import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container">
                    
                <NavLink className="navbar-brand" to="/" >BookStore</NavLink>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            
                                <NavLink  className="nav-link active" to="/" >Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/About'>About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Services'>Services</NavLink>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " to href="/Contact">Contact</a>
                            </li>
                        </ul>
                        <div>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Nav;