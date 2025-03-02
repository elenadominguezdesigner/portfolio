---
title: AVATAR
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