import React from 'react';

class Slider extends React.Component {
  render(){
    return(
      <div>
      <div className="container-fluid">
   <div className="row">
       <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
           <div className="carousel-inner caresol-content">
               <div className="carousel-item active">
                   <img src="img/anthony-duran-QbOvrpDU1KA-unsplash.jpg" className="d-block w-100" alt="pizza"/>
               </div>
               <div className="carousel-item">
                   <img src="img/bulbul-ahmed-3svNmQj8_X8-unsplash.jpg" className="d-block w-100" alt="pizza"/>
               </div>
               <div className="carousel-item">
                   <img src="..." className="d-block w-100" alt="..."/>
               </div>
           </div>
           <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only">Previous</span>
           </a>
           <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="sr-only">Next</span>
           </a>
       </div>
   </div>
</div>
      </div>
    );
  }
};
export default Slider;
