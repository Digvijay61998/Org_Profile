import React, { useState, useEffect } from 'react';
import './Login.css';
import  kinglogo from '../../../assets/kinglogo.png';
import { useHistory } from "react-router-dom";

const styles = {
    companyLogo: {
        width:'100px',
        height:'100px',
        borderRadius:'50%',
        margin:'0 auto',
        boxShadow:'0px 0px 2px #5f5f5f, 0px 0px 0px 5px #ecf0f3,8px 8px 15px #a7aaaf,-8px -8px 15px #fff'
    }
  };

export default function Login(props) {
    let logged = false;
    const history = useHistory();
    function handleClick() {
        history.push("/home");
        props.onGotoHome(logged)
    }
    
    return (
        <div className="login-container">
            <div className="login">
                <div className="blog">
                    <div className="imgBx">
                        <h2>Blogs</h2>
                    </div>
                </div>
                <div className="login-div">
                    <div className="company-logo" style={styles.companyLogo }>
                        <img src={kinglogo} className="logo-img"></img>
                    </div>
                    <div className="login-title">L o g i n</div>
                    <div className="fields">
                        <div className="email">
                            <input type="email" className="user-input" placeholder="Enter your email!" />
                        </div>
                    </div>
                    <button className="signin-btn" onClick={handleClick}>Login</button>
                </div>
            </div>
        </div>
    )
}

