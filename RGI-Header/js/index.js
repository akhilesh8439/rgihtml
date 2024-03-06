// JavaScript for navigation and side menu toggling
function toggleDropdown(menuId) {
    var dropdownContent = $("#" + menuId);
    dropdownContent.toggle();
  }
  
$(document).ready(function() {
    $(".arrow-img").click(function () {
        $(".all-three").slideToggle();
        $(".arrow-img").toggleClass("rotated");

        // Toggle visibility of top-social-icons and apple-pay
        $(".top-social-icons, .apple-pay").toggle();
    });

    $('.sidebar .parent').click(function() {
        var dropdown = $(this).find('.sidenav-dropdown');
        dropdown.slideToggle();
				$(this).find('a:first').addClass("active");
    });

    $('#openHambuger').click(function() {
        $(".sidebar").toggleClass("toggle");
        $(".closeHambuger").removeClass("d-none");
    });

    $('.closeHambuger').click(function() {
        $(".sidebar").toggleClass("toggle");
        $(".closeHambuger").addClass("d-none");
    });
});
$(document).ready(function(){
    $('.language-side').on('click', function(){
      $('#exampleModalLong').modal('show');
    });
  });
  $(document).ready(function () {
    $("#supportBtn").click(function () {
        $("#supportDropdown").toggle();
    });

    $(document).on("click", function (event) {
        if (!$(event.target).closest("#supportBtn, #supportDropdown").length) {
            $("#supportDropdown").hide();
        }
    });
});
$(document).ready(function () {     
    $(".search-bar").click(function () {
        $("#fullscreenSearch").show();
    });

    $(document).on("click", "#closeSearch", function() {
        $("#fullscreenSearch").hide();
    });
});
 // jQuery function to show/hide tabs
 $(document).ready(function() {
    $('.tab').click(function() {
        var tabId = $(this).data('tab');

        // Hide all tabs
        $('.tab-content').hide();

        // Show the selected tab
        $('#' + tabId).show();
    });
});
$(document).ready(function() {
    $('#buyFirst').click(function() {
      $('.mobile-sidebar').toggleClass('toggle');
    });
  });

  $('.mobile-parent').click(function() {
    var dropdown = $(this).find('.downnav-dropdown');
    dropdown.slideToggle();
    $(this).find('a:first').toggleClass("active");
});
$(document).ready(function() {
    $('.mobile-close-cross').click(function() {
        $('.mobile-sidebar').toggleClass('toggle');
    });
});
$(document).ready(function() {
    // Hide the support nav initially
    $('.support-nav-mobile').hide();

    // Attach a click event handler to the supportLink
    $('#supportLink').click(function(e) {
        e.preventDefault(); // prevent the default behavior of the anchor tag
        $('.support-nav-mobile').toggle(); // toggle visibility
    });
});

