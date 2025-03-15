import React, { useEffect } from 'react'


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
       
<div>

</div>
)
}

export default FirebaseGym
