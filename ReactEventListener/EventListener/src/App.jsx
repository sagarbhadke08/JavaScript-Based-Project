import { useState } from 'react';
import './App.css';


const messages = [
  'Learn React', 'Apply for New Job', 'Earn New Income'
]
export default function App() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);


  function next() {
    if (step < 3) setStep(step + 1);
  }

  function previous() {
    if (step > 1) setStep(step - 1);
  }

  function changeBackGround() {
    style = " backgroundColor: '#7950f2', color: '#fff'";
  }
  return (
    <div>
      <Header></Header>
      <div className="close" onClick={() => setIsOpen(!isOpen)}>X</div>

      {
        isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
              <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
              <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
            </div>
            <p className="message">Step {step}:{messages[step - 1]}</p>

            <div className="buttons">
              <button onClick={() => next()} style={{ backgroundColor: '#7950f2', color: '#fff' }}>Next</button>
              <button onClick={() => previous()} style={{ backgroundColor: '#7950f2', color: '#fff' }}>Previous</button>
            </div>
          </div>
        )
      }

    </div>
  );
}