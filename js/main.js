$(function(){
    console.log("document loaded");
    $('#content').load('pages/getting.html');
   
    $("#cwGetting").click(function(){
        $('#content').empty();
        $("#content").load("pages/getting.html");
      });
    
    
      $('#cwOutcome').click(function(){
           console.log('outcome clicked');
            $('#content').empty();
            $('#content').load('pages/outcome.html');     
        });

        $("#cwAudit").click(function(){
            $('#content').empty();
            $("#content").load("pages/audit.html");
        });
        
        
          $('#cwPhone').click(function(){
              
                $('#content').empty();
                $('#content').load('pages/phone.html');     
            });

            $("#cwQueues").click(function(){
                $('#content').empty();
                $("#content").load("pages/queues.html");
              });
            
            
              $('#cwCallHistory').click(function(){
                   
                    $('#content').empty();
                    $('#content').load('pages/callhistory.html');     
                });

                $("#cwLoginLogout").click(function(){
                    $('#content').empty();
                    $("#content").load("pages/login.html");
                  });
                
                
                  $('#cwBusinessHours').click(function(){
                      
                        $('#content').empty();
                        $('#content').load('pages/businesshours.html');     
                    });

                    $("#cwPrompts").click(function(){
                        $('#content').empty();
                        $("#content").load("pages/prompts.html");
                      });
                    
                    
                      $('#cwWorkflows').click(function(){
                          
                            $('#content').empty();
                            $('#content').load('pages/workflows.html');     
                        });

                        $('#cwSkills').click(function(){
                           
                             $('#content').empty();
                             $('#content').load('pages/skills.html');     
                         });

                         $('#cwStatusCodes').click(function(){
                           
                             $('#content').empty();
                             $('#content').load('pages/statuscode.html');     
                         });

                         $('#cwUsers').click(function(){
                            console.log('presence button clicked');
                             $('#content').empty();
                             $('#content').load('pages/users.html');     
                         });
    
        $('.sidebar-menu-list').click(function () {
            console.log('Sidebar menu list clicked');
            $(".sidebar-menu-list").removeClass("sidebar-menu-active");
            $(this).addClass("sidebar-menu-active");
        });
})