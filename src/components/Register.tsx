import React from "react";

const Register = () => {
    return (
        <main className="form-signin">
            <form>
                <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="First Name"/>
                    <label htmlFor="floatingInput">First Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Last Name"/>
                    <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password Confirm"/>
                    <label htmlFor="floatingPassword">Password Confirm</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
        </main>
    );
}

export default Register;