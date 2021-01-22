const View = function(selection, getMultiple = false){
  return getMultiple ? document.querySelectorAll(selection) : document.querySelector(selection)
}
export {View}