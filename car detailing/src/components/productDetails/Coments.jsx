import { useState, useEffect } from "react";

export default function Comments() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState("");
    const [submittedReviews, setSubmittedReviews] = useState([]);

    // Зареждане на запазените коментари от localStorage при първоначално зареждане
    useEffect(() => {
        const savedReviews = localStorage.getItem("submittedReviews");
        if (savedReviews) {
            setSubmittedReviews(JSON.parse(savedReviews));
        }
    }, []);

    // Запазване на коментарите в localStorage при всяка промяна
    useEffect(() => {
        localStorage.setItem("submittedReviews", JSON.stringify(submittedReviews));
    }, [submittedReviews]);

    const handleInputChanges = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else {
            setReview(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            name,
            email,
            review,
            timestamp: new Date().toLocaleString(), // Добавяне на текущо време
        };

        setSubmittedReviews([...submittedReviews, newReview]);

        setName("");
        setEmail("");
        setReview("");
    };

    return { handleSubmit, handleInputChanges, submittedReviews, name, email, review };
}