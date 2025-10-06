const SectionTitle = ({ title, description }) => {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-4 px-4 md:px-0">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  );
};

export default SectionTitle;
