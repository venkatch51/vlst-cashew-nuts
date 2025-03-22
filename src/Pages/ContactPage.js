import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactPage.css";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formdata, setFormdata] = useState({});
  const onSubmit = (data) => {
    setFormdata((prevState) => ({
      ...prevState,
      ...data,
    }));
  };
  const formContentVal = () => {
    {formdata.map((x) => {
      return (
        <>
          <h3>{x.FullName}</h3>
          <p>{x.Email}</p>
          <p>{x.MobileNumber}</p>
        </>
      );
    })}
  }
  return (
    <div className="form-section">
      <h3 className="container text-primary">Please Contact to Know More!!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          {...register("FullName", { required: true })}
          aria-invalid={errors.FullName ? "true" : "false"}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )}
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          aria-invalid={errors.Email ? "true" : "false"}
        />
        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("MobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          aria-invalid={errors.MobileNumber ? "true" : "false"}
        />
        {errors.MobileNumber?.type === "required" && (
          <p role="alert">Mobile number should 10 numbers</p>
        )}
        <textarea
          {...register}
          type="textarea"
          placeholder="Leave Message"
          className="text-area-form"
        />

        <input type="submit" />
      </form>
      <div className="formstate">
        {formdata.length > 0 ? formContentVal() : <p className="text-light">Form Not Submitted</p>}
      </div>
    </div>
  );
};

export default ContactPage;
