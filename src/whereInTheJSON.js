const whereInTheJSON = (obj, stack) => {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] == "object") {
        iterate(obj[property], stack + '.' + property);
        } else {
          console.log(property + "   " + obj[property]);
          $('#output').append($("<div/>").text(stack + '.' + property))
        }
      }
    }
}

export default whereInTheJSON