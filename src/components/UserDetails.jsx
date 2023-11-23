/* eslint-disable react/prop-types */
import { useState } from "react";
import Eye from "./Eye";
import { MemoizedFormInput } from "../views/SignUp";
import FormSelect from "./FormSelect";
import AlreadyHasAccount from "./AlreadyHasAccount";

const options = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
];

const UserDetails = ({ formik }) => {
  const [showPassword, setShowPassword] = useState(false);

  function showPasswordHandler() {
    setShowPassword(!showPassword);
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <>
        <h1 className="text-2xl font-bold text-black">
          Let&apos;s get to know you!
        </h1>
        <p className="mt-3 mb-8 text-form-color">
          Please provide your personal details so we can personalize your
          experience
        </p>
      </>
      <div className="flex flex-col gap-6">
        <MemoizedFormInput
          type="text"
          name="name"
          placeholder="e.g Jane Doe"
          label="Enter your name"
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors.name}
          touched={formik.touched?.name}
          value={formik.values.name}
          required
        />
        <MemoizedFormInput
          type="email"
          name="email"
          label="Enter your email address"
          placeholder="e.g janedoe@gmail.com"
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors.email}
          touched={formik.touched?.email}
          value={formik.values.email}
          required
        />
        <FormSelect
          name="language"
          id="lang"
          label="Preferred Language"
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.language}
          options={options}
        />
        <div className="flex relative">
          <MemoizedFormInput
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            placeholder="Enter a secure password"
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.password}
            touched={formik.touched?.password}
            value={formik.values.password}
            required
          />
          <button
            onClick={showPasswordHandler}
            type="button"
            className=" absolute h-[41px] right-0 top-0 mt-7 px-2 border-2 rounded-r bg-[#fafafa]"
          >
            <Eye showPassword={showPassword} />
          </button>
        </div>
        <div className="lg:hidden">
          <AlreadyHasAccount />
        </div>
        <button className="bg-[#28a7d3] text-white py-3 rounded-lg">
          Continue
        </button>
      </div>
    </form>
  );
};

export default UserDetails;
