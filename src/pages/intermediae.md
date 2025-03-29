---
title: INTERMEDIAE-Fashion
order: 11
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
        <p class="description">Spring Summer Collection 2022<br><br>Intermediate like the journey between the straight and the curved. This comes from the inspiration of a common round cake. A very spongy sweet, which has a very characteristic rounded shape. Once the cake is cut, there is the fusion between a clean straight cut and a round shape. A very architectural concept, in which pure shapes and volumes are played with.</p>
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