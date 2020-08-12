// Libraries
import React, { useState } from "react";

// vercel.com/guides/deploying-statickit-with-vercel

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  function renderInput({ placeholder, type, value, onChange }) {
    return (
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onSubjectChange(e) {
    setSubject(e.target.value);
  }

  function onMsgChange(e) {
    setMsg(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} method="POST">
      {renderInput({
        placeholder: "Name",
        type: "text",
        value: name,
        onChange: onNameChange,
      })}
      {renderInput({
        placeholder: "Email",
        type: "email",
        value: email,
        onChange: onEmailChange,
      })}
      {renderInput({
        placeholder: "Subject",
        type: "text",
        value: subject,
        onChange: onSubjectChange,
      })}
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Message"
        value={msg}
        onChange={onMsgChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
