function Vaunted(options){
    let type = document.querySelectorAll(".type");

    if(options.type === "command")
    {
        console.log("Command");
    } else {
        console.log("Not");
    }

    type.forEach(type => {
        console.log(type);
    })
}