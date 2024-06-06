
        let slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        const slideCount = slides.length;

        function showSlide(n) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (n + slideCount) % slideCount;
            slides[currentSlide].classList.add('active');

            const offset = -((currentSlide - 2) * (35));
            document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

            for (let i = 0; i < slides.length; i++) {
                if (i !== currentSlide) {
                    
                } else {
                    slides[i].style.filter = 'none';
                }
            }
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        // Clear interval to stop auto-slide change when navigating manually
        let intervalId = setInterval(nextSlide, 3000);

        function resetInterval() {
            clearInterval(intervalId);
            intervalId = setInterval(nextSlide, 3000);
        }

