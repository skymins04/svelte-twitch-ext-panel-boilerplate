import "./app.css";
import ConfigApp from "./ConfigApp.svelte";

const app = new ConfigApp({
  target: document.getElementById("app") as HTMLElement,
});

export default app;
