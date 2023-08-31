import './Contactus.css';
import React, { useState } from 'react';

export default function Contactus() {
    const [type, setType] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [subjectError, setSubjectError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [typeError, setTypeError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    const handleSubmit = () => {
        let formIsValid = true;

        if (subject === '') {
            setSubjectError(true);
            formIsValid = false;
        } else {
            setSubjectError(false);
        }

        if (email === '') {
            setEmailError(true);
            formIsValid = false;
        } else if (!isValidEmail(email)) {
            setEmailError(true);
            setInvalidEmail(true);
            formIsValid = false;
        } else {
            setEmailError(false);
            setInvalidEmail(false);
        }

        if (type === '') {
            setTypeError(true);
            formIsValid = false;
        } else {
            setTypeError(false);
        }

        if (message === '') {
            setMessageError(true);
            formIsValid = false;
        } else {
            setMessageError(false);
        }

        if (formIsValid) {
            setType('');
            setSubject('');
            setEmail('');
            setMessage('');
        }
    };

    const isValidEmail = (value) => {
        // Regex pattern for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    return (
        <div>
            <div className="contact-us">
                <h2 className="c-title">تواصل معنا</h2>
            </div>
            <div className={`type-m ${typeError ? 'error' : ''}`}>
                <select className="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">اختر نوع الرسالة</option>
                    <option value="complaint">شكوى</option>
                    <option value="suggestion">اقتراح</option>
                    <option value="query">استفسار</option>
                </select>
            </div>
            {typeError && <span className="error-message">يرجى اختيار نوع الرسالة</span>}
            <input
                type="text"
                className={`type-m ${subjectError ? 'error' : ''}`}
                placeholder="عنوان الرسالة"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            {subjectError && <span className="error-message">يرجى ملء حقل العنوان</span>}
            <input
                type="email"
                className={`type-m ${emailError ? 'error' : ''}`}
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
                <span className="error-message">
                    {invalidEmail ? 'يرجى إدخال بريد إلكتروني صحيح' : 'يرجى ملء حقل البريد الإلكتروني'}
                </span>
            )}
            <textarea
                className={`message ${messageError ? 'error' : ''}`}
                placeholder="نص الرسالة"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            {typeError && <span className="error-message">يرجى ملء حقل الرسالة</span>}

            <button className="send-m" onClick={handleSubmit}>
                إرسال
            </button>
        </div>
    );
}