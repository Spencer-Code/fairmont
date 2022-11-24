import React from "react";
import { Link } from "react-router-dom";

function Register({onRouteChange}) {
  return (
    <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
        <main className="pa4 black-80">
            <form className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" for="first-name">First Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="text" name="first-name"  id="first-name" />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" for="last-name">Last Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="text" name="last-name"  id="last-name" />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="password" name="password"  id="password" />
                </div>
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"><Link to="/">Register</Link></input>
                </div>
            </form>
        </main>
    </article>
    );
}

export default Register;
