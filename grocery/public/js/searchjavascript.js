
$(document).ready(function(){

$("form").submit(function (e) {
            e.preventDefault();
           var myQuery = document.getElementById("inputbox").value;
      var urls ="https://api2.bigoven.com/recipes?title_kw="+myQuery+"&pg=1&rpp=20&api_key=2MX8tWBt2B3U5VWChEngoRCT4dnHx8Uf";
      document.getElementById("inputbox").value = "";
      var urls2 ="https://api2.bigoven.com/recipes?title_kw="+myQuery+"&pg=2&rpp=20&api_key=2MX8tWBt2B3U5VWChEngoRCT4dnHx8Uf";
      var urls3="https://api2.bigoven.com/recipes?title_kw="+myQuery+"&pg=3&rpp=20&api_key=2MX8tWBt2B3U5VWChEngoRCT4dnHx8Uf";
      var pic="pic";
      var fancypic="fancypic";
      var link="link";
      var number=1;
      var title="text";
$.ajax({
        url: urls,
          dataType: 'json',
          success: function( data ){
           number=1;
if(data['Results'].length==0)
{
  alert("Invalid Search");
  location.reload();
}
}});
for(var number=1; number<17; number++)
{
             var currentpic=pic+number;
             var currentrecipe=title+number;
             var currentfancypic=fancypic+number;
             var currentlink=link+number;
             document.getElementById(currentpic).src="";
             document.getElementById(currentpic).style.width="261px";
             document.getElementById(currentpic).style.height="269px";
             document.getElementById(currentrecipe).innerHTML="";
             document.getElementById(currentfancypic).href="";
   
   }          document.getElementById(currentlink).href="";


      $.ajax({
        url: urls,
          dataType: 'json',
          success: function( data ){
           number=1;
          $.each(data['Results'], function(name2, value)
          {

           if(number<17&&value.PhotoUrl!="http://photos.bigoven.com/recipe/hero/recipe-no-image.jpg")
           {
             var currentpic=pic+number;
             var currentrecipe=title+number;
             var currentfancypic=fancypic+number;
             var currentlink=link+number;
             console.log(value.PhotoUrl);
             document.getElementById(currentpic).src=value.PhotoUrl;
             document.getElementById(currentpic).style.width="261px";
             document.getElementById(currentpic).style.height="269px";
             document.getElementById(currentrecipe).innerHTML=value.Title;
             document.getElementById(currentfancypic).href=value.PhotoUrl;
             document.getElementById(currentlink).href=value.WebURL;
             number++;
           }
          });


        $.ajax({
        url: urls2,
        dataType: 'json',
        success:function(data){  
                var loop=0;     
          $.each(data['Results'], function(name2, value)
          {

            loop++;
           if(number<17&&value.PhotoUrl!="http://photos.bigoven.com/recipe/hero/recipe-no-image.jpg")
           {
             var currentpic=pic+number;
             var currentrecipe=title+number;
             var currentfancypic=fancypic+number;
             var currentlink=link+number;
             console.log(value.PhotoUrl);
             document.getElementById(currentpic).src=value.PhotoUrl;
             document.getElementById(currentpic).style.width="261px";
             document.getElementById(currentpic).style.height="269px";
             document.getElementById(currentrecipe).innerHTML=value.Title;
             document.getElementById(currentfancypic).href=value.PhotoUrl;
             document.getElementById(currentlink).href=value.WebURL;
             number++;
           }
           else if(loop==number&&number!=17)
           {
             var currentpic=pic+number;
             var currentrecipe=title+number;
             var currentfancypic=fancypic+number;
             var currentlink=link+number;
             console.log(value.PhotoUrl);
             document.getElementById(currentpic).src=value.PhotoUrl;
             document.getElementById(currentpic).style.width="261px";
             document.getElementById(currentpic).style.height="269px";
             document.getElementById(currentrecipe).innerHTML=value.Title;
             document.getElementById(currentfancypic).href=value.PhotoUrl;
             document.getElementById(currentlink).href=value.WebURL;
             number++;
           }

          });


 }

      })




          }

}
    )
        });

    $("#icon").click(
    function(e){     

     var myQuery = document.getElementById("inputbox").value;
      var urls ="https://api2.bigoven.com/recipes?title_kw="+myQuery+"&pg=1&rpp=20&api_key=2MX8tWBt2B3U5VWChEngoRCT4dnHx8Uf";
      document.getElementById("inputbox").value = "";
//
      $.ajax({
        url: urls,
          dataType: 'json',
          success: function( data ){
           var pic="pic";
           var fancypic="fancypic";
           var link="link";
           var number=1;
           var title="text";
          $.each(data['Results'], function(name2, value)
          {
           if(number<17)
           {
             var currentpic=pic+number;
             var currentrecipe=title+number;
             var currentfancypic=fancypic+number;
             var currentlink=link+number;
             document.getElementById(currentpic).src=value.PhotoUrl;
             document.getElementById(currentpic).style.width="261px";
             document.getElementById(currentpic).style.height="269px";
             document.getElementById(currentrecipe).innerHTML=value.Title;
             document.getElementById(currentfancypic).href=value.PhotoUrl;
             document.getElementById(currentlink).href=value.WebURL;
             number++;
           }

          });
          $.ajax({
        url: urls2,
        dataType: 'json',
        success:function(data){  
        var loop=1;     
          $.each(data['Results'], function(name2, value)
          {
           if(number<17&&value.PhotoUrl!="http://photos.bigoven.com/recipe/hero/recipe-no-image.jpg")
           {
             var currentpic=pic+number;
             var currentrecipe=title+number;
             var currentfancypic=fancypic+number;
             var currentlink=link+number;
             console.log(value.PhotoUrl);
             document.getElementById(currentpic).src=value.PhotoUrl;
             document.getElementById(currentpic).style.width="261px";
             document.getElementById(currentpic).style.height="269px";
             document.getElementById(currentrecipe).innerHTML=value.Title;
             document.getElementById(currentfancypic).href=value.PhotoUrl;
             document.getElementById(currentlink).href=value.WebURL;
             number++;
           }
            else if(loop==number&&number!=17)
           {
             var currentpic=pic+number;
             var currentrecipe=title+number;
             var currentfancypic=fancypic+number;
             var currentlink=link+number;
             console.log(value.PhotoUrl);
             document.getElementById(currentpic).src=value.PhotoUrl;
             document.getElementById(currentpic).style.width="261px";
             document.getElementById(currentpic).style.height="269px";
             document.getElementById(currentrecipe).innerHTML=value.Title;
             document.getElementById(currentfancypic).href=value.PhotoUrl;
             document.getElementById(currentlink).href=value.WebURL;
             number++;
           }

          });



 }

      })
          
          }

}
    )
    });
    })