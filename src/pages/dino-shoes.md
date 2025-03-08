---
title: DINOSHOES-Collage and Illustration Design
subtitle: DINOSHOES-Collage and Illustration Design
projectDate: "2024"
mainImage: "/images/index/image15.jpg"
styles: "dino-shoes.css"
gridImages:
  - /images/index/image15.jpg
  - /images/index/image15.jpg
  - /images/index/image15.jpg
  - /images/index/image15.jpg
  - /images/index/image15.jpg
  - /images/index/image15.jpg
  - /images/index/image15.jpg
---
<section class="section">
    <div class="details-container">
        <h1 class="title">DINOSHOES-Collage and Illustration<br>Design</h1>
        <p class="description">Shoes collection publicity, vintage collage edition.</p>
    </div>
    <div class="grid container">
        {% for image in gridImages %}
            <div class="image-container">
                <img class="img" src="{{ image }}" alt="">
            </div>
        {% endfor %}
    </div>
</section>