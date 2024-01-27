const { TIMEOUT } = require('dns');
const EventEmitter = require('events');
const { setTimeout } = require('timers/promises');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
    console.log('Please turn of the morter!');

    setTimeout(() => {
        console.log('Turn of now');
    }, 3000);

});


console.log("the script is running")

myEmitter.emit('Waterfull');