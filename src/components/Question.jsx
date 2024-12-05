const Question = ({ title, children, isAnswered }) => {
  return (
    <div
      className={`transition-all ${isAnswered ? 'opacity-50 text-sm' : ''}`} 
      style={{ padding: isAnswered ? '10px' : '20px' }}
    >
      <h2 className={`text-xl font-semibold text-[#1B396A] mb-2 ${isAnswered ? 'text-opacity-70' : ''}`}>
        {title}
      </h2>
      {children}
    </div>
  );
};


const QuestionOption = ({ value, label, isSelected, onChange }) => {
  return (
    <label
      className="flex items-center space-x-3 border-2 border-[#D1D4DA] p-3 rounded-[21px] m-2 cursor-pointer hover:bg-[#EFF3FF] mb-3"
    >
      <input
        type="radio"
        value={value}
        checked={isSelected}
        onChange={onChange} 
      />
      <span>{label}</span>
    </label>
  );
};

export default QuestionOption;


export { Question, QuestionOption };


