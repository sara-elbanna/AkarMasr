
$(function(){

/*
  Global
*/  
// Navbar
  $(window).scroll(function(){
    if($(window).scrollTop() > 20){
      $(".navbar").css({
        position: "fixed",
        backgroundColor: "white"
      }),
      $(".navbar .nav-link").css({
        color:"black"
      })
    }
    else{
      $(".navbar").css({
        position: "absolute",
        backgroundColor: "transparent"
      }),
      $(".navbar .nav-link").css({
        color:"white"
      })
    }
  })


/*
  property_name Page (first)
*/
  // felxSlider 
    // $('#carousel').flexslider({
    //   animation: "slide",
    //   controlNav: false,
    //   animationLoop: false,
    //   slideshow: false,
    //   itemWidth: 210,
    //   itemMargin: 0,
    //   asNavFor: '#slider'
    // });
    // $('#slider').flexslider({
    //   animation: "slide",
    //   controlNav: false,
    //   animationLoop: false,
    //   slideshow: false,
    //   sync: "#carousel"
    // });
/*
  projects_name Page
*/
  // slick slider 
    // $('.single-item').slick({
    //   dots:true
    // });

/*
  project_name Page
*/ 
  // Dynamic Tab

  $(".ProjectName-maincontent .tab ul.tab-links li").click(function(){
    $(".ProjectName-maincontent .tab .tab-element").hide();
    //try it global
    $($(this).data("content")).show();
    $(this).addClass("active").siblings().removeClass("active") 
  }) 

/*
  projects_edit Page
*/

  // $(".projectsEditPage-mainContant .buttonsView button").click(function(){
  //   $(".projectsEditPage-mainContant .projects").fadeOut();
  //   $($(this).data("view")).fadeIn();
  // })

  $(".projectsEditPage-mainContant .buttonsView button.list").click(function(){
    $(".projectsEditPage-mainContant .projects").removeClass("grid").addClass("list");
    
  })

  $(".projectsEditPage-mainContant .buttonsView button.grid").click(function(){
    $(".projectsEditPage-mainContant .projects").removeClass("list").addClass("grid")
  })



})
  