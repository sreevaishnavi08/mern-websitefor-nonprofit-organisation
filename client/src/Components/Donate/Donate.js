// src/Components/DonateUs.js
import React, { useState } from 'react';
import './Donate.css'; // For styling

const DonateUs = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Payment Successful!');
  };

  return (
    <div className="donate-us-container">
      <h1>Donate to Subhiksha Voluntary Organization</h1>
      <p>
        Subhiksha voluntary organization is an NGO founded in 2009 by a group of trained and qualified professional social workers to help & support children of all ages & disabilities including autism, cerebral palsy & hearing impairment. They are currently providing education to these children by running a school, day-care center.
      </p>
      <p>
        Apart from the regular education, they also strive to improve the lives of these children by providing speech therapy, language training, sport activities & physiotherapy. Subhiksha also offers training programs to the nurses, anganwadi & ASHA workers. They offer vocational training programs like tailoring, making paper bags & plates for people older than 15 years.
      </p>
      <p>
        They also research acts, laws which help people with disabilities and work towards implementing them. They also investigate complaints and help in drafting new policies. They provide advice regarding the government services that these disabled people are eligible through the meetings they organize in various underdeveloped areas.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Donation Amount (USD)
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Donate</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default DonateUs;
