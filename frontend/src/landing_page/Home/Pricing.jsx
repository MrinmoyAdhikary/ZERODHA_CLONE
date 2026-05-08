import React from 'react'
function Pricing() {
    return (
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <h2>Unbeatable pricing</h2><br/>
                <p className='fs-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='' className='fs-5' style={{textDecoration:'none'}}>See pricing<i className="fa-solid fa-right-long align-middle ms-2"></i></a>
            </div>
            <div className='col-6 mt-3'>
                <div className='row '>
                    <div className='d-flex align-items-center col-4 px-0'>
                        <img src="../src/assets/pricing-eq.svg" style={{height:'8rem'}}/>
                        <p className='text-muted 'style={{ marginLeft: '-2.5rem' }}>Free account opening</p>
                    </div>
                      <div className='d-flex align-items-center col-4 px-0'>
                        <img src="../src/assets/pricing-eq.svg"style={{height:'8rem'}}/>
                        <p className='text-muted'style={{ marginLeft: '-3rem' }}> Free equity delivery
and direct mutual funds</p>
                    </div>
                      <div className='d-flex align-items-center col-4 px-0'>
                        <img src="../src/assets/other-trades.svg" style={{height:'8rem'}}/>
                        <p className='text-muted'style={{ marginLeft: '-1.2rem' }}> Intraday and
F&O</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
      );
}

export default Pricing;