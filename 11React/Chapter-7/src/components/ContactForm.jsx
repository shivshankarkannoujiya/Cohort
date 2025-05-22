import { useState } from "react";
import { useContactForm } from "../hooks/useContactForm.js";

export const ContactForm = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const { successMessage, errorMessage, loading, submitContact } =
        useContactForm();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submitContact(form);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name..."
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <textarea
                        value={form.message}
                        onChange={handleChange}
                        name="message"
                        id="message"
                        placeholder="Enter your message..."
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                </button>
            </form>

            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
};
