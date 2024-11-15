import React, { useState } from 'react'

function Faq() {
    const [isOpen,setIsOpen] = useState(null)
    const handleToggle = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };
  return (
    <div className='text-left bg-black text-slate-400'>
      <h2 className='p-3 text-center text-3xl bg-slate-950 py-5'>
        Frequently Asked Questions (FAQ)
      </h2>
      <div>

        <div>
            <button className='p-3 text-xl font-mono font-extralight' onClick={() => handleToggle(0)}>
             -->  How do i create a Quiz?
            </button>
            <div 
                    className={`${isOpen === 0 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} 
                    overflow-hidden transition-all duration-500 ease-in-out mt-2 px-5 py-3 bg-gray-900 rounded-md`}
                    style={{ transitionProperty: "max-height, opacity" }}
                >
                    To create a quiz, simply log in to the platform via "I am Student" or "I am Teacher" navigate to the "Create a Quiz" section. 
                    You'll be prompted to  add questions, set correct answers, and customize your quiz. 
                    Once you're done, you can save your quiz and share it with others!
            </div>
        </div>
        <div>
            <button className='p-3 text-xl font-mono font-extralight' onClick={() => handleToggle(1)}>
              -->  How can I track quiz results?
            </button>
            <div 
                    className={`${isOpen === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} 
                    overflow-hidden transition-all duration-500 ease-in-out mt-2 px-5 py-3 bg-gray-900 rounded-md`}
                    style={{ transitionProperty: "max-height, opacity" }}
                >
                    After your quiz has been completed, you can view detailed results for each participant, 
                    including their answers, scores, and the time taken. These results can help you analyze the effectiveness 
                    of your quiz and identify areas for improvement.
            </div>
        </div>
        <div>
            <button className='p-3 text-xl font-mono font-extralight' onClick={() => handleToggle(2)}>
            -->  What types of questions can I add?
            </button>
            <div 
                    className={`${isOpen === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} 
                    overflow-hidden transition-all duration-500 ease-in-out mt-2 px-5 py-3 bg-gray-900 rounded-md`}
                    style={{ transitionProperty: "max-height, opacity" }}
                >
                   You can add a variety of question types to your quiz, including: <br />
                   Multiple Choice: Select one or more correct answers from a list of options. <br />
                   True/False: A simple yes or no type of question.
            </div>
        </div>
        <div>
            <button className='p-3 text-xl font-mono font-extralight' onClick={() => handleToggle(3)}>
            -->  How can I share my quiz with others?
            </button>
            <div 
                    className={`${isOpen === 3 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} 
                    overflow-hidden transition-all duration-500 ease-in-out mt-2 px-5 py-3 bg-gray-900 rounded-md`}
                    style={{ transitionProperty: "max-height, opacity" }}
                >
                    Once your quiz is created, you can easily share it through a unique joining code. 
                    it's quick and easy to get your quiz out to your audience.
            </div>
        </div>
       
   
      </div>

    </div>
  )
}

export default Faq
