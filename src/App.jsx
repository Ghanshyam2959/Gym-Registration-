import { useState, useEffect } from "react";
import { ref, push, onValue } from 'firebase/database';
import { database } from './enviroment'; 
import FirebaseProvider from './FirebaseProvider';

const FirebaseGym = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    currentWeight: "",
    height: "",
    bmi: "",
    goalWeight: "",
    membershipType: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddData = () => {
    const dataRef = ref(database, "PersonalDetails");
    push(dataRef, {
      Name: formData.firstName,
      Surname: formData.lastName,
      Email: formData.email,
      Mobile: formData.phone,
      DOB: formData.dob,
      Gender: formData.gender,
      Created_at: new Date().toISOString(),
    });
  };

  const handleAddData1 = () => {
    const dataRef = ref(database, "FitnessDetails");
    push(dataRef, {
      Current_Weight: formData.currentWeight,
      Height: formData.height,
      BMI: formData.bmi,
      Goal_weight: formData.goalWeight,
      Created_at: new Date().toISOString(),
    });
  };

  const handleAddData2 = () => {
    const dataRef = ref(database, "MembershipDetails");
    push(dataRef, {
      Membership: formData.membershipType,
      Created_at: new Date().toISOString(),
    });
  };

  useEffect(() => {
    const personalDetailsRef = ref(database, "PersonalDetails");
    onValue(personalDetailsRef, (snapshot) => {
      const value = snapshot.val();
      console.log("Fetched Personal Details:", value);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration Successful!");

    handleAddData();
    handleAddData1();
    handleAddData2();

    // Reset Form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      currentWeight: "",
      height: "",
      bmi: "",
      goalWeight: "",
      membershipType: "",
      termsAccepted: false,
    });
  };

  return (
    <div
            style={{
                backgroundColor: "black", color: "white", minHeight: "100vh", textAlign: "center", paddingTop: "20px",
            }} >
            {/* Gym Logo */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                    src="https://www.jotform.com/uploads/ugurg/form_files/GMY.6687df1439b975.77589756.png"
                    alt="Gym Logo"
                    style={{ width: "80%", maxWidth: "600px", height: "auto" }}
                />
            </div>

            {/* Header */}
            <div style={{ padding: "20px" }}>
                <h1>
                    Gym <span style={{ color: "yellow" }}>Registration</span> Form . . .
                </h1>
                <p>Join our gym and start your fitness journey today! Please fill out the form to register.</p>
                <hr style={{ border: "1px solid white", width: "80%", margin: "20px auto" }} />
                <h2 style={{ margin: "10px" }}>
                    <span style={{ color: "yellow" }}>Personal Information</span>
                </h2>
                <hr style={{ border: "1px solid white", width: "80%", margin: "20px auto" }} />
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "700px", padding: "20px", borderRadius: "10px", margin: "auto" }}>

                {/* Full Name */}
                <div style={{ display: "flex", gap: "40px" }}>
                    <div style={{ flex: 1 }}>
                        <label>First Name</label>
                        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "none", margin: "10px" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label>Last Name</label>
                        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "none", margin: "10px" }} />
                    </div>
                </div>

                {/* Email & Phone Number */}
                <div style={{ display: "flex", gap: "40px" }}>
                    <div style={{ flex: 1 }}>
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "none", margin: "10px" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label>Phone Number</label>
                        <input type="tel" name="phone" placeholder="(000) 000-0000" value={formData.phone} onChange={handleChange} required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "none", margin: "10px" }} />
                    </div>
                </div>

                {/* Date of Birth */}
                <div>
                    <label>Date of Birth</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "none", margin: "10px" }} />

                </div>

                {/* Gender */}
                <div>
                    <label>Gender</label>
                    <div style={{ display: "flex", gap: "20px", justifyContent: "center", margin: "10px" }}>
                        <label>
                            <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} required /> Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} required /> Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleChange} required /> Other
                        </label>
                    </div>
                </div>

                {/* Fitness Information */}
                <label>Fill Fitness Information:</label>
                <div style={{ display: "flex", gap: "40px" }}>
                    <input type="text" name="currentWeight" placeholder="Current Weight" value={formData.currentWeight} onChange={handleChange} required style={{ width: "100%", padding: "10px" }} />
                    <input type="text" name="height" placeholder="Height" value={formData.height} onChange={handleChange} required style={{ width: "100%", padding: "10px" }} />
                </div>
                <div style={{ display: "flex", gap: "40px" }}>
                    <input type="text" name="bmi" placeholder="BMI" value={formData.bmi} onChange={handleChange} required style={{ width: "100%", padding: "10px" }} />
                    <input type="text" name="goalWeight" placeholder="Goal Weight" value={formData.goalWeight} onChange={handleChange} required style={{ width: "100%", padding: "10px" }} />
                </div>
                {/* Membership Information */}
                <div style={{ display: "flex", gap: "20px", justifyContent: "center", margin: "10px" }}>
                    <label>Choose Membership Type:</label>
                    <input type="radio" name="membershipType" value="Monthly" checked={formData.membershipType === "Monthly"} onChange={handleChange} required /> Monthly Membership
                    <input type="radio" name="membershipType" value="Annual" checked={formData.membershipType === "Annual"} onChange={handleChange} required /> Annual Membership
                    <input type="radio" name="membershipType" value="Day Pass" checked={formData.membershipType === "Day Pass"} onChange={handleChange} required /> Day Pass
                </div>
                {/* Terms and Conditions */}
                <div>
                    <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
                    <label>I agree to <a href="#" style={{ color: "yellow" }}>terms & conditions</a>.</label>
                </div>

                {/* Submit Button */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                        type="submit"
                        style={{ width: "50%", padding: "10px", backgroundColor: "yellow", color: "black", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", transition: "background 0.3s" }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "yellow")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "white")}>
                        Register Now </button>
                </div>

            </form>
        </div>
);  
}


// Main App Component
function App() {
  return (
    <FirebaseProvider>
    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh", padding: "20px" }}>
      <FirebaseGym />
    </div>
    </FirebaseProvider>
  );
}

export default App;
