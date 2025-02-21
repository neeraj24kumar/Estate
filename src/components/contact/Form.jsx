import React, { useState, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const [fullNameTouched, setFullNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);


    const validateForm = useCallback(() => {
        let isValid = true;

        // Full Name validation (only letters or alphabets allowed)
        if (!/^[A-Za-z\s]+$/.test(fullName)) {
            setFullNameError('Full Name must contain only letters and spaces.');
            isValid = false;
        } else {
            setFullNameError('');
        }

        // Email validation (@gmail.com format)
        if (!/^[a-zA-Z0-9._-]+@gmail\.com$/.test(email)) {
            setEmailError('Email must be in @gmail.com format.');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Message validation (not empty)
        if (message.trim() === '') {
            setMessageError('Message cannot be empty.');
            isValid = false;
        } else {
            setMessageError('');
        }

        setIsFormValid(isValid);
    }, [fullName, email, message]);

    useEffect(() => {
        validateForm();
    }, [fullName, email, message, validateForm]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormValid) {
            // Prevent submission if the form is not valid. Errors should already be showing.
            return;
        }

        // Log input values to console
        console.log('Full Name:', fullName); //Logs the value of Full Name [1][7]
        console.log('Email:', email); //Logs the value of email [1][7]
        console.log('Message:', message); //Logs the value of message [1][7]

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: fullName,
            from_email: email,
            to_name: 'Mart Villa', // Or your desired recipient name
            message: message,
        };

        // Send the email using EmailJS
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setFullName('');
                setEmail('');
                setMessage('');
                setFullNameError('');
                setEmailError('');
                setMessageError('');
                setIsFormValid(false);
                setFullNameTouched(false);
                setEmailTouched(false);
                setMessageTouched(false);
                alert('Form Submitted, Thank You for Contacting MartVilla!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('An error occurred while submitting the form. Please try again.');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="pt-10 pb-8">
            <div className="text-center">
                <h1 className="mx-auto sub-heading">Contact</h1>
                <h1 className="heading">
                    Contact Us
                </h1>
            </div>
            <div className="flex-col gap-4 flex-align-center sm:flex-row">
                <div className="flex-1 w-full">
                    <p>Full Name</p>
                    <input
                        type="text"
                        className={`w-full input ${fullNameError && fullNameTouched ? 'border-red-500' : ''}`}
                        placeholder="Full Name.."
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        onBlur={() => setFullNameTouched(true)}
                    />
                    {fullNameError && fullNameTouched && (
                        <p className="text-red-500 text-xs italic">{fullNameError}</p>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <p>Email Address</p>
                <input
                    type="email"
                    className={`w-full input ${emailError && emailTouched ? 'border-red-500' : ''}`}
                    placeholder="Email Address.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                />
                {emailError && emailTouched && (
                    <p className="text-red-500 text-xs italic">{emailError}</p>
                )}
            </div>
            <div className="mt-4">
                <p>Message</p>
                <textarea
                    rows={4}
                    className={`w-full input ${messageError && messageTouched ? 'border-red-500' : ''}`}
                    placeholder="Message.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={() => setMessageTouched(true)}
                />
                {messageError && messageTouched && (
                    <p className="text-red-500 text-xs italic">{messageError}</p>
                )}
            </div>
            <div className="mt-4 flex-center-center">
                <button
                    className={`btn btn-primary ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'
                        }`}
                    type="submit"
                    disabled={!isFormValid}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Form;

