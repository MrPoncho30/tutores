const Question = ({ title, children }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#1B396A] mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default Question;
