import React from "react";
import "./projects.css";
import Typewriter from "../utils/useTypewriter";

function Projects() {
  return (
    <div id="container">
      <h1>
        <Typewriter text="Projects:" speed="60" />
      </h1>
      <div id="grid">
        <article class="card">
          {/* Project Title */}
          <h2>Sayd E-Commerce Store</h2>

          {/* Project Image */}
          <img
            src="https://private-user-images.githubusercontent.com/122020846/348936304-ee8c68f4-41bc-4fae-8a2f-782cfa258c5a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjIzMDUwMzYsIm5iZiI6MTcyMjMwNDczNiwicGF0aCI6Ii8xMjIwMjA4NDYvMzQ4OTM2MzA0LWVlOGM2OGY0LTQxYmMtNGZhZS04YTJmLTc4MmNmYTI1OGM1YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDczMFQwMTU4NTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMWRmNWEwYTVjYWUxMDNmOTliOWE5N2Q0MDAwNGM1MzA5ZGFmZTlkNjI0YTkwYWRmZmVhYjcxNjkzZWZiNmVkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9._AKNy2IIlQUh7mTNRRYg291bPSmox40YNI9-26AJHcs"
            alt="React"
          />

          {/* Project Description */}
          <p>
            This project aimed to deliver a scalable, user-friendly online
            shopping experience. Developed a secure e-commerce website using C#,
            .NET Core and Entity Framework. <br />
            Key features include:
          </p>

          {/* Key Features List */}
          <ul>
            <li>
              <strong>User Authorization: </strong>
              <br />
              Secure login and registration utilizing .NET Core's Identity
              framework.
            </li>
            <li>
              <strong>Entity Framework Integration: </strong>
              <br />
              Efficient data management
            </li>
            <li>
              <strong>Product Management: </strong>
              <br />
              Admin tools for product handling.
            </li>
            <li>
              <strong>Shopping Cart: </strong>
              <br />
              Easy item addition and checkout.
            </li>
            <li>
              <strong>Order Processing: </strong>
              <br />
              Streamlined order placement and tracking.
            </li>
          </ul>

          {/* Link to GitHub Repository */}
          <a href="https://github.com/Sayden945/E-Commerce-Project">
            Link to GitHub
          </a>
        </article>

        <article class="card">
          <h2>National Car Dealerships</h2>
          <p>
            A website developed to allow a user to view a chain of car
            dealerships with the ability to read and submit reviews for each
            dealer location, as well as look up stock of different car makes and
            models.
          </p>
          <ul>
            <li>
              <strong>Django Application: </strong> <br />A website where users
              interacted through a web browser, providing microservices for cars
              and dealers.
            </li>
            <li>
              <strong>SQLite Database: </strong> <br />
              Stored Car Make and Car Model data.
            </li>
            <li>
              <strong>Express Mongo Service: </strong> <br />A Dockerized
              service managing dealers and reviews, providing various endpoints.
            </li>
            <li>
              <strong>Django Proxy Service: </strong> <br />
              Facilitated interaction between the Django application and the
              Dealership and Reviews Service.
            </li>
            <li>
              <strong>Sentiment Analyzer Service: </strong> <br />
              Deployed on IBM Cloud Code Engine, analyzed review sentiments, and
              integrated with the Django application via the proxy service.
            </li>
          </ul>

          <a href="https://github.com/Sayden945/Car-Dealership-Platform">
            Link to GitHub
          </a>
          <p>Screenshots or demo videos</p>
        </article>

        <article className="card">
          {/* Project Title */}
          <h2>CNN Skin Cancer Detection</h2>
          {/* Description of the CNN Skin Cancer Detection project */}
          <p>
            A machine learning model trained on the HAM10000 dataset to detect
            benign or malignant skin lesions. This project was created using a
            Convolutional Neural Network with Support Vector Machine.
          </p>
          {/* Placeholder for technologies used */}
          <p>Technologies used</p>
          {/* Placeholder for link to live demo */}
          <p>Link to live demo (if applicable)</p>
          {/* Link to the GitHub repository for the CNN Skin Cancer Detection project */}
          <a href="https://github.com/Sayden945/CNN-Skin-Cancer-Detection">
            Link to GitHub
          </a>
        </article>
      </div>
    </div>
  );
}

export default Projects;
