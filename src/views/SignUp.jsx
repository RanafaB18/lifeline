/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import FormInput from "../components/FormInput";

const UserDetails = ({ formik }) => {

    return (
      <form className="flex flex-col absolute inset-0 m-auto w-[600px] h-5/6 rounded-2xl border border-gray-50 shadow-xl px-16 py-8 font-open text-form-color">
        <>
          <h1 className="text-2xl font-bold text-black">
            Let&apos;s get to know you!
          </h1>
          <p className="mt-3">
            Please provide your personal details so we can personalize your
            experience
          </p>
        </>
        <FormInput label="Enter your name"  handleChange={formik.handleChange}/>

      </form>
    );
  };
  const SignUp = () => {
    const initialValues = {
      name: "",
      email: "",
      language: "",
      password: "",
      medicalCondition: "",
      allergies: "",
      isSickleCell: "",
      bloodPressure: "",
      bloodGroup: "",
      genotype: "",
      height: "",
      weight: "",
    };
    const formik = useFormik({
      initialValues: initialValues,
      onSubmit: (values) => {
        console.log(values);
      },
    });

    return (
      <main className="relative w-screen h-screen overflow-hidden">
        <UserDetails formik={formik}/>
      </main>
    );
  };

  export default SignUp;
