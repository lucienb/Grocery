
$(document).ready(function(){

$("form").submit(function (e) {
            e.preventDefault();
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
          
          }

}
    )
    });
    })