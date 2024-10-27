'use client';
import  { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, useState } from 'react'

export default function Question( {question, options, correctAnswer}:any) {
    const [selectedAnswer, setSelectedAnswer] = useState(null); 

    const handleAnswerSelect = ({answer}:any) => {

        setSelectedAnswer(answer);
    
      };
  console.log("options is " +options);
  return (
    <div>
        <p>{question}</p>
            {options.map((option: any) => (

                <div>
                    <input 

                        type="radio" 

                        id={`option-${2}`} 

                        name="answer" 

                        value={option} 

                        checked={selectedAnswer === option} 

                        onChange={() => handleAnswerSelect(option)} 

                        />

                    <label htmlFor={`option-${2}`}>{option}</label>

                </div>
            ))}
    </div>
  );
}
