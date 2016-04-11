$(document).ready(function(){
      console.log("Hello");

    $("#icon").click(
    function(e){     

     var myQuery = document.getElementById("inputbox").value;
      var urls ="https://api2.bigoven.com/recipes?title_kw="+myQuery+"&pg=1&rpp=20&api_key=2MX8tWBt2B3U5VWChEngoRCT4dnHx8Uf";
      console.log(urls);
      document.getElementById("inputbox").value = "";
//
      $.ajax({
        url: urls,
          dataType: 'json',
          success: function( data ){
            console.log("Hello from data");
            console.log(data);
           // $("#result")
           var pic="pic";
           var fancypic="fancypic";
           var link="link";
           var number=1;
           var title="text";
          $.each(data['Results'], function(name2, value)
          {
           if(number<17)
           {
             console.log(value.WebURL);
             console.log(value.PhotoUrl);
             var currentpic=pic+number;
             var currentrecipe=title+number;
             var currentfancypic=fancypic+number;
             var currentlink=link+number;
             document.getElementById(currentpic).src=value.PhotoUrl;
           // document.getElementById(currentpic).width="261";
            //document.getElementById(currentpic).height="269";
            document.getElementById(currentrecipe).innerHTML=value.Title;
            document.getElementById(currentfancypic).href=value.PhotoUrl;
            document.getElementById(currentlink).href=value.WebURL;
             number++;
           }

          });
          
          
          /*
             document.getElementById("title").innerHTML="";
             document.getElementById("result").style.backgroundImage="none";
             document.getElementById("result").style.backgroundColor= "white";     
             document.getElementById("result").style.width="55%";
             document.getElementById("result").style.height="500px";
             document.getElementById("result").style.overflow= "scroll";
             document.getElementById("result").display="block";
             document.getElementById("result").marginLeft="auto";
             document.getElementById("result").marginRight="auto";
             */



          
    



          }

}
    )

//
    });


    })