import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <div className="row">
        <div className="col-md-5"> {/* Bagian kiri */}
          <div style={{ border: '0px solid #ccc', borderRadius: '5px', marginBottom: '20px' }}>
            <h3>The Office</h3>
            <p>Address: Jl. Raya Tlogomas No.246,Jawa Timur 65144, Indonesia</p>
            <p>Phone: (0341) 99999, ext 99</p>
            <p>Email: labku@umm.ac.id </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5"> {/* Bagian kiri */}
          <div style={{ border: '0px solid #ccc', borderRadius: '5px', marginBottom: '20px' }}>
            <h3>Business Hours</h3>
            <p>Senin - Jumat: 09:00 - 18:00</p>
            <p>Monday - Friday 8am to 4pm </p>
            <p>Saturday - 8am to 12pm</p>
            <p>Sunday - Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
