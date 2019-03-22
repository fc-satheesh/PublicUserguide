$(function(){
    console.log("document loaded");
    $('#content').load('pages/agents.html');
   
    $("#index").click(function(){
        $('#content').empty();
        $("#content").load("pages/agents.html");
      });
    
    
      $('#presence').click(function(){
           console.log('presence button clicked');
            $('#content').empty();
            $('#content').load('pages/skills.html');     
        });
    
        $('.sidebar-menu-list').click(function () {
            console.log('Sidebar menu list clicked');
            $(".sidebar-menu-list").removeClass("sidebar-menu-active");
            $(this).addClass("sidebar-menu-active");
        });
})