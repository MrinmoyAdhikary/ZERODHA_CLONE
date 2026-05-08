import React from 'react'
function Stats() {
    return (
        <div className="container">
      <div className="row ">
        <div className="col-6">
          <img
            src="../src/assets/ecosystem.png"
            alt="Ecosystem"
            style={{ height: "40rem", width: "auto" }}
          />
          <div>
            <a href='' className='mx-5 fs-5' style={{textDecoration:'none'}}>Explore our products<i className="fa-solid fa-right-long align-middle ms-2"></i></a>
            <a href='' className='mx-5 fs-5' style={{textDecoration:'none'}}>Try kite demo<i className="fa-solid fa-right-long align-middle ms-2"></i></a>
          </div>
        </div>
        <div className="col-6">
          <div className="fs-5">
           <h1> Trust with confidence</h1>
            <br />
            <br />
            <h2>Customer-first always</h2>
            
          <p className='text-muted'>  That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.</p>
            <br />
            <h2>No spam or gimmicks</h2>
            
          <p className='text-muted'>  No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.</p>
            <br />
            <h2>The Zerodha universe</h2>
            
            <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.</p><br/>
            
            <h2>Do better with money</h2>
           <p className='text-muted'> With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.</p>
          </div>
        </div>
      </div>
    </div>
      );
}

export default Stats;