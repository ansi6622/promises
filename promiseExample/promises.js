(function(){
var a = console.log('hello');  //1

var b = setTimeout(function(){ //2
  console.log('World');
}, 1000);

var c = console.log('Goodbye'); //3

var d = setTimeout(function() { //4
  console.log('Welcome');
}, 500);

var f = function() { //5
  return 'I\'m in the Promise';
};

var promise1 = new Promise(function(resolve, reject){
  console.info('From the Promise...'); //6
  return setTimeout(function(){
    resolve(f()); //7
  }, 2000);
}).then(function(data){
  console.info( data );
});
promise1;
}());


// runs 1 3 6 4 2 5/7
//                 ^same
