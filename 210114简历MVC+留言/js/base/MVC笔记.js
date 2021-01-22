function AA(options) {
  const a = options.a;
  const b = options.b;
  const callback = options.callback;
  let c = a + b;
  let d = callback(a, b, c);
  return { a, b, c, d };
}

AA({ a: 1, b: 2, callback: (a, b, c) => a * b * c });

const Controller = function (options) {
  const initFromOptions = options.init;
  const obj = {
    view: null,
    model: null,
    init: function (view, model) {
      console.log('obj init run');
      this.view = view;
      this.model = model;
      this.model.init();
      initFromOptions.call(this, view, model);
      options.bindEvents.call(this);
    },
  };

  for (let key in options){
    if (key !== 'init' ){
      obj[key] = options[key]
    }
  }

  return obj;
};

const options = {
  a:1,
  b:2,
  init:function(view,model){
    console.log('options init run');
  }
}
let view = document.documentElement
let model = {
  init:function(){
    console.log('model init run');
  }
}
let c = Controller(options)
c.init(view,model)
