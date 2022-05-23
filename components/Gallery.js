import React from "react";

export default function Gallery({screenshots}){

    var game_pk = "";
    
    count = 0;
    next = "<uri>";
    previous = "<uri>";
    results = [{screenshots}]; 

    try {
        const gameResponse = await fetch(
          "https://api.rawg.io/api/games/"+game_pk+"/screenshots");
        if (!gameResponse.ok) throw Error("Did not receive screenshots.");
        const screenshots = await gameResponse.json();
    } catch (err) {
        console.log(err.message);
    }

    const images = [screenshots] 

/*
    {
        "count": 0,
        "next": "http://example.com",
        "previous": "http://example.com",
        "results": [+{...}]
    }
*/
    
return(
    <div>

    </div>
)

}
