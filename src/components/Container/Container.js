import React from "react";
import './Container.css';


const Container = () => (
    <div className="container">
        <form>
            <div className="name">
                <label>First Name</label>
                <input type="text" placeholder="Enter your name" />
            </div>
            <div className="lastname">
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name" />
            </div>
            <div className="email">
                <label>Email</label>
                <input type="email" placeholder="Enter your email adress" />
            </div>
            <div className="password">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)


export default Container;