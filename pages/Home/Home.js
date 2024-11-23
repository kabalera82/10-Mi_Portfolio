import "./Home.css";
import { cleanPage } from "/utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p><strong>Hola!!! Este será mi Portfolio, eres más que bienvenido.</strong></p>
    <h1>Marcos Padilla Puentes</h1>
    <p><strong>El camino hay que disfrutarlo...</strong></p>
    </section>`;
};