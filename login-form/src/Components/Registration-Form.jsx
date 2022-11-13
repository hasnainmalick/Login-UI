import React,{useState} from 'react'
import {Link }from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginUI from '../images/login_logo_outro.svg'
import UserIcon from '../images/user.svg'
import PasswordIcon from '../images/password.svg'

function RegisrationForm() {
    const { register,  formState: { errors } } = useForm();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const onSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:3301/register', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,email,password
            })
        })
        const data = await response.json();
        console.log(data);
        alert("Your form has been Submitted")

        // alert(`Your name is ${name} & password is ${password}`);
        setName("");
        setEmail("");
        setPassword("")        
    }
    return (
        <div className='container'>
            <form action='' onSubmit={onSubmit}>
                <div>
                    <img className="image" src={LoginUI} alt='Logo'/>
                    {/* <image src='../images/login_logo_outro.svg'/> */}
                </div>
                <h2 style={{color:'#fff'}}>Registration Form</h2>
                <div className="inputWrapper">
                    <img src={UserIcon} alt='user'/>
                    <input type='text' value={name} {...register("exampleRequired", { required: true, minLength: 6, pattern: /^[A-Za-z]+$/i })} onChange={(e) => setName(e.target.value)} placeholder='Username' />
                </div>
                    {errors.exampleRequired && <div className="error">This field is required*</div>}
                <div className="inputWrapper">
                    <img src={UserIcon} alt='user'/>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                </div>
                <div className="inputWrapper">
                    <img src={PasswordIcon} alt='password'/>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}placeholder='Password' />
                </div>
                <div className="inputWrapper inputLogin">
                    <button>Registration</button>
                </div>
                <div className='forgotPassword'>
                    {/* <p>Forgot Password?</p> */}
                    <Link to="/">Login</Link>
                </div>
                
                
            </form>
        </div>
    )
}

export default RegisrationForm;