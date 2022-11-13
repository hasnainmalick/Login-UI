import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import LoginUI from '../images/login_logo_outro.svg'
import UserIcon from '../images/user.svg'
import PasswordIcon from '../images/password.svg'
// import {us}


function LoginForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    // const Navigate = useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:3301/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,password
            })
        })
        const data = await response.json();
        function link(){
            return (
                navigate("/dashboard")
            )
        }

        // console.log(data);
        if(data.user){
            alert("Login SuccessFully");
            link();
        } else{
            alert("Incorrect email and password")
        }
        setEmail("");
        setPassword("")        
    }
    return (
        <div className='container'>
            <form action='' onSubmit={handleSubmit}>
                <div>
                    <img className="image" src={LoginUI} alt='Logo'/>
                    {/* <image src='../images/login_logo_outro.svg'/> */}
                </div>

                <div className="inputWrapper">
                    <img src={UserIcon} alt='user'/>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                </div>
                <div className="inputWrapper">
                    <img src={PasswordIcon} alt='password'/>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}placeholder='Password' />
                </div>
                <div className="inputWrapper inputLogin">
                    <button>Login</button>
                </div>
                <div className='forgotPassword'>
                    <p>Forgot Password?</p>
                    <Link to="/register">Registration</Link>
                </div>
                <div className='link'>
                </div>
                
            </form>
        </div>
    )
}

export default LoginForm