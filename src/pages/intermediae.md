---
title: INTERMEDIAE-Fashion
subtitle: INTERMEDIAE-Fashion Design
projectDate: "2022"
mainImage: "/images/index/image11.jpg"
styles: "intermediae.css"
gridImages:
  - /images/intermediae/I-1.jpg
  - /images/intermediae/I-2.JPG
  - /images/intermediae/I-3.jpg
  - /images/intermediae/I-4.jpg
---
<section class="section">
    <div class="details-container">
        <h1 class="title">INTERMEDIAE-Fashion<br>Design</h1>
        <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia nesciunt iure quae sint ducimus, iste dignissimos ab tenetur, nam voluptatibus aut minus non quaerat minima! Quidem rem earum culpa?</p>
    </div>
    <div class="grid container">
        <div class="grid one">
            {% for image in gridImages %}
                <div class="image-container">
                    <img class="img" src="{{ image }}" alt="">
                </div>
            {% endfor %}
        </div>
    </div>
</section>