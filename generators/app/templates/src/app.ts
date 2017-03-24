import { Greeter } from "./greeter";

const greeter: Greeter = new Greeter("<%= appname %>");

document.getElementById("greeting").innerHTML = greeter.greet();
