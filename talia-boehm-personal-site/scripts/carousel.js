
$(document).ready(function () {
  $(".slide").addClass("hidden");
  $("#slide1").removeClass("hidden");
  $(".currentDot").addClass("hidden");

  $("#dot1").addClass("hidden");
// add dot one special dot (remove hidden)
  $("#dot1Clicked").removeClass("hidden");
});

const SLIDES = $(".slide");
const LARGEDOTS = $(".currentDot");
const SMALLDOTS = $(".dotDefault");

function nextSlide() {
  let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".slide:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  let currentLargeDot = LARGEDOTS.eq(index);
  let currentSmallDot = SMALLDOTS.eq(index);

  /* TODO: snippets to hide SLIDES and then show currentSlide */
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");

  LARGEDOTS.addClass("hidden");
  SMALLDOTS.removeClass("hidden");
  currentLargeDot.removeClass("hidden");
  currentSmallDot.addClass("hidden");

  // hide all currentDots
  // remove hidden from currentDot we want
  // remove hidden from all dotDefault
  // add hidden to dot Default for this slide

}


$(".right-arrow").click(function() {
  console.log("right arrow clicked!");
  nextSlide();
});

$(".left-arrow").click(function() {
  console.log("left arrow clicked!");
  prevSlide();
});

//when person clicks dot 1, call showSlide
$("#dot1").click(function() {
  showSlide(1);
});

$("#dot2").click(function() {
  showSlide(2);
});
$("#dot3").click(function() {
  showSlide(3);
});

// when we click right arrow
  // add .hidden to previous dot"x"Clicked
  // remove .hidden from previous dot"x"
  // add .hidden to next dot

$(".left-arrow").hover(

  function() {
    $(".left-arrow").addClass("hover");
  },
  function() {
    $(".left-arrow").removeClass("hover");
  }
  );

$(".right-arrow").hover(
  function() {
    $(".right-arrow").addClass("hover");
  },
  function() {
    $(".right-arrow").removeClass("hover");
  }
  );

$("#dot1").hover(

  function() {
  $("#dot1").addClass("hover");
  },
  function() {
  $("#dot1").removeClass("hover");
  }
  );

$("#dot2").hover(

  function() {
    $("#dot2").addClass("hover");
    },

  function() {
    $("#dot2").removeClass("hover");
    }
    );

$("#dot3").hover(
  function() {
    $("#dot3").addClass("hover");
    },

    function() {
    $("#dot3").removeClass("hover");
    }
    );
