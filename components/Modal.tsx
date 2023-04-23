import React, { useState } from 'react';

const Modal = ({ showModal, setShowModal }) => {
    const handleOpenEmailClient = () => {
        const message = `
  <p>Selected Program:</p>
  
  <p>${selectedItems.join(",")}</p>
  
`;
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(`REPS Progress_${subject}`)}&body=${encodeURIComponent(message)}`;
        window.open(mailtoUrl);
      };
      const [body, setBody] = useState('Exercise Program:');
      const [subject, setSubject] = useState('');

      const [selectedItems, setSelectedItems] = useState([]);
    
      const handleToggleItem = (item) => {
        if (selectedItems.includes(item)) {
          setSelectedItems(selectedItems.filter((i) => i !== item));
        } else {
          setSelectedItems([...selectedItems, item]);
        }
      };

    const items=[
        "TASK Beginner:Sit to Reach",
        "TASK Beginner:Stand and Reach",
        "TASK Beginner:Step Tap",
        "TASK Beginner:Stepping",
        "TASK Beginner:Sit to Stand",
        "TASK Advanced:Sit to Reach",
        "TASK Advanced:Stand and Reach",
        "TASK Advanced:Step Tap",
        "TASK Advanced:Stepping",
        "TASK Advanced:Sit to Stand",
        "PUSH PART1 ",
        "PUSH PART2 "




    
    
    ]
  return (
    <>
      {showModal ? (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex w-full items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4  sm:p-1 sm:pb-4">
                <div className="flex flex-col sm:flex-col " >
                  <div className="self-start flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" onClick={() => setShowModal(false)}>
                    <svg className="h-6 w-6 text-white-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="w-full mt-3  text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900"><input value={subject} placeholder='Enter your name here' onChange={(e) => setSubject(e.target.value)} /></h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                      <div className="w-full ">
                                <ul className="h-1/2 border rounded-md divide-y divide-gray-200">
                                    {items.map((item) => (
                                    <li
                                        key={item}
                                        className={`flex items-center py-2 px-4 ${
                                        selectedItems.includes(item) ? 'bg-blue-100' : ''
                                        }`}
                                        onClick={() => handleToggleItem(item)}
                                    >
                                        <input
                                        type="checkbox"
                                        checked={selectedItems.includes(item)}
                                       
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <span className="ml-3 text-gray-900">{item}</span>
                                    </li>
                                    ))}
                                </ul>
                                
                                </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleOpenEmailClient}>
                  Email my therapist! ({selectedItems.length})
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default function Example() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button type="button" className=" m-2  w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal(true)}>
        Send Email
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
