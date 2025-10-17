# 🏡 Home Price Prediction Model

This repository contains a full-stack web application that predicts house prices based on various features using a machine learning model.

---

## 🎯 Project Overview

The goal of this project is to provide a reliable estimate of house prices for a given location, area, and number of rooms. The application is split into two parts: a **backend server** that hosts the trained machine learning model and a **client-side web interface** for user interaction.

The model is trained on historical real estate data and is designed to provide quick and accurate predictions, making it a valuable tool for buyers, sellers, and real estate professionals.

---

## ✨ Features

* **Location-Based Prediction:** Users can select the location from a dropdown menu for accurate, locality-specific pricing.
* **Input Fields:** Accepts key inputs like **Area (in square feet)**, **Number of Bedrooms**, and **Number of Bathrooms**.
* **Intuitive UI:** A clean and professional web interface built with HTML/CSS/JavaScript.

---

## 🛠️ Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Backend/Server** | **Python** | The core language used for the ML model and server logic. |
| **Server Framework** | **Flask (Inferred)** | A lightweight framework used to serve the ML model via a REST API. |
| **Machine Learning** | **Scikit-learn** | Used for training and deploying the Regression model (e.g., Linear Regression, Decision Tree). |
| **Data Handling** | **Pandas, NumPy** | Used for data cleaning, processing, and feature engineering. |
| **Frontend/Client** | **HTML, CSS, JavaScript** | Used to create the web application interface and handle user input. |

---

## 🚀 Steps to Run

Follow these steps to set up and run the application locally:

### **Prerequisites**

Ensure you have **Python 3.x** and **pip** installed.

1.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt 
    ```

### **Running the Application**

1.  Go to the server folder and run the Python server:
    ```bash
    cd server
    python server.py
    ```
2.  Go to the client folder and start a simple HTTP server:
    ```bash
    cd client
    python -m http.server 8000
    ```
3.  In your web browser, navigate to the following address:
    ```
    http://localhost:8000/app.html
    ```
