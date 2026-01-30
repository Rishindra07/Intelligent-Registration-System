import { useState, useEffect } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import PasswordStrength from "./PasswordStrength";
import { locationData } from "../utils/locationData";
import { validateForm, checkPasswordStrength } from "../utils/validation";
import "../styles/form.css";

export default function RegistrationForm() {

  const [form, setForm] = useState({
    firstName:"", lastName:"", email:"", phone:"",
    age:"", gender:"", address:"",
    country:"", state:"", city:"",
    password:"", confirmPassword:"", terms:false
  });

  const [errors, setErrors] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [strength, setStrength] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(()=>{
    setErrors(validateForm(form));
    setStrength(checkPasswordStrength(form.password));
  }, [form]);

  const update = e => {
    const { name, value, type, checked } = e.target;
    setForm({...form, [name]: type==="checkbox"?checked:value});
  };

  const changeCountry = e => {
    const c = e.target.value;
    setForm({...form, country:c, state:"", city:""});
    setStates(Object.keys(locationData[c]||{}));
    setCities([]);
  };

  const changeState = e => {
    const s = e.target.value;
    setForm({...form, state:s, city:""});
    setCities(locationData[form.country][s]||[]);
  };

  const submit = e => {
    e.preventDefault();
    if(Object.keys(errors).length===0){
      setSuccess("Registration Successful!");
      setForm({
        firstName:"", lastName:"", email:"", phone:"",
        age:"", gender:"", address:"",
        country:"", state:"", city:"",
        password:"", confirmPassword:"", terms:false
      });
      setStates([]);
      setCities([]);
    }
  };

  const valid = Object.keys(errors).length === 0;

  return (
    <div className="card">
      <h2>Registration</h2>

      {!valid && <div className="topError">⚠️ Please fix errors below</div>}
      {success && <div className="success">✓ {success}</div>}

      <form onSubmit={submit}>

        <InputField id="firstName" name="firstName"
          value={form.firstName} onChange={update}
          label="First Name"
          placeholder="Enter first name" error={errors.firstName}/>

        <InputField id="lastName" name="lastName"
          value={form.lastName} onChange={update}
          label="Last Name"
          placeholder="Enter last name" error={errors.lastName}/>

        <InputField id="email" name="email"
          value={form.email} onChange={update}
          label="Email"
          placeholder="Enter email address" error={errors.email}/>

        <InputField id="phone" name="phone"
          value={form.phone} onChange={update}
          label="Phone"
          placeholder="Enter phone number" error={errors.phone}/>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea id="address" name="address" value={form.address}
            onChange={update} placeholder="Enter your address"/>
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender"
            value={form.gender} onChange={update}>
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          {errors.gender && <span role="alert">{errors.gender}</span>}
        </div>

        <SelectField id="country" name="country"
          value={form.country} onChange={changeCountry}
          label="Country"
          options={Object.keys(locationData)}
          placeholder="Select country" error={errors.country}/>

        <SelectField id="state" name="state"
          value={form.state} onChange={changeState}
          label="State"
          options={states}
          placeholder="Select state" error={errors.state}/>

        <SelectField id="city" name="city"
          value={form.city} onChange={update}
          label="City"
          options={cities}
          placeholder="Select city" error={errors.city}/>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <InputField id="password" name="password"
            type="password" value={form.password}
            onChange={update}
            placeholder="Enter password" error={errors.password}/>

          <PasswordStrength strength={strength} />
        </div>

        <InputField id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={update}
          label="Confirm Password"
          placeholder="Confirm password"
          error={errors.confirmPassword}/>

        <div className="checkbox-wrapper">
          <input id="terms" type="checkbox"
            name="terms" checked={form.terms}
            onChange={update}/>
          <label htmlFor="terms">I accept the terms and conditions</label>
        </div>
        {errors.terms && <span role="alert">{errors.terms}</span>}

        <button id="submitBtn" disabled={!valid}>
          {success ? "✓ Registered Successfully" : "Create Account"}
        </button>

      </form>
    </div>
  );
}
