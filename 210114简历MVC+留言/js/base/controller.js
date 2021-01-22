const Controller = function(options){
  const initFromOptions = options.init
  let controllerObj = {
    model:null,
    view:null,
    init:function(model,view){
      this.model = model
      this.view = view
      model.init()
      initFromOptions.call(this,model,view)
      this.bindEvents.call(this)
    },
  }
  for (let key in options) {
    if (key === "init") {
    } else {
      controllerObj[key] = options[key];
    }
  }
  return controllerObj
}

const Controller1 = function(options){
  let controllerObj = {
    view:null,
    init:function(view){
      this.view = view
      if(options.init){
        options.init.call(this,view)
      }
      if(options.bindEvents){
        this.bindEvents.call(this)
      }
    },
  }
  for (let key in options) {
    if (key === "init") {
    } else {
      controllerObj[key] = options[key];
    }
  }
  return controllerObj
}
export {Controller,Controller1}
