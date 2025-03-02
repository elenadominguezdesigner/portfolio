---
title: DeFive-Interior
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
        <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia nesciunt iure quae sint ducimus, iste dignissimos ab tenetur, nam voluptatibus aut minus non quaerat minima! Quidem rem earum culpa?</p>
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