// import React from 'react';
// import './About.css';

// function About() {
//     return (
//         <div style={{paddingTop:'40px'}} className="about-container m-5 mx-auto bg-white text-black">
//             <section className="hero-section text-center">
//                 <div className="hero-content">
//                     <h1>About Us</h1>
//                     <p className='text-black'>Subhiksha Foundation is dedicated to empowering underprivileged communities through education and sustainable development. We believe in the transformative power of education and aim to provide quality educational resources to those in need. Our programs focus on enhancing literacy, promoting eco-friendly practices, and fostering holistic community development. By addressing the educational and environmental needs of our communities, we strive to create a brighter, more sustainable future for all. Our team is committed to making a positive impact, one step at a time.</p>
//                 </div>
//             </section>

//             <section className="content-section text-center">
//                 <h2>Our Mission</h2>
//                 <p className='text-black'>
//                 Subhiksha Foundation's mission is to empower underprivileged communities through education and sustainable development. We aim to provide quality educational resources and promote eco-friendly practices, fostering holistic community growth. Our goal is to create a brighter, more sustainable future by addressing educational and environmental needs, ensuring every individual has the opportunity to thrive and contribute to a better world.
//                 </p>
//             </section>  
//         </div>
//     );
// }

// export default About;



import React from 'react';
import './About.css';
import downloadImage from '../../Assets/download.jpg';
import imagesImage from '../../Assets/imagesImage.jpg'

function About() {
    return (
        <div className="hello">
            <p className="heading">SUBHIKSHA VOLUNTARY ORGANIZATION</p>
            <h3 className='text-white'>Because we care!!</h3>
            <div id="s1" className="glass-box">
                <img className="pic" src={imagesImage} alt="Our Mission"/>
                <div className="content">
                    <h4>WHO ARE WE</h4>
                    <p>We assume that every family remains prosperous, and help them to become self-sufficient and bestow them with good empowerment & creativity.</p>
                </div>
            </div>
            <div id="s2" className="glass-box">
                <img className="pic" src={downloadImage} alt="Our Approach"/>
                <div className="content">
                    <h4>WHAT WE DO</h4>
                    <p>We help the challenged people and help them give a proper education, vocational training, and therapies which could help them in making their life successful.</p>
                </div>
            </div>
            <h4 className='contactus'>CONTACT US</h4>
            <div className='email'>
                <ul>
                    <li>Phone Number: <a href="tel:+04023521102">+04023521102</a></li>
                    <li>Email: <a href="mailto:subhekhafoundation@outlook.in">subhekhafoundation@outlook.in</a></li>
                </ul>
            </div>
        </div>
    );
}

export default About;
