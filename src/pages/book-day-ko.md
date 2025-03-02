---
title: BOOK DAY KO
subtitle: BOOK DAY KO- Graphic Design
projectDate: "2020"
mainImage: "/images/index/image16.png"
styles: "book-day-ko.css"
gridImages:
  - /images/index/image16.png
  - /images/index/image16.png
  - /images/index/image16.png
  - /images/index/image16.png
  - /images/index/image16.png
  - /images/index/image16.png
---
<section class="section">
    <div class="details-container">
        <h1 class="title">BOOK DAY KO- Graphic Design</h1>
        <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia nesciunt iure quae sint ducimus, iste dignissimos ab tenetur, nam voluptatibus aut minus non quaerat minima! Quidem rem earum culpa?</p>
    </div>
    <div class="grid container">
        <div class="image-container">
            <img class="img" src="/images/index/image16.png" alt="">
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