import { useState } from "react";

const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState<number | undefined>(undefined);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [ageError, setAgeError] = useState("");

    const [success, setSuccess] = useState(false);

    const validateName = (val: string) => {
        if (!val) return "Name is required";
        if (val.length < 3) return "Name must be at least 3 characters";
        return "";
    };

    const validateEmail = (val: string) => {
        if (!val) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) return "Email is not valid";
        return "";
    };

    const validateAge = (val: number | undefined) => {
        if (val === undefined) return "Age is required";
        const numAge = Number(val);
        if (Number.isNaN(numAge) || numAge < 18) return "Age must be a number and at least 18";
        return "";
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nErr = validateName(name);
        const eErr = validateEmail(email);
        const aErr = validateAge(age);

        setNameError(nErr);
        setEmailError(eErr);
        setAgeError(aErr);

        if (!nErr && !eErr && !aErr) {
            setSuccess(true);

            setName("");
            setEmail("");
            setAge(undefined);
        } else {
            setSuccess(false);
        }
    };


    return (
        <div>
            <h2>User Registration</h2>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => {
                            const val = e.target.value;
                            setName(val);
                            setNameError(validateName(val));
                        }}
                    />
                    {nameError && <div style={{ color: "red" }}>{nameError}</div>}
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            const val = e.target.value;
                            setEmail(val);
                            setEmailError(validateEmail(val));
                        }}
                    />
                    {emailError && <div style={{ color: "red" }}>{emailError}</div>}
                    <input
                        type="number"
                        placeholder="Age"
                        value={age || ""}
                        onChange={(e) => {
                            const val = e.target.value;
                            setAge(val ? Number(val) : undefined);
                            setAgeError(validateAge(val ? Number(val) : undefined));
                        }}
                    />
                    {ageError && <div style={{ color: "red" }}>{ageError}</div>}

                    <button type="submit">Register</button>

                    {success && <div style={{ color: "green" }}>Registration successful!</div>}    
                </div>
                
            </form>
        </div>
    )
}

export default RegistrationForm;