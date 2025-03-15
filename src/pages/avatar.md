---
title: AVATAR
order: 17
subtitle: AVATAR THE WAY OF WATER-Graphic Design
projectDate: "2021"
mainImage: "/images/index/image17.jpg"
styles: "avatar.css"
gridImages:
  - /images/index/image17.jpg
  - /images/index/image17.jpg
  - /images/index/image17.jpg
---
<section class="section">
    <div class="details-container">
        <h1 class="title">AVATAR THE WAY OF WATER-Graphic<br>Design</h1>
        <p class="description">Advertising posters created for the promotion of the movie "Avatar the way of water"</p>
    </div>
    <div class="grid container">
        {% for image in gridImages %}
            <div class="image-container">
                <img class="img" src="{{ image }}" alt="">
            </div>
        {% endfor %}
    </div>
</section>