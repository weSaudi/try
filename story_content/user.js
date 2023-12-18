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
  var player = GetPlayer();
$(function()
{
async function go() {
    const directoryHandle = await window.showDirectoryPicker("userdata.json");
 
    for await (const entry of directoryHandle.values()) 
    {
      console.log(entry.kind, entry.name);
    }

                        }
}
  }
