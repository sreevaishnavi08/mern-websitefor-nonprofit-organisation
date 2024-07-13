import React from "react";
import './Testinomials.css'

const testimonialsData = [
  {
    id: 1,
    text: "My child was able to learn many things despite his inabilities. I sincerely thank everyone who helped my child and helped him build his future. They not only saved our child but also shown us a new path!",
    author: "Smrita Pathak",
    date: "March 5, 2023",
  },
  {
    id: 2,
    text: "The support and dedication of the staff here have been nothing short of miraculous. My daughter has made remarkable progress, and we are forever grateful for the positive impact this NGO has had on our lives.",
    author: "Rama Naidu",
    date: "April 12, 2023",
  },
  {
    id: 3,
    text: "As a parent, it's heartwarming to see my son not only participating but excelling in activities he loves. The resources and care provided here have transformed his life and our family's outlook.",
    author: "Ramayya",
    date: "May 20, 2023",
  },
  {
    id: 4,
    text: "We have witnessed incredible improvements in our son's abilities and confidence since joining this program. The compassionate approach and expert guidance have been a beacon of hope for us.",
    author: "Savitri kashyap",
    date: "June 15, 2023",
  },
  {
    id: 5,
    text: "The inclusive and nurturing environment created by the NGO has empowered my daughter to overcome challenges and embrace her potential. We cannot thank the team enough for their unwavering support.",
    author: "Lakshmi",
    date: "July 8, 2023",
  },
];

function Testimonials() {
  return (
    <div className="pt-1" style={{ marginTop: "40px" }}>
      <div className="testimonial-container">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial shadow p-3 mx-3 mb-4"
          >
            <div className="testimonial-text">
              <p>"{testimonial.text}"</p>
              <p>- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;