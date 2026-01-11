const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "hello";
  }
  greet(name) {
    this.emit("greeting", `${this.greeting}, ${name}`);
  }
}

const myFirstEmitter = new MyCustomEmitter();

myFirstEmitter.on("greeting", (input) => {
  console.log("Greeting event", input);
});

myFirstEmitter.greet("rahul etyala")