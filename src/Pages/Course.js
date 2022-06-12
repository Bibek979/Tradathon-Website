import cartImg from '../Images/cart-icon.png';
import React from "react";
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Course(props){
    return(
        <div className="container" >
            <div className="container text-center my-5">
                <h1>Courses Available</h1>
            </div>
           <div className="courseCard container mb-5">
           <div className="card">
                <img alt="card image" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fdemo-credit-card-payment-online-notebook-laptop-background-image-solution-online-commercial-concept-demo-credit-card-189223839.jpg&f=1&nofb=1' className="card-img-top"></img>
                <h4 className="card-title">Course 1</h4>
                <p className="card-text" >Some explaination about basic Course. Need to longate this.</p>
                <span>&#8377;8000</span>
                
                <div className='btnCustomStyle'>
                <a href="#" class="btn btn-primary">Buy Now</a>
                <a href="#" class="btn"><img src={cartImg} height='25px'></img></a>
                </div>
            </div>
            {/* Card 2 */}
            <div className="card">
                <img alt="card image" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fdemo-credit-card-payment-online-notebook-laptop-background-image-solution-online-commercial-concept-demo-credit-card-189223839.jpg&f=1&nofb=1' className="card-img-top"></img>
                <h4 className="card-title">Course 2</h4>
                <p className="card-text" >Some explaination about medium Course. Need to longate this.</p>
                <span>&#8377;2000</span>
                <div className='btnCustomStyle'>
                <a href="#" class="btn btn-primary">Buy Now</a>
                <a href="#" class="btn"><img src={cartImg} height='25px'></img></a>
                </div>
            </div>

            <div className="card">
                <img alt="card image" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fdemo-credit-card-payment-online-notebook-laptop-background-image-solution-online-commercial-concept-demo-credit-card-189223839.jpg&f=1&nofb=1' className="card-img-top"></img>
                <h4 className="card-title">Course 2</h4>
                <p className="card-text" >Some explaination about Advanced Course. Need to longate this.</p>
                <span>&#8377;500</span>
                <div className='btnCustomStyle'>
                <a href="#" class="btn btn-primary">Buy Now</a>
                <a href="#" class="btn"><img src={cartImg} height='25px'></img></a>
                </div>
            </div>
           </div>
        </div>           
    )
}