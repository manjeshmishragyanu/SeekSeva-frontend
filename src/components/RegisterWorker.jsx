import { useState } from "react";

function RegisterWorker({onRegister, onBack}){
    const [form, setForm] = useState({
        name: "",
        profession: "",
        phone: "",
        location: "",
        experience: "",
        photo: "",
        aadhar: ""
    })
    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(){
        if(!form.name  || !form.profession || !form.phone){
            alert("Please fill name, profession and phone")
            return
        }
        onRegister({
            ...form,
            photo: form.photo ||  "https://i.pravatar.cc/150?img=8"
        })
    }

    const inputStyle = {
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #e8d5b0",
        fontSize: "15px",
        boxSizing: "border-box"
    }

    return (
        <div style={{
            background: "#fffaf3",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
            <button
             onClick={onBack}
             style={{
                background: "none",
                border: "none",
                fontsize: "16px",
                cursor: "pointer",
                color: "#362304",
                marginBottom: "20px"
             }}
            >
                ← Back
            </button>

            <h2 style={{ marginBottom: "20px"}}>Register as a Worker</h2>
            <input 
        style={inputStyle}
        name="name"
        placeholder="Your Full Name"
        value={form.name}
        onChange={handleChange}
            />
      <input 
        style={inputStyle}
        name="profession"
        placeholder="Profession (plumber, barber...)" 
        value={form.profession}
        onChange={handleChange}
            />
      <input
        style={inputStyle}
        name="phone"
        placeholder="Phone Number *"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        style={inputStyle}
        name="location"
        placeholder="Your Location (City, State)"
        value={form.location}
        onChange={handleChange}
      />
      <input
        style={inputStyle}
        name="experience"
        placeholder="Experience (e.g. 5 years)"
        value={form.experience}
        onChange={handleChange}
      />
      <input
        style={inputStyle}
        name="photo"
        placeholder="Photo URL (optional)"
        value={form.photo}
        onChange={handleChange}
      />
      <input
        style={inputStyle}
        name="aadhar"
        placeholder="Aadhar Number (for verification)"
        value={form.aadhar}
        onChange={handleChange}
      />
      <button
      onClick={handleSubmit}
      style={{
        width: "100%",
        padding: "15px",
        backgroundColor: "#362304",
        color: "white",
        border: "none",
        borderRadius: "10px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer"
      }}
      >
        Register Now
      </button>
        </div>
    )


}
export default RegisterWorker;