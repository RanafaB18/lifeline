/* eslint-disable react/prop-types */
import { MemoizedFormInput } from "../views/SignUp";

const MedicalHistory = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <>
        <h1 className="text-2xl mb-4 font-bold text-black">
          Tell me your medical history.
        </h1>
      </>
      <div className="flex flex-col gap-6">
        <MemoizedFormInput
          type="textarea"
          placeholder="e.g I am asthmatic"
          name="medicalCondition"
          label="Any underlying medical condition? if Yes, please state or describe them."
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors.medicalCondition}
          touched={formik.touched?.medicalCondition}
          value={formik.values.medicalCondition}
        />
        <MemoizedFormInput
          type="textarea"
          name="allergies"
          placeholder="I react to Hydroquinone"
          label="Any allergies? if Yes, please describe and include any drugs or food."
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors.allergies}
          touched={formik.touched?.allergies}
          value={formik.values.allergies}
        />
        <MemoizedFormInput
          type="text"
          name="genotype"
          label="Genotype"
          placeholder="e.g AA"
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors.genotype}
          touched={formik.touched?.genotype}
          value={formik.values.genotype}
        />

        <div className="flex items-center gap-4">
          <MemoizedFormInput
            type="text"
            name="bloodGroup"
            label="Blood group"
            placeholder="e.g O-positive"
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.bloodGroup}
            touched={formik.touched?.bloodGroup}
            value={formik.values.bloodGroup}
          />
          <MemoizedFormInput
            type="text"
            name="bloodPressure"
            label="Blood Pressure"
            placeholder="e.g 104/80"
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.bloodPressure}
            touched={formik.touched?.bloodPressure}
            value={formik.values.bloodPressure}
          />
        </div>
        <div className="flex items-center gap-4">
          <MemoizedFormInput
            type="number"
            name="height"
            label="Height"
            placeholder="cm"
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.height}
            touched={formik.touched?.height}
            value={formik.values.height}
          />
          <MemoizedFormInput
            type="number"
            name="weight"
            label="Weight"
            placeholder="kg"
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.weight}
            touched={formik.touched?.weight}
            value={formik.values.weight}
          />
        </div>
        <div className="flex flex-col">

        <button className="bg-gradient-to-br from-[#28a7d3] to-[#d5e1e6] via-[#28a7d3] text-white py-3 rounded-lg">
          Continue
        </button>
        <button className="text-[#28a7d3] py-3 rounded-lg">
          Skip for now
        </button>
        </div>
      </div>
    </form>
  );
};

export default MedicalHistory;
