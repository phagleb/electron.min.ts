import { setupCounter } from "./counter";

const button = document.createElement("button");
setupCounter(button);

document.body.prepend(button);
