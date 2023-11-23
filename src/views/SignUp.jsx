/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import FormInput from "../components/FormInput";
import * as Yup from "yup";
import { emailRegex, passwordRegex } from "../lib/regex";
import { memo, useState } from "react";
import UserDetails from "../components/UserDetails";
import { AnimatePresence } from "framer-motion";
import MedicalHistory from "../components/MedicalHistory";
import { motion } from "framer-motion";
import AlreadyHasAccount from "../components/AlreadyHasAccount";
export const MemoizedFormInput = memo(FormInput);

const variant = {
  medicalHistoryHidden: {
    opacity: 0,
    x: "100%",
  },
  userDetailsHidden: {
    opacity: 0,
    x: "-100%",
  },
  userDetailsExit: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.5 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  medicalHistoryExit: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
  signIn: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  signUp: {
    x: "100%",
    transition: {
      duration: 0.5,
    },
  },
};

const SignUp = () => {
  const [formIndex, setFormIndex] = useState(0);
  const initialValues = {
    name: "",
    email: "",
    language: "english",
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
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter a name"),
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
      if (formIndex === 0) {
        setFormIndex(1);
      } else {
        console.log("sending data to server", values);
      }
    },
  });

  function changeIndexHandler(index) {
    if (index === formIndex) {
      return;
    }
    if (index < formIndex) {
      setFormIndex(0);
      return;
    }
    formik.handleSubmit(); // cause a validation check
    if (formik.isValid && formik.dirty) {
      const newFormIndex = formIndex === 0 ? 1 : 0;
      setFormIndex(newFormIndex);
    }
  }

  return (
    <main className="relative w-screen h-screen">
      <section className="flex flex-col absolute overflow-hidden inset-0 mx-auto w-[600px] h-fit rounded-2xl border border-gray-50 shadow-xl px-16 py-8 font-open">
        <AnimatePresence mode="popLayout">
          {formIndex === 0 ? (
            <motion.div
              variants={variant}
              initial="userDetailsHidden"
              animate="visible"
              exit={"userDetailsExit"}
              key={"userDetails"}
            >
              <UserDetails formik={formik} />
            </motion.div>
          ) : (
            <motion.div
              variants={variant}
              initial="medicalHistoryHidden"
              animate="visible"
              exit={"medicalHistoryExit"}
              key={"medicalHistory"}
            >
              <MedicalHistory formik={formik} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex gap-3 mt-4 self-center items-center">
          <button
            onClick={() => changeIndexHandler(0)}
            className={`${
              formIndex === 0 ? "scale-150 bg-[#bfbfbf]" : "bg-[#e2e8f0]"
            } w-4 h-4 cursor-pointer duration-300 transition-transform rounded-full`}
          ></button>
          <button
            onClick={() => changeIndexHandler(1)}
            className={`${
              formIndex === 1
                ? "scale-150 bg-[#bfbfbf]"
                : "bg-[#e2e8f0] scale-100"
            } w-4 h-4 cursor-pointer duration-300 transition-transform bg-[#e2e8f0] rounded-full`}
          ></button>
        </div>
      </section>
      <div className="absolute right-5 top-5 hidden lg:flex">
        <AlreadyHasAccount />
      </div>
    </main>
  );
};

export default SignUp;
