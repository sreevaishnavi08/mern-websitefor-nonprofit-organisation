import React from 'react';
import './Home.css';    
import Education1 from '../../Assets/Education1.png'
import Education2 from '../../Assets/Education2.png';
import Education3 from '../../Assets/Education3.png';
import pic1 from '../../Assets/1.png';
import pic2 from '../../Assets/2.png';
import pic3 from '../../Assets/3.png';
import pic4 from '../../Assets/4.png';
import pic5 from '../../Assets/5.png';
import pic6 from '../../Assets/6.png';
import pic7 from '../../Assets/7.png';
import { GrNext, GrPrevious } from "react-icons/gr";
import Testimonials from '../Testinomials/Testinomials';
import {Helmet} from "react-helmet";
import { useEffect } from 'react';

const textVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut" }
};

function Home() {
    useEffect(() => {
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    }, []);
    const events = [
        {
            title: "Sustainable Craft Workshop",
            date: "2024-07-15",
            description: "Join us for a workshop on creating sustainable crafts using recycled materials."
        },
        {
            title: "Community Clean-Up Day",
            date: "2024-08-05",
            description: "Help us clean up our local parks and community areas. Refreshments provided."
        },
        {
            title: "Handicrafts Exhibition",
            date: "2024-09-12",
            description: "Explore a variety of handmade crafts by local artisans and children."
        },
        {
            title: "Eco-Friendly Living Seminar",
            date: "2024-10-22",
            description: "Learn about eco-friendly living practices from experts in the field."
        },
        {
            title: "Charity Run",
            date: "2024-11-05",
            description: "Participate in our charity run to support community development projects."
        }
    ];

    return (
        <div className='pt-1' style={{ marginTop: "40px" }}>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ height: '500px', padding: "20px", width: "80vw", borderRadius: "30px" }} src={Education1} className="d-block mx-auto" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: '500px', padding: "20px", width: "80vw", borderRadius: "30px" }} src={Education2} className="d-block mx-auto" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: '500px', padding: "20px", width: "80vw", borderRadius: "30px" }} src={Education3} className="d-block mx-auto" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <GrPrevious className='text-black' />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <GrNext className='text-black' />
                </button>
            </div>
            <div className="about-container m-5 mx-auto bg-white text-black">
                <section className="content-section text-center">
                    <h2 className='mb-5'>Meet Our Team</h2>
                    <div className="team-members " style={{marginLeft:'120px'}}>
                        <div className='d-flex gap-1'>
                            <img style={{ height: '400px' }} src={pic1} alt="" />
                            <img style={{ height: '400px' }} src={pic2} alt="" />
                            <img style={{ height: '400px' }} src={pic3} alt="" />
                            <img style={{ height: '400px' }} src={pic4} alt="" />
                        </div>
                        <div className='d-flex mt-3 gap-1' style={{marginLeft:'140px'}}>
                            <img style={{ height: '400px' }} src={pic5} alt="" />
                            <img style={{ height: '400px' }} src={pic6} alt="" />
                            <img style={{ height: '400px' }} src={pic7} alt="" />
                        </div>
                    </div>
                </section>

                <section className="content-section text-center">
                    <h2>Upcoming Events</h2>
                    <div className="events-container">
                        {events.map((event, index) => (
                            <div className="event-card" key={index}>
                                <h5>{event.title}</h5>
                                <p><strong>Date:</strong> {event.date}</p>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <Testimonials/>

                <section className="content-section text-center">
                    <h2>Contact Us</h2>
                    <p className='text-black'>We'd love to hear from you! Reach out to us via the following methods:</p>
                    <ul>
                        <li>Email: director@subhiksha.org</li>
                        <li>Phone: +91-9908076899, +91-9121104609</li>
                        <li>Address: Plot No: 112, Road No: 3, Dhanalaxmi Colony, Mahendra Hills, East Marredpally, Secunderabad - 500026, Hyderabad, Telangana, India</li>
                    </ul>
                    <p className='text-black'>Office Hours: 08:00 am - 06:00 pm (Sunday closed)</p>
                </section>
            </div> 
        </div>
    );
}

export default Home;



