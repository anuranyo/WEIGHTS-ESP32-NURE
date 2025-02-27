import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <button className="text-lg font-semibold w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

export default Accordion;
