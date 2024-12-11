document.addEventListener("DOMContentLoaded", function() {
    const duration = 1000; // Animation duration in milliseconds
    const columns = [
        { element: document.getElementById('column1'), endValue: 4058 },
        { element: document.getElementById('column2'), endValue: 6546 },
        { element: document.getElementById('column3'), endValue: 8745 }
    ];

    function animateValue(element, start, end, duration) {
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const progress = currentTime - startTime;
            const value = Math.min(start + (progress / duration) * (end - start), end);
            element.textContent = Math.floor(value);
            if (progress < duration) {
                requestAnimationFrame(animation);
            } else {
                element.textContent = end;
            }
        }

        requestAnimationFrame(animation);
    }

    columns.forEach(column => {
        animateValue(column.element, 0, column.endValue, duration);
    });
});


// testomonals

// script.js

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const newTransform = -currentIndex * 100 + '%';
    document.querySelector('.carousel').style.transform = `translateX(${newTransform})`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the carousel
showSlide(currentIndex);
