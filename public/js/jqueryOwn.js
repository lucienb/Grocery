var i = 0;
var groceries = [];
function REMOVETHING(day)
{
 if(day === monday)
{
	$( "#monday" ).empty();
	$( "#monday" ).append('<p>Enter id of desired dish</p>');
	$( "#monday" ).append('<input id="monform"></input>');
        $( "#monday" ).append('<a href="#" onclick="doDay(monday)"><i class="fa fa-plus-circle"></i></a>');
        $( "#m" ).empty();

}
  if(day ===tuesday)
{
$( "#tuesday" ).empty();
	$( "#tuesday" ).append('<p>Enter id of desired dish</p>');
	$( "#tuesday" ).append('<input id="tuesform"></input>');
        $( "#tuesday" ).append('<a href="#" onclick="doDay(tuesday)"><i class="fa fa-plus-circle"></i></a>');
        $( "#t" ).empty();

}
  if(day === wednesday)
{
$( "#wednesday" ).empty();
	$( "#wednesday" ).append('<p>Enter id of desired dish</p>');
	$( "#wednesday" ).append('<input id="wedform"></input>');
        $( "#wednesday" ).append('<a href="#" onclick="doDay(wednesday)"><i class="fa fa-plus-circle"></i></a>');
        $( "#w" ).empty();

}
  if(day ===thursday)
{
$( "#thursday" ).empty();
	$( "#thursday" ).append('<p>Enter id of desired dish</p>');
	$( "#thursday" ).append('<input id="thursform"></input>');
        $( "#thursday" ).append('<a href="#" onclick="doDay(thursday)"><i class="fa fa-plus-circle"></i></a>');
        $( "#th" ).empty();
}
  if(day === friday)
{
$( "#friday" ).empty();
	$( "#friday" ).append('<p>Enter id of desired dish</p>');
	$( "#friday" ).append('<input id="friform"></input>');
        $( "#friday" ).append('<a href="#" onclick="doDay(friday)"><i class="fa fa-plus-circle"></i></a>');
        $( "#f" ).empty();

}
  if(day ===saturday)
{
$( "#saturday" ).empty();
	$( "#saturday" ).append('<p>Enter id of desired dish</p>');
	$( "#saturday" ).append('<input id="satform"></input>');
        $( "#saturday" ).append('<a href="#" onclick="doDay(saturday)"><i class="fa fa-plus-circle"></i></a>');
        $( "#s" ).empty();
}
}
function doDay(day){
  var TitleKeyword;
  if(day === monday)
{
	TitleKeyword = $( "#monform" ).val();
}
  if(day ===tuesday)
{
	TitleKeyword = $( "#tuesform" ).val();
}
  if(day === wednesday)
{
	TitleKeyword = $( "#wedform" ).val();
}
  if(day ===thursday)
{
	TitleKeyword = $( "#thursform" ).val();
}
  if(day === friday)
{
	TitleKeyword = $( "#friform" ).val();
}
  if(day ===saturday)
{
	TitleKeyword = $( "#satform" ).val();
}
	console.log(TitleKeyword);
        var apiKey = "2MX8tWBt2B3U5VWChEngoRCT4dnHx8Uf";
        var url = "http://api2.bigoven.com/recipe/"                  
                  + TitleKeyword 
                  + "?api_key="
                  +apiKey;
        $.ajax({
            type: "GET",
            dataType: 'xml',
            cache: false,
            url: url,
            success: function (xml) {
            console.log(xml); 
            var title = $(xml).find('Title').text();
            var imgUrl = $(xml).find('ImageURL').text();
			  var synonyms = $(xml).find('Ingredients')
   			  synonyms.find('Ingredient').each(function()
			  {
			    var name = "";
			    var ingr = $(this).find('IngredientInfo');
			    name = ingr.find('Name').text();
                            var quantity = $(this).find('Quantity').text();
                            var unit = $(this).find('Unit').text();
                            if(name === ""){}
                            else{
                            var fullInfo = quantity+" "+unit+" "+name;
			    groceries.push(fullInfo);
if(day === monday)
{
	$( "#m" ).append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');
}
  if(day ===tuesday)
{
	$( "#t" ).append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');
}
  if(day === wednesday)
{
	$( "#w" ).append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');

}
  if(day ===thursday)
{
	$( "#th" ).append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');

}
  if(day === friday)
{
	$( "#f" ).append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');
}
  if(day ===saturday)
{
	$( "#s" ).append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');

}

                            $('#'+i+'').text(fullInfo);
		            i++;
			    }
			  }); 
 if(day === monday)
{
	$( "#monday" ).empty();
	$("<div/>").addClass("redbold").text(title).appendTo("#monday");
        $('#monday').append('<img id="monImg" width="150px"/>');
       $('#monday').append('<a href="#" onclick="REMOVETHING(monday)" class="text-center">Remove</a>');
        $('#monImg').attr("src",imgUrl);
}
  if(day ===tuesday)
{
	$( "#tuesday" ).empty();
	$("<div/>").addClass("redbold").text(title).appendTo("#tuesday");
        $('#tuesday').append('<img id="tuesImg" width="150px"/>')
       $('#tuesday').append('<a href="#" onclick="REMOVETHING(tuesday)" class="text-center">Remove</a>');
        $('#tuesImg').attr("src",imgUrl);
}
  if(day === wednesday)
{
	$( "#wednesday" ).empty();
	$("<div/>").addClass("redbold").text(title).appendTo("#wednesday");
        $('#wednesday').append('<img id="wedImg" width="150px"/>')
       $('#wednesday').append('<a href="#" onclick="REMOVETHING(wednesday)" class="text-center">Remove</a>');
        $('#wedImg').attr("src",imgUrl);
}
  if(day ===thursday)
{
	$( "#thursday" ).empty();
	$("<div/>").addClass("redbold").text(title).appendTo("#thursday");
        $('#thursday').append('<img id="thurImg" width="150px"/>')
       $('#thursday').append('<a href="#" onclick="REMOVETHING(thursday)" class="text-center">Remove</a>');
        $('#thurImg').attr("src",imgUrl);
}
  if(day === friday)
{
	$( "#friday" ).empty();
	$("<div/>").addClass("redbold").text(title).appendTo("#friday");
        $('#friday').append('<img id="friImg" width="150px"/>')
       $('#friday').append('<a href="#" onclick="REMOVETHING(friday)" class="text-center">Remove</a>');
        $('#friImg').attr("src",imgUrl);
}
  if(day ===saturday)
{
	$( "#saturday" ).empty();
	$("<div/>").addClass("redbold").text(title).appendTo("#saturday");
        $('#saturday').append('<img id="satImg" width="150px"/>')
       $('#saturday').append('<a href="#" onclick="REMOVETHING(saturday)" class="text-center">Remove</a>');
        $('#satImg').attr("src",imgUrl);
}
        }
        });
 
}