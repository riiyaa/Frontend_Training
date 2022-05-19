$(document).ready(function(){
    $("button").click(function(){
        $.post("test.txt", function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
        });
      });
  });