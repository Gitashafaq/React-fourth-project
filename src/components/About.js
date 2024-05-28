import "./Footer.css";
const About = () => {
    return (

        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="card p-4">

                        <h3>Market</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit assumenda earum impedit, natus veritatis magnam consequatur, perferendis excepturi sunt et, maiores quidem sequi unde dolor itaque dolorum minus nostrum ullam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit assumenda earum impedit, natus veritatis magnam consequatur, perferendis excepturi sunt et, maiores quidem sequi unde dolor itaque dolorum minus nostrum ullam!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit assumenda earum impedit, natus veritatis magnam consequatur, perferendis excepturi sunt et, maiores quidem sequi unde dolor itaque dolorum minus nostrum ullam!</p>


                        <ul>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores et aperiam debitis vitae, quidem veritatis iste nulla, culpa recusandae modi minus odio quam, inventore commodi eos sequi iure voluptatum.</p>



                    </div>
                </div>
            </div>



            <div className="row mt-5">
                <div className="col">
                    <h3>Our Staff</h3>

                    <div className="card-group">
                        <div className="card text-center">
                            <img src={require("../photos/staf2.jpg")} className="card-img-top" alt="..." height="184px" />
                            <div className="card-body">
                                <h5 className="card-title">MOHAMMED JAN</h5>
                                <p className="card-text">(CEO)</p>
                                <p className="card-text">

                                    <ul className="social">
                                    <li className="d-inline"><a className=" link-item" href=""><i className="fa-brands fa-facebook"></i></a ></li>
                                    <li className="d-inline" ><a className=" link-item" href=""><i className="fa-brands fa-instagram"></i></a></li>
                                    <li className="d-inline"><a className=" link-item" href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                                    </ul></p>
                            </div>
                        </div>



                        <div className="card text-center">
                            <img src={require("../photos/staf3.jpg")} className="card-img-top" alt="..." height="184px" />
                            <div className="card-body">
                                <h5 className="card-title">AHMAD WALI</h5>
                                <p className="card-text">(Manager)</p>
                                <p className="card-text">
                                    <ul className="list-unstyled">
                                    <li className="d-inline"><a className=" link-item" href=""><i className="fa-brands fa-facebook"></i></a ></li>
                                    <li className="d-inline" ><a className=" link-item" href=""><i className="fa-brands fa-instagram"></i></a></li>
                                    <li className="d-inline"><a className=" link-item" href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                                    </ul>


                                </p>
                            </div>
                        </div>




                        <div className="card text-center">
                            <img src={require("../photos/4.jpg")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">MARYAM</h5>
                                <p className="card-text">(Assistant)</p>
                                <p className="card-text"> <ul className="list-unstyled">
                                    <li className="d-inline"><a className=" link-item" href=""><i className="fa-brands fa-facebook"></i></a ></li>
                                    <li className="d-inline" ><a className=" link-item" href=""><i className="fa-brands fa-instagram"></i></a></li>
                                    <li className="d-inline"><a className=" link-item" href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                                </ul> </p>
                            </div>
                        </div>





                        <div className="card text-center">
                            <img src={require("../photos/images (1).jpeg")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">AYESHA</h5>
                                <p className="card-text">(Social Media Manger)</p>
                                <p className="card-text">  <ul className="social">
                                    <li className="d-inline"><a className=" link-item" href=""><i className="fa-brands fa-facebook"></i></a ></li>
                                    <li className="d-inline" ><a className=" link-item" href=""><i className="fa-brands fa-instagram"></i></a></li>
                                    <li className="d-inline"><a className=" link-item" href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                                </ul> </p>
                            </div>z
                        </div>







                    </div>



                </div>
            </div>


        </div>
    );

}
export default About;