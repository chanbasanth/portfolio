import React from "react";
import './todolist.css'; 
import { useNavigate } from 'react-router-dom';

const Todo = () => {
     const navigate = useNavigate();
    return (
        <div className="todo-container mt-4">
            <div className="todo-card">
                <h1 className="mb-3">Todo List REST API (Spring Boot + H2 Database)</h1>

                <p>
                    This is a <strong>backend-only</strong> Todo List application built using Spring Boot. 
                    It provides RESTful endpoints for managing tasks and demonstrates clean API design 
                    with JPA and Hibernate integration.
                </p>

                <p>
                    The main goal of this project was to create a lightweight and well-structured backend 
                    that supports full CRUD operations and uses an in-memory H2 database for development 
                    and testing.
                </p>

                <h4>Features:</h4>
                <ul>
                    <li>RESTful APIs for Create, Read, Update, Delete (CRUD) operations</li>
                    <li>Spring Boot layered architecture (Controller, Service, Repository)</li>
                    <li>Spring Data JPA &amp; Hibernate ORM</li>
                    <li>In-memory H2 Database</li>
                    <li>Validations and exception handling</li>
                    <li>Ready for integration with any frontend client</li>
                </ul>

                <h4>Tech Stack:</h4>
                <p>Java, Spring Boot, Hibernate, JPA, H2 Database, REST API</p>

                <h4>GitHub:</h4>
                <a href="https://github.com/chanbasanth/todo-backend" target="_blank" rel="noopener noreferrer">
                    github.com/chanbasanth/todo-backend
                </a>
                <div><button onClick={() => navigate('/')} className="btn btn-secondary mt-3">
                 ← Back to Home
                </button></div>
            </div>
        </div>
    );
};

export default Todo;
