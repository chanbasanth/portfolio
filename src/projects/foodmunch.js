import React from "react";
import './foodmunch.css'; 
import { useNavigate } from "react-router-dom";

const FoodMunch = () => {
    const navigate = useNavigate();
    return (
        <div className="food-container mt-4">
            <div className="food-card">
                <h1 className="mb-3">Food Munch – Responsive Food Delivery Website</h1>

                <p>
                    This is a <strong>frontend-only</strong> responsive food delivery website built using HTML, CSS, Bootstrap, and JavaScript. 
                    It showcases modern UI design and mobile-first development principles.
                </p>

                <p>
                    The project features multiple sections such as a banner, services, menu, healthy food section, delivery & payment info, 
                    customer appreciation, and footer – all styled using custom CSS and Bootstrap 4.
                </p>

                <h4>Features:</h4>
                <ul>
                    <li>Responsive layout using Bootstrap 4 and Flexbox/Grid</li>
                    <li>Banner with CTA buttons and promotional message</li>
                    <li>Reusable cards for "Why Choose Us" and "Explore Menu"</li>
                    <li>Modal popups and interactive UI elements</li>
                    <li>Clean typography and consistent color scheme</li>
                    <li>Social media section and professional footer</li>
                </ul>

                <h4>Tech Stack:</h4>
                <p>HTML, CSS, Bootstrap 4, JavaScript</p>

                <h4>GitHub:</h4>
                <a href="https://chandu2605.ccbp.tech/" target="_blank" rel="noopener noreferrer">
                    github.com/chanbasanth/food-munch
                </a>
                <div><button onClick={() => navigate('/')} className="btn btn-secondary mt-3">
                 ← Back to Home
                </button></div>
            </div>
        </div>
    );
};

export default FoodMunch;
