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

export default Question;
