export const generateHomepage = () => {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = `<header>
                <h1>Bestaurant</h1>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#contact-us">Contact US</a>
                </nav>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                accusantium quo eaque assumenda voluptates quam accusamus nemo quia aut
                non, molestias eum omnis illo error ducimus sapiente maiores aliquid.
                Vero.
            </p>

            <footer>
                <p>
                    Developed by
                    <a href="https://github.com/MohamedBechirMejri">Mohamed Bechir</a>
                </p>
            </footer>`;
};