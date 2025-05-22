import { useState } from "react";

export const useContactForm = () => {
    
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const submitContact = async (formData) => {

        setLoading(true);
        setSuccessMessage(null)
        setError(null)

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong");
            setSuccessMessage(data.success || "Message Sent")
        } catch (error) {
            setErrorMessage(error.message || "Request Failed")
        } finally {
            setLoading(false)
        }
    }

    return {
        successMessage,
        loading,
        errorMessage,
        submitContact
    }
}
