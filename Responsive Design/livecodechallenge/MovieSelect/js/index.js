$(document).ready(function(){
  $(".btn").click(function(){
     var title=$("#name").val();
     var rating=$("#rating").val();
     $('#table ').append("<tr><td>"+title+"</td><td>"+rating+"</td></tr>")
  })
})