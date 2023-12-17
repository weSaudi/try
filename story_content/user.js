function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YzbLTX9LKO":
        Script1();
        break;
      case "5X6E6FxHAtK":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

src="https://code.jquery.com/jquery-3.7.0.js";

$(function()
{
    $.getJSON( "userdata.json", function(data) {
        player.SetVar("txt", data[0]["one"]);
        console.log( data );
      })
})
}

function Script2()
{
src="https://code.jquery.com/jquery-3.7.0.js";

var params;

$(function()
{
    $.getJSON( "userdata.json", function(data) {
        data[0]["one"]="ramy";
        params = JSON.stringify(data);
        player.SetVar("txt", data[0]["one"]);
        console.log( data );
      })
})
$.ajax({
  type: 'POST',
  data: params,
  url: 'datac.php',
  success: function(data){
      // do something on success
  },
  error: function(){
      // do something on error
  }
});
}

