import {
    generateHomepage
} from "./homepage";
import {
    generateMenu
} from "./menu";

export const generateContactUs = () => {
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
                E-Mail: contact@bestaurant.com
                <br>
                Number: +21655209052
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29831.75855457349!2d-156.94398005457228!3d20.832925170626392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x795537184b754573%3A0x6f1d72f26a291fc2!2sLanai%20City%2C%20HI%2096763%2C%20USA!5e0!3m2!1sen!2stn!4v1626935306926!5m2!1sen!2stn" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </p>

        </main>
            <footer>
                <p>
                    Developed by
                    <a href="https://github.com/MohamedBechirMejri" target="_blank">Mohamed Bechir</a>.
                </p>
            </footer>`;
    document
        .getElementById("home")
        .addEventListener("click", () => generateHomepage());
    document
        .getElementById("menu")
        .addEventListener("click", () => generateMenu());
};