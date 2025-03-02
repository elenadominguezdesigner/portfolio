---
title: SCREWLESS
subtitle: SCREWLESS ENTRANCE CABINET-Furniture Design
projectDate: "2022"
mainImage: "/images/index/image14.png"
styles: "screwless.css"
gridImages:
  - /images/index/image14.png
  - /images/index/image14.png
  - /images/index/image14.png
  - /images/index/image14.png
---
<section class="section">
    <div class="details-container">
        <h1 class="title">SCREWLESS ENTRANCE CABINET-Furniture<br>Design</h1>
        <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia nesciunt iure quae sint ducimus, iste dignissimos ab tenetur, nam voluptatibus aut minus non quaerat minima! Quidem rem earum culpa?</p>
    </div>
    <div class="grid container">
        {% for image in gridImages %}
            <div class="image-container">
                <img class="img" src="{{ image }}" alt="">
            </div>
        {% endfor %}
    </div>
</section>