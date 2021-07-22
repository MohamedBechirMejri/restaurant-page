export const generateMenu = () => {
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
                <table>
                    <thead>
                        <tr>
                            <th colspan="3">Menu</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr></tr>
                        <tr>
                            <td class="">Pizza🍕</td>
                            <td>$</td>
                            <td><button class="order-button">Order Now</button></td>
                        </tr>
                        <tr>
                            <td class="">Hamburger🍔</td>
                            <td>$$</td>
                            <td><button class="order-button">Order Now</button></td>
                        </tr>
                        <tr>
                            <td class="">Burrito🌯</td>
                            <td>$$$</td>
                            <td><button class="order-button">Order Now</button></td>
                        </tr>
                        <tr>
                            <td class="">Steak🥩</td>
                            <td>$$$$</td>
                            <td><button class="order-button">Order Now</button></td>
                        </tr>
                        <tr>
                            <td class="">Ice Cream🍨</td>
                            <td>$$$$$</td>
                            <td><button class="order-button">Order Now</button></td>
                        </tr>
                        <tr>
                            <td class="">Chocolate🍫</td>
                            <td>$$$$$$</td>
                            <td><button class="order-button">Order Now</button></td>
                        </tr>
                        <tr>
                            <td class="">Cake🍰</td>
                            <td>$$$$$$$</td>
                            <td><button class="order-button">Order Now</button></td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer>
                <p>
                    Developed by
                    <a href="https://github.com/MohamedBechirMejri">Mohamed Bechir</a>.
                </p>
            </footer>`;
};
