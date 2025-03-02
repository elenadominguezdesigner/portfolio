---
title: BUBBLEBANK
subtitle: BUBBLEBANK-Interior Design
projectDate: "2021"
mainImage: "/images/index/image10.png"
styles: "bubblebank.css"
gridImages:
  - /images/index/image10.png
  - /images/index/image10.png
  - /images/index/image10.png
  - /images/index/image10.png
  - /images/index/image10.png
---
<section class="section">
    <div class="details-container">
        <h1 class="title">BUBBLEBANK-Interior Design</h1>
        <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia nesciunt iure quae sint ducimus, iste dignissimos ab tenetur, nam voluptatibus aut minus non quaerat minima! Quidem rem earum culpa?</p>
    </div>
    <div class="grid container">
        <div class="image-container">
            <img class="img" src="/images/index/image10.png" alt="">
        </div>
        <div class="image-container">
            <img class="img" src="/images/index/image10.png" alt="">
        </div>
        <div class="grid one">
            {% for image in gridImages %}
                <div class="image-container">
                    <img class="img" src="{{ image }}" alt="">
                </div>
            {% endfor %}
        </div>
    </div>
</section>