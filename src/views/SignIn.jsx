import { useFormik } from "formik";
import { MemoizedFormInput } from "./SignUp";
import * as Yup from "yup";
import { emailRegex, passwordRegex } from "../lib/regex";
import { signInHandler } from "../service/crud";
import { useState } from "react";
import Eye from "../components/Eye";
import ContinueButton from "../components/ContinueButton";
import AccountQuestion from "../components/AccountQuestion";
import useToken from "../hooks/useToken";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoading } from "../hooks/useLoading";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setToken } = useToken();
  const { setIsLoading } = useLoading();
  const navigate = useNavigate();
  const location = useLocation();
  const whereYouWantedToGo = location.state.whereYouWantedToGo;
  function showPasswordHandler() {
    setShowPassword(!showPassword);
  }
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(emailRegex, {
          excludeEmptyString: true,
          message: "Please enter a valid email",
        })
        .required("Please enter a valid email address"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Please enter a valid password")
        .matches(passwordRegex, {
          excludeEmptyString: true,
          message: "Please enter a valid password",
        }),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      console.log("sending data to server", values);
      const { email, password } = values;
      const formData = {
        email,
        password,
      };
      try {
        const response = await signInHandler(formData);
        console.log(response);
        setToken({accessToken: response.data.access_token, refreshToken: response.data.refresh_token});
        navigate(whereYouWantedToGo, { replace: true });
      } catch (err) {
        console.log("Tell user", err);
        if (err.response.data?.errors?.email) {
            formik.setFieldError('email', 'Email could not be found')
        } else {
            formik.setFieldError('password', 'Invalid password')
        }
      }
      setIsLoading(false)
    },
  });
  return (
    <main className="relative w-screen h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col absolute overflow-hidden inset-0 m-auto w-[600px] h-fit rounded-2xl border border-gray-50 shadow-xl px-16 py-8 font-open"
      >
        <>
          <h1 className="text-2xl font-bold text-black">Welcome back !</h1>
          <p className="mt-3 mb-8 text-form-color">Sign in to your account</p>
        </>
        <div className="flex flex-col gap-6">
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
          <div className="flex relative">
            <MemoizedFormInput
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              placeholder="Enter your password"
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
            <AccountQuestion
              question={"Don't have an account?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
          </div>
          <ContinueButton />
        </div>
      </form>
      <div className="absolute right-5 top-5 hidden lg:flex">
        <AccountQuestion
          question={"Don't have an account?"}
          buttonText={"Sign up"}
          to={"/signup"}
        />
      </div>
    </main>
  );
};

export default SignIn;
