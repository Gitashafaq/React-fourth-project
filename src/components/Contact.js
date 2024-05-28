
const Contact=()=>{
    return(
        <>
       
<div className="container my-5">
    <div className="row"> 
      
      
       <div className="col-md-6">
        <div className="card p-3">
          <h3>Contact</h3>
          <form action=""className="row mt-3">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Your name"/>
            </div>
  
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Your email"/>
            </div>
  
  
  
            <div className="form-group mt-2 col-12">
            <textarea className="form-control" rows="10"></textarea>
            </div>
  
            <div className="form-group mt-2 col-12 mt-2">
             <button className="btn btn-primary">Send</button>
              </div>
  
  
  
          </form>
        </div>
  
      </div> 
  
      
       <div className="col-md-6"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.476138352534!2d-121.40455312523024!3d38.614926163323744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809addfb33472779%3A0x660dfb7df3ff4776!2sHM%20Media%20Group!5e0!3m2!1sen!2s!4v1706737177173!5m2!1sen!2s" width="600" height="430" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
  </div> 
  </>
    );

}
export default Contact;