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
    $.getJSON( "one.json", function(data) {
        player.SetVar("txt", data[0]["one"]);
        console.log( data );
      })
})
}

function Script2()
{
  src="https://code.jquery.com/jquery-3.7.0.js";

$(function()
{
    $.getJSON( "one.json", function(data) {
        data[0]["one"]="ramy";
        const myjsonserver = JSON.stringify(data);
        console.log( data );
        console.log( myjsonserver );
      })
})

}

