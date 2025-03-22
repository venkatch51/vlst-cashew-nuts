import React from "react";
import { useForm } from "react-hook-form";
import './ContactPage.css'

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          {...register("Full Name", { required: true })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <textarea {...register} type="textarea" placeholder="Leave Message" className="text-area-form"/>

        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactPage;
