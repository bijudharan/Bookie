import { useState } from "react"


function Login({onLogin}){

    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    function handleSubmit(e){
        e.preventDefault();

        if(username && password){
            onLogin();
        }else{
            alert("enter username and password");
        }
    }
    return(
        <>
        <div className="login-wrap">
            <div className="login-con">
                    <h2>Sign In</h2>
                <form className="form-login" onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/><br/>
                    <input type="password" placeholder="password" value={password} onChange={ e => setPassword(e.target.value)} /><br/>
                    {/* <div className="check">
                    <input type="checkbox"/>
                    <a href="#">forgot password</a>
                    </div> */}
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>    
        
        
        </>

    )
}

export default Login