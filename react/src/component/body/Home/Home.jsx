
import './home.css'
const Home = () => {
  return (
    <div>
        <div className='namee'>
        <h1>SNEAK PARK 👟</h1>
        </div>
   
      

       {/* ////////carousel /////// */}
     <div className="container">
     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../../../../public/9841A0D7-2E5E-49B9-B796-263E4013B803.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../../../../public/140FDDA9-C3B4-497B-85A6-26897B4B1C7D.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../../../../public/6CED972C-A705-4A17-B52F-8A8A287BD65D.jpeg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     </div>
     <div className="container-fluid support-main-1">
    <div><h2>Support the Project</h2></div>
    <div><p>From the very beginning, The Odin Project has been committed to providing a world-className and completely free coding curriculum for anyone and everyone eager to learn. <span>With your generous donations</span>, we can continue to inspire thousands of aspiring developers, irrespective of their background or financial status.</p></div>
    <div className="support-main-1-button">
        <button>Donate now!</button>
    </div>


  </div>
    </div>
  )
}

export default Home
