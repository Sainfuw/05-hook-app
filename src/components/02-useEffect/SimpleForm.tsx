import React, { useState, useEffect } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const { name, email } = form;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  // useEffect(() => {
  //   console.log("hey!");
  // }, []);

  // useEffect(() => {
  //   console.log("form cambió");
  // }, [form]);

  // useEffect(() => {
  //   console.log("email cambió");
  // }, [email]);

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="form-control"
          placeholder="nombre"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          className="form-control"
          placeholder="correo"
        />
      </div>
      {name === "123" && <Message />}
    </>
  );
};
