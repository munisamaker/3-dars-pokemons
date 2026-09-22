const data = [{
        name: "Bulbasaur",
        img: "http://www.serebii.net/pokemongo/pokemon/001.png",
        type: [
            "Grass",
            "Poison"
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
    },
    {
        name: "Ivysaur",
        img: "http://www.serebii.net/pokemongo/pokemon/002.png",
        type: [
            "Grass",
            "Poison"
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
    },
    {
        name: "Venusaur",
        img: "http://www.serebii.net/pokemongo/pokemon/003.png",
        type: [
            "Grass",
            "Poison"
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
    },
    {
        name: "Charmander",
        img: "http://www.serebii.net/pokemongo/pokemon/004.png",
        type: [
            "Fire"
        ],
        weaknesses: [
            "Water",
            "Ground",
            "Rock"
        ],
    },
    {
        name: "Charmeleon",
        img: "http://www.serebii.net/pokemongo/pokemon/005.png",
        type: [
            "Fire"
        ],
        weaknesses: [
            "Water",
            "Ground",
            "Rock"
        ],
    },
];


const list = document.querySelector(".list");
for (let i = 0; i < data.length; i++) {
    const item = document.createElement("li");
    const name = document.createElement("p");
    name.textContent = data[i].name;

    const img = document.createElement("img");
    img.src = data[i].img;


    const typeTitle = document.createElement("p");
    typeTitle.textContent = "Type:";


    const typeUl = document.createElement("ul");
    for (let j = 0; j < data[i].type.length; j++) {
        const li = document.createElement("li");
        li.textContent = data[i].type[j];
        typeUl.append(li);
    }

    const weakTitle = document.createElement("p");
    weakTitle.textContent = "Weaknesses:";

    const weakUl = document.createElement("ul");
    for (let k = 0; k < data[i].weaknesses.length; k++) {
        const li = document.createElement("li");
        li.textContent = data[i].weaknesses[k];
        weakUl.append(li);
    }

    item.append(img);
    item.append(name);
    item.append(typeTitle);
    item.append(typeUl);
    item.append(weakTitle);
    item.append(weakUl);


    list.append(item);
}