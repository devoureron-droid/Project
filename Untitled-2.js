let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const slideCounter = document.getElementById('currentSlide');

        function showSlide(n) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (n + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
            slideCounter.textContent = currentSlide + 1;

            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
        }

        function changeSlide(direction) {
            showSlide(currentSlide + direction);
        }

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' && currentSlide > 0) {
                changeSlide(-1);
            } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
                changeSlide(1);
            }
        });

        // Initialize
        showSlide(0);