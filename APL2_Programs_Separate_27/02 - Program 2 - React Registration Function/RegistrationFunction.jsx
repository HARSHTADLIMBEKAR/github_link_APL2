import React, { useState } from "react";

export default function RegistrationFunction() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); console.log(form); };
  return (
    <form onSubmit={onSubmit}>
      <h2>Registration (Function)</h2>
      <input name="name" value={form.name} onChange={onChange} placeholder="Name" />
      <input name="email" value={form.email} onChange={onChange} placeholder="Email" type="email" />
      <input name="password" value={form.password} onChange={onChange} placeholder="Password" type="password" />
      <button>Register</button>
    </form>
  );
}
