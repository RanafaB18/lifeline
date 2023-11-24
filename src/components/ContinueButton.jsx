import { useLoading } from "../hooks/useLoading";

const ContinueButton = () => {
  const { isLoading } = useLoading();
  return (
    <button className="bg-[#28a7d3] text-white py-3 rounded-lg">
      {isLoading ? "Loading..." : "Continue" }
    </button>
  );
};

export default ContinueButton;
