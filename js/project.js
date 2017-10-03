/**
 * Selects all element that will it will find
 * @param  {[string]} elements [The selector for all the elements]
 * @return {[obj]}          Returns a function for the element as a object
 */
function selectAll(elements) {
  let element = document.querySelectorAll(elements);
  let saveFunction = {
    savedElement: element,
    style: function(applyingStyle, option) {
      let savedElement = this.savedElement;
      for (let i = 0; i < savedElement.length; i++) {
            savedElement[i].style[applyingStyle] = option;
            // We use applyingStyle between [] we remove the dot 
      }
    },

    attribuut: function(attribuut, option) {
      let savedElement = this.savedElement;
      for (let i = 0; i < savedElement.length; i++) {
            savedElement[i].setAttribute(attribuut, option);
      }
    },
  }
  return(saveFunction);
}

var test = selectAll(".test");
test.attribuut('width', '200px');
test.style('height', '200px');
test.style('background-color', 'red');
