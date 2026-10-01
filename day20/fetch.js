// 비동기: 오래걸리는 작업들 [settimeout, 서버]
// fetch() Promise 리턴

// fetch("https://dummyjson.com/recipes")
//   .then((v) => v.json())
//   .then((v) => console.log(v));

const product = document.querySelector("#product");
const recipe = document.querySelector("#recipe");
const user = document.querySelector("#user");
const loader = document.querySelector("#loading");
const cardGrid = document.querySelector(".cardGrid");
product.addEventListener("click", () => {
    loader.classList.remove("hidden");
    products();
});

recipe.addEventListener("click", () => {
    loader.classList.remove("hidden");
    recipes();
});

user.addEventListener("click", () => {
    loader.classList.remove("hidden");
    users();
});

const products = () => {
    cardGrid.replaceChildren();
    fetch("https://dummyjson.com/products")
        .then((v) => v.json())
        .then((v) => v.products.map((v) => {
            const cardDiv = document.createElement("div");
            const titleDiv = document.createElement("div");
            const priceDiv = document.createElement("div");
            const thumbnailDiv = document.createElement("img");

            cardDiv.classList.add("card");

            titleDiv.innerHTML = `${v.title}`;
            priceDiv.innerHTML = `${v.price}`;
            thumbnailDiv.src = `${v.thumbnail}`;

            cardDiv.append(thumbnailDiv);
            cardDiv.append(titleDiv);
            cardDiv.append(priceDiv);
            cardGrid.append(cardDiv);
            loader.classList.add("hidden");
        }));
};

const recipes = () => {
    cardGrid.replaceChildren();
    fetch("https://dummyjson.com/recipes")
        .then((v) => v.json())
        .then((v) => v.recipes.map((v) => {
            const cardDiv = document.createElement("div");
            const titleDiv = document.createElement("div");
            const priceDiv = document.createElement("div");
            const thumbnailDiv = document.createElement("img");

            cardDiv.classList.add("card");

            titleDiv.innerHTML = `${v.name}`;
            priceDiv.innerHTML = `${v.rating}`;
            thumbnailDiv.src = `${v.image}`;

            cardDiv.append(thumbnailDiv);
            cardDiv.append(titleDiv);
            cardDiv.append(priceDiv);
            cardGrid.append(cardDiv);
            loader.classList.add("hidden");
        }));
};

const users = () => {
    cardGrid.replaceChildren();
    fetch("https://dummyjson.com/users")
        .then((v) => v.json())
        .then((v) => v.users.map((v) => {
            const cardDiv = document.createElement("div");
            const titleDiv = document.createElement("div");
            const priceDiv = document.createElement("div");
            const thumbnailDiv = document.createElement("img");

            cardDiv.classList.add("card");

            titleDiv.innerHTML = `${v.lastName}`;
            priceDiv.innerHTML = `${v.university}`;
            thumbnailDiv.src = `${v.image}`;

            cardDiv.append(thumbnailDiv);
            cardDiv.append(titleDiv);
            cardDiv.append(priceDiv);
            cardGrid.append(cardDiv);
            loader.classList.add("hidden");
        }));
};