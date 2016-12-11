import { Greeter } from "./greeter";

const greeter: Greeter = new Greeter("Hello, world!");

document.getElementById("greeting").innerHTML = greeter.greet();
