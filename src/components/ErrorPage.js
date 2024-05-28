import "./ErrorPage.css";
const ErrorPage=()=>{
    return(
        <>
        <div className="container">
            <div className="row align-items-center justify-content-center" style={{height:"90vh"}}>
                <div className="col-md-8">
                    <div className="card p-4 text-center">
                    <h1 className="ErrorIcon"><i class="fa-duotone fa-triangle-exclamation"></i></h1>
                  <h1>Oops! 404 ERROR,Page Not Found!</h1>
                  </div>
                </div>
            </div>
        </div>
        </>
    );

}
export default ErrorPage;
