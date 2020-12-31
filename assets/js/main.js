    var slide = document.querySelectorAll('.position');
    var slideIndex = 0;
    var durationSliderInterval = setInterval(nextSlide, 1500);

    function resetActive() {
        slide.forEach(item => {
            item.classList.remove("active");
        });
    }

    function resetInterval() {
        clearInterval(durationSliderInterval)
        durationSliderInterval = setInterval(nextSlide, 1500);
    }

    function changeSlide() {
        resetActive();
        slide[slideIndex].classList.add('active');
    }

    function nextSlide() {
        slideIndex < slide.length - 1 ? slideIndex++ : slideIndex = 0;
        changeSlide();
    }

    function previousSlide() {
        slideIndex > 0 ? slideIndex-- : slideIndex = slide.length - 1;
        changeSlide();
    }