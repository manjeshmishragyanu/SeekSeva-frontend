import { useState } from "react";

function Login({onLogin}){
const [isSignUp, setIsSignUp] = useState(false)
const [form, setForm ] = useState({
    name: "", 
    password: "",
    mail: ""
})
const [error, setError] = useState("")
const [loading, setLoading] = useState(false)

function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value})
}

function handleSubmit(){
    if(!form.name || !form.password){
        setError('Please fill name and password')
        return
    }

    setLoading(true)
    setError('')


const url = isSignUp
    ? "https://seekseva-backend.onrender.com/sign-up"
    : "https://seekseva-backend.onrender.com/sign-in"


fetch (url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(form)
})

    .then(res => res.json())
    .then(data => {
        setLoading(false)
        if(data.token){
            localStorage.setItem("token", data.token)
            onLogin()
        }else{
            setError(data.msg)
        }
    })
}

    const inputStyle = {
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #e8d5b0",
        fontSize: "15px",
        boxSizing: "border-box",
        backgroundColor: "#fffaf3",
        color: "#362304",
        outline: "none"
    }

return(
    <div style={{
        minHeight: "100vh",
        backgroundColor: "#fdf6ec",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <div style={{
            backgroundColor: "#fffaf3",
            borderRadius: "12px",
            padding: "40px",
            width: "100%",
            maxWidth: "400px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            border: "1px solid #e8d5b0"
        }}>

            <h1 style={{
                color: "#362304",
                textAlign: "center",
                marginBottom: "8px"
            }}>
            🔧 SeekSeva
            </h1>

            <p style={{
                color: "#8b6914",
                textAlign: "center",
                marginBottom: "30px"
            }}>
                {isSignUp ? "Create your account" : "Welcome back"}
            </p>

            <input
            style={inputStyle}
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            />

            {isSignUp && (
                <input
                style={inputStyle}
                name="mail"
                placeholder="Email address"
                value={form.mail}
                onChange={handleChange}
                />
            )}

            <input
            style={inputStyle}
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            />


            {error && (
                <p style={{ color: "red", marginBottom: "15px", fontSize: "14px"}}>
                    {error}
                </p>
            )}

            <button onClick={handleSubmit}
            style={{
                width: "100%",
                padding: "15px",
                backgroundColor: "#362304",
                color: "#ffb852",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "15px"
            }}
            >
                {loading ? "please wait..." : isSignUp ? "Sign Up" : "Sign In"}
            </button>

            <p
                onClick={() => setIsSignUp(!isSignUp)}
                style={{
                    textAlign: "center",
                    color: "#8b6914",
                    cursor: "pointer",
                    fontSize: "14px"
                }}
            >
                {isSignUp ? "Already have account? Sign In" : "New here ? Create account"}
            </p>

       

        </div>
    
    </div>
)

}

export default Login
