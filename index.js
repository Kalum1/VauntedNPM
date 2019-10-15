function vaunted(options) {
    switch (options.type) {
      case "command":
        console.log('Command');
        break;
      default:
        console.log("Unknown type");
    }
    console.log(options.name)
    console.log(options.triggers)

}

vaunted.main = function (settings){
switch (settings.name) {
    case "name":
      console.log(settings.name);
      break;
    default:
      console.log("Unknown type");
  }
}

module.exports = vaunted;