---
title: BUBBLEBANK
order: 9
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
        <p class="description">Bubble Bank for GEN Z.This bank offers maximum security to its clients, as well as personalized advice for any type of doubt and management.“Feel protected, stay in your bubble”</p>
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