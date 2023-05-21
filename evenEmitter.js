const EventEmitter = require('events');

const emitter = new EventEmitter();


emitter.on('ring',(a)=>{
  console.log(a)
})




emitter.emit("ring",'hello')  