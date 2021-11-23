export interface Game {
    id: number;
    name: string;
    image_url: string;
    price: number;
    description: string;
    categories: string[];
    platform: string;
}

const games = [
    {
        id: 1,
        name: "Death stranding",
        image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1190460/header.jpg?t=1636451066",
        price: 239.00,
        description: "Do lendário criador Hideo Kojima, chega uma experiência totalmente nova que desafia todos os gêneros. Sam Bridges precisa encarar um mundo transformado pelo Death Stranding.",
        categories: ["Mundo Aberto", "Boa Trama", "Pós-Apocalíptico"],
        platform: "PC"
    },
    {
        id: 2,
        name: "Bloons TD 6",
        image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/960090/header.jpg?t=1634303522",
        price: 28.00,
        description: "Monte sua defesa perfeita a partir de uma combinação de incríveis torres de macaco, melhorias, heróis e habilidades ativáveis, depois estoure cada Bloon que invadir!",
        categories: ["Estratégia", "Tower Defense", "Multijogador"],
        platform: "Mobile"
    }
]

export const pc_games = games.filter(game => game.platform == "PC")

export const mobile_games = games.filter(game => game.platform == "Mobile")