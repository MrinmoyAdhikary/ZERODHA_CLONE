import SignupBox from "./SignupBox";

function Signup() {
    return (  <>
        <div className="container mt-5 mb-5">
        <div className="row mt-5">
            <div className="col-6 mt-5">
                <img src="..\src\assets\sp.svg"/>
            </div>
            <div className="col-6 mt-5">
                <SignupBox/>
            </div>
        </div>

        </div>
    </>);
}

export default Signup;