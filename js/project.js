/**
 * Selects all element that will it will find
 * @param  {[string]} elements [The selector for all the elements]
 * @return {[array]}          [All the elements that have been found]
 */
function selectAll(elements) {
  let element = document.querySelectorAll(elements);
  let saveFunction = function(attribuut, option) {
    let savedElement = element;

    for (let i = 0; i < savedElement.length; i++) {
          savedElement[i].setAttribute(attribuut, option);
    }

  }
  return(saveFunction);
}

var test = selectAll(".test");
test('width', '200px');
test('height', '200px');
test('background-color', 'red');
