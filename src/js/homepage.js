export const generateHomepage = () => {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = `
            <header>
                <h1>Bestaurant</h1>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#contact-us">Contact US</a>
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
                    <a href="https://github.com/MohamedBechirMejri">Mohamed Bechir</a>.
                </p>
            </footer>`;
};