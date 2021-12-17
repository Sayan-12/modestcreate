// window.onscroll = function() {myFunction2()};

// // var navbar = document.getElementById("main_menu");
// var navbar2 = document.querySelector(".c-tabs-nav");
// // var sticky2 = navbar.offsetTop;
// var sticky = navbar2.offsetTop;



// function myFunction2() {
//     console.log(window.pageYOffset);
//   if (window.pageYOffset+68 >= sticky) {

//     navbar2.classList.add("sticky");
//   } else {
//     navbar2.classList.remove("sticky");
//   }
// }


// function Tabs(options){

// 	var tabs = document.querySelector(options.el);
// 	var initCalled = false;
// 	var tabNavigation = tabs.querySelector(".c-tabs-nav");
// 	var tabNavigationLinks = tabs.querySelectorAll(".c-tabs-nav__link");
// 	var tabContentContainers = tabs.querySelectorAll(".c-tab");

// 	var marker = options.marker ? createNavMarker() : false;

// 	var activeIndex = 0;

//   function init(){
// 		if (!initCalled){
// 			initCalled = true;

// 			for (var i = 0; i < tabNavigationLinks.length; i++){
//     			var link = tabNavigationLinks[i];
//     			clickHandlerSetup(link, i)
//     		}

//     		if (marker){
//     			setMarker(tabNavigationLinks[activeIndex]);
//     		}
// 		}
// 	}

// 	function clickHandlerSetup(link, index){
//     	link.addEventListener("click", function(e){
//     		e.preventDefault();
//     		goToTab(index);
//     	})
//     }

//     function goToTab(index){
//     	if (index >= 0 && index != activeIndex && index <= tabNavigationLinks.length){
//     		tabNavigationLinks[activeIndex].classList.remove('is-active');
//     		tabNavigationLinks[index].classList.add('is-active');

//     		tabContentContainers[activeIndex].classList.remove('is-active');
//     		tabContentContainers[index].classList.add('is-active');

//     		if (marker){
//     			setMarker(tabNavigationLinks[index]);
//     		}

//     		activeIndex = index;
//     	}
//     }

//     function createNavMarker(){
//     	var marker = document.createElement("div");
//     	marker.classList.add("c-tab-nav-marker");
//     	tabNavigation.appendChild(marker);
//     	return marker;
//     }

//     function setMarker(element){
//         marker.style.left = element.offsetLeft +"px";
//         marker.style.width = element.offsetWidth + "px";
//     }

//     return {
//     	init: init,
//     	goToTab: goToTab
//     }
// }


// var m = new Tabs({
// 	el: "#tabs",
// 	marker: true
// });

// m.init();


'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;

window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);

}








// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }


// var box = document.getElementById('big_div');

// console.log(1);

// document.addEventListener('scroll', function () {
//     let msg = isInViewport(box);
//     console.log(msg);
// }, {
//     passive: true
// });


function showMenu() {
    var h = document.getElementsByClassName("menu")[0].style.height;
    var items = document.getElementById("menuItems");
    if (h == "100vh") {
        document.getElementsByClassName("menu")[0].style.height = "0";
      items.style.opacity = "0";
        document.getElementById("animate_bar2").style.width = "100%";
        document.getElementById("animate_bar1").style.width = "60%";
        document.getElementById("animate_bar3").style.width = "60%";
    }
    else {
        document.getElementsByClassName("menu")[0].style.height = "100vh";
        items.style.opacity = "1";
        document.getElementById("animate_bar2").style.width = "60%";
        document.getElementById("animate_bar1").style.width = "100%";
        document.getElementById("animate_bar3").style.width = "100%";
    }
}
