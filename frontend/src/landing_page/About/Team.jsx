function Team(){
    return ( 
        <div className="container mb-5">
         <div className="row">
            <h2 className="text-center mb-5">People</h2>
         </div>
         <div className="row mt-5 ">
            <div className="col text-center">
                <img className="profileImg" src="..\src\assets\IMG20241011011501[1].jpg"  style={{borderRadius:'50%',textAlign:'center',width:'30rem', height:'25rem'}}/>
                <p className="mt-3  fs-4">Mrinmoy Adhikary</p>
            </div>
            <div className="col fs-4 text-muted">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p><br/>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p><br/>

<p>Playing basketball is his zen.</p>
            </div>
         </div>            
        </div>
    );
}

export default Team;