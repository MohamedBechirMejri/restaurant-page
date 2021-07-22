import { generateMenu } from "./menu";
import { generateContactUs } from "./contact-us";

export const generateHomepage = () => {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = `
            <header>
                <h1>Bestaurant</h1>
                <nav>
                    <a id="home">Home</a>
                    <a id="menu">Menu</a>
                    <a id="contact-us">Contact US</a>
                </nav>
            </header>
        <main>
            <p>
                Welcome To The Best Restaurant.<button>Check The Menu</button>

            </p>
        </main>
            <footer>
                <p>
                    Developed by
                    <a href="https://github.com/MohamedBechirMejri" target="_blank">Mohamed Bechir</a>.
                </p>
            </footer>`;
  document
    .getElementById("menu")
    .addEventListener("click", () => generateMenu());
  document
    .getElementById("contact-us")
    .addEventListener("click", () => generateContactUs());
};
