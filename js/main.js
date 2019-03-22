$(function(){
    console.log("document loaded");
    $('#content').load('pages/p.html');
   
    $("#index").click(function(){
        $('#content').empty();
        $("#content").load("pages/p.html");
      });
    
    
      $('#presence').click(function(){
           console.log('presence button clicked');
            $('#content').empty();
            $('#content').load('p1.html');     
        });
    
        $('.sidebar-menu-list').click(function () {
            console.log('Sidebar menu list clicked');
            $(".sidebar-menu-list").removeClass("sidebar-menu-active");
            $(this).addClass("sidebar-menu-active");
        });
})