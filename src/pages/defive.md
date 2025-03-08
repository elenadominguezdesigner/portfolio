---
title: DeFive-Interior
order: 6
subtitle: DeFive-Interior Design
projectDate: "2023"
mainImage: "/images/index/image6.jpg"
styles: "defive.css"
gridImagesOne:
  - "/images/defive/12.jpg"
  - "/images/defive/12.jpg"
  - "/images/defive/12.jpg"
  - "/images/defive/12.jpg"
  - "/images/defive/12.jpg"
  - "/images/defive/12.jpg"
  - "/images/defive/12.jpg"
  - "/images/defive/12.jpg"
  - "/images/defive/12.jpg"
  - "/images/defive/12.jpg"
  - "/images/defive/12.jpg"
  - "/images/defive/12.jpg"
gridImagesTwo:
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
  - "/images/defive/DF-1.png"
---
<section class="section">
    <div class="details-container">
        <h1 class="title">DeFive-Interior Design</h1>
        <p class="description">"Next Generation" is a project for the creation of a design university that will open its doors in 2030.DeFive is the school in which the five branches of design will be taught : graphic, fashion, object, space and 3D. This school is designed for the students of the future, who wants to reconcile their student life with their personal life, as well as to obtain sufficient knowledge to face the world of work.</p>
    </div>
    <div class="grid container">
        <div class="grid one">
            {% for image in gridImagesOne %}
                <div class="image-container">
                    <img class="img" src="{{ image }}" alt="">
                </div>
            {% endfor %}
        </div>
        <div class="video"></div>
        <div class="grid two">
            {% for image in gridImagesTwo %}
                <div class="image-container">
                    <img class="img" src="{{ image }}" alt="">
                </div>
            {% endfor %}
        </div>
    </div>
</section>