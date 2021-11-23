export interface Game {
    id: number;
    name: string;
    image_url: string;
    price: number;
    description: string;
    categories: string[];
    platform: "PC" | "Mobile";
}

export const games = [
    {
        id: 1,
        name: "Death strandig",
        image_url: "src/assets/death_stranding.jpg",
        price: 239.00,
        description: "Do lendário criador Hideo Kojima, chega uma experiência totalmente nova que desafia todos os gêneros. Sam Bridges precisa encarar um mundo transformado pelo Death Stranding.",
        categories: ["Mundo Aberto", "Boa Trama", "Pós-Apocalíptico"],
        platform: "PC"
    }
]