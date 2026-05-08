import React from 'react'
function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    <img src='../src/assets/image.png'/>
                </div>
                <div className='col'>
                    <h1>Free and open market education</h1>
                    <br/>
                    <p className='fs-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <br></br>
                     <a href='' className='fs-5' style={{textDecoration:'none'}}>Varcity<i className="fa-solid fa-right-long align-middle ms-2"></i></a>
                     
                     <p className='fs-5'><br></br>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                     <br/>
                     <a href='' className='fs-5' style={{textDecoration:'none'}}>TradingQ&A<i className="fa-solid fa-right-long align-middle ms-2"></i></a>
                </div>

            </div>
        </div>
      );
}

export default Education;