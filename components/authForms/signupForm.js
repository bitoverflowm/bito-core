import { useState, useEffect } from "react";
import { BsEaselFill } from "react-icons/bs";



const SignUpForm = ({
    subPlan  = 'ruby'
}) => {    
    const [errorMessage, setErrorMessage] = useState('')
    const [step, setStep] = useState(1)
    const [stepRender, setStepRender] = useState(<div>loading...</div>);

    const onSubmit = () => {
        setStep(step + 1)
        return null;
    }

    const testPlans = {
        'gold': 'price_1LA225ILjX7EMe6xZsUiNe70',
        'silver': 'price_1LA20oILjX7EMe6xSo2vOHcO',
        'ruby': 'price_1LA1yJILjX7EMe6xA9OhcKWT'
    }

    return (
        <div>
            {step === 1 &&
                <form onSubmit={onSubmit}>
                    Lets start with your contact info:
                    <div className="flex border-black border-2 rounded-full p-3 mt-3">
                        <input className="flex-auto" type="email" name="email" required placeholder="Email"/>
                        <div className="flex-none submit bg-blue-700 text-white rounded-full">
                            <button className="font-bold p-4" type="submit">Submit</button>
                        </div>
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </form>}

            {step === 2 &&
                <form onSubmit={onSubmit}>
                    <div className="flex border-black border-2 rounded-full p-3 mt-3">
                        Select your plan
                    </div>
                    <div className="flex border-black border-2 rounded-full p-3 mt-3">
                        Enter your payment information
                    </div>
                    <div className="flex-none submit bg-blue-700 text-white rounded-full">
                        <button className="font-bold p-4" type="submit">Go!</button>
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </form>}
        </div>            
    )
}

export default SignUpForm