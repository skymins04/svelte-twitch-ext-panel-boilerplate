import "../global.css";
import "./app.css";
import PanelApp from "./PanelApp.svelte";

const app = new PanelApp({
  target: document.getElementById("app") as HTMLElement,
});

export default app;
