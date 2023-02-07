$('.hamburger-group').on('click', function () {
    $(this).next().stop().slideToggle()
})


function navInit() {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("#header").addClass("stickyadd");
            $("#toTop").fadeIn();

        } else {
            $("#header").removeClass("stickyadd");
            $("#toTop").fadeOut();
        }
    });
}

navInit();




function galleryInit() {



    const widthG = document.querySelector('#gallery').getBoundingClientRect().width;

    const getHeigtRow = () => (widthG > 1024) ? (widthG - 60) / 3 * 2 / 3 : (widthG) / 3 * 2;
    const getHeightG = (n) => {
        if (widthG > 768) {
            return (n > 3) ? (heightRow * 2 + 30) : heightRow
        } else {
            return (heightRow + 30) * n;
        }
    }
    const getPosX = (i) => (widthG > 1024) ? (i % 3) * (widthG - 60) / 3 + (i % 3) * 30 + 'px' : 0;
    const getPosY = (i) => (widthG > 1024) ? (Math.floor(i / 3) * heightRow + Math.floor(i / 3) * 30 + 'px') : (i * (heightRow + 30) + 'px')


    const heightRow = getHeigtRow()

    const workItems = document.querySelectorAll('.work_item:not(.hide)')








    $('#gallery').height(getHeightG(workItems.length));

    for (let i = 0; i < workItems.length; i++) {
        workItems[i].style.left = getPosX(i)
        workItems[i].style.top = getPosY(i);
    }


    $('.tags button').on('click', function () {



        $(this).addClass('active').parent().siblings().children().removeClass('active')
        const keyword = $(this).data('filter');
        const filtered = document.querySelectorAll(`#gallery .work_item.${keyword}`);

        const others = document.querySelectorAll(`#gallery .work_item:not(.${keyword})`);

        $('#gallery').height(getHeightG(filtered.length))

        filtered.forEach((el, i) => {

            $(el).removeClass('hide').css({
                left: getPosX(i), top: getPosY(i)
            })
        })

        $(others).addClass('hide')
    })


}


galleryInit();

window.addEventListener('resize', galleryInit)




function sectionObserverInit () {

    let options = { rootMargin: '0px', threshold: .3 }
    let observer = new IntersectionObserver(observerCallback, options);
    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(`#nav ul li`).has(`a[href="#${entry.target.id}"]`).addClass('active').siblings().removeClass('active')
    
            }
        }
        );
    };
    
    
    document.querySelectorAll('section').forEach((i) => { if (i) { observer.observe(i); } });
}

sectionObserverInit()








$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200, 'easeInQuint');
});







$('#slider .slider_inner').slick(
    {
        autoplay: true, autoplaySpeed: 4000, dots: true,
        arrows: false,
    }
)


/*  jQ 슬라이더

function slider() {

    let count = 0;


    function moveSlide() {


        let posX = count * -100 + "%"

        $('#slider .slider_inner').animate({ left: posX }, 800)
    }

    function changeDots() {
        $(`#slider .dots li:eq(${count})`).addClass('active').siblings().removeClass('active')

    }


    function countUp() {
        if (count < 2) {
            count++;
            moveSlide()
            changeDots()

        } else {
            count = 0;
            moveSlide()
            changeDots()
        }

    }



    let timer = setInterval(countUp, 4000)

    $('#slider .dots li').on('click', function () {

        i = $(this).index();
        count = i;

        moveSlide()
        changeDots($(this))


        clearInterval(timer)
        timer = setInterval(countUp, 4000)

        return false;

    })



}


slider();


 */

