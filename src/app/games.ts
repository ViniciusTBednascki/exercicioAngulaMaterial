export interface Game {
    id: number;
    name: string;
    image_url: string;
    small_image_url: string,
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
        small_image_url: "data:image/jpeg;base64,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",
        price: 239.00,
        description: "Do lendário criador Hideo Kojima, chega uma experiência totalmente nova que desafia todos os gêneros. Sam Bridges precisa encarar um mundo transformado pelo Death Stranding. Com os vestígios do nosso futuro em suas mãos, ele embarca em uma jornada para reconstruir o mundo despedaçado passo a passo.",
        categories: ["Mundo Aberto", "Boa Trama", "Pós-Apocalíptico"],
        platform: "PC"
    },
    {
        id: 2,
        name: "Bloons TD 6",
        image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/960090/header.jpg?t=1634303522",
        small_image_url: "https://play-lh.googleusercontent.com/a4S3knhv7RGKTuKNbgTelxBFS9xOYypcpKDJ-KsXlyhbt9Pv9hZyvnSKs6_u9tozrYp6=w240-h480-rw",
        price: 28.00,
        description: "Monte sua defesa perfeita a partir de uma combinação de incríveis torres de macaco, melhorias, heróis e habilidades ativáveis, depois estoure cada Bloon que invadir! Junte-se a milhões de outros jogadores que se divertem com as imensas e em constante expansão características que trazem incontáveis horas do melhor jogo de estratégia disponível.",
        categories: ["Estratégia", "Tower Defense", "Multijogador"],
        platform: "Mobile"
    },
    {
        id: 3,
        name: "Horizon Zero Dawn",
        image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg?t=1635442187",
        small_image_url: "https://primewikis.com/wp-content/uploads/horizon-zero-dawn-feat-1-240x240.jpg",
        price: 200.00,
        description: "Viva a experiência de Aloy em sua busca lendária para desvendar os mistérios de uma Terra do futuro controlada por máquinas. Use ataques táticos devastadores contra suas presas e explore um mundo aberto majestoso neste premiado RPG de aventura e ação! ",
        categories: ["Mundo Aberto", "Aventura", "Um Jogador"],
        platform: "PC"
    },
    {
        id: 4,
        name: "Geometry Dash",
        image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/322170/header.jpg?t=1624472273",
        small_image_url: "https://play-lh.googleusercontent.com/gSJ1oQ4a5pxvNHEktd21Gh36QbtZMMx5vqFZfe47VDs1fzCEeMCyThqOfg3DsTisYCo=s360",
        price: 9.00,
        description: "Salte e voe através do perigo neste jogo de plataforma de ação baseado em ritmo! Prepare-se para um desafio quase impossível no mundo do Geometry Dash. Empurre suas habilidades ao limite enquanto pula, voa e vira seu caminho através de passagens perigosas e obstáculos pontiagudos.",
        categories: ["Difícil", "Música", "Plataforma de Precisão"],
        platform: "Mobile"
    },
    {
        id: 5,
        name: "Sekiro: Shadows Die Twice",
        image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg?t=1603904569",
        small_image_url: "https://i1.sndcdn.com/artworks-000669601579-mbt498-t240x240.jpg",
        price: 200.00,
        description: "Jogo do Ano - The Game Awards 2019 Melhor Jogo de Ação de 2019 - IGN Trilhe seu próprio caminho de vingança nesta premiada aventura da FromSoftware, os criadores de Bloodborne e da franquia Dark Souls. Obtenha vingança. Retome sua honra. Mate astuciosamente.",
        categories: ["Similar a Dark Souls", "Difícil", "Ação"],
        platform: "PC"
    },
    {
        id: 6,
        name: "Monopoly",
        image_url: "https://play-lh.googleusercontent.com/NK3jm7raPg8ZvEQ9k9Clombw61MFdiGtqJtnGhnhhqdr2z-o6EQFx_BmIGpZFUdiKjh1=w3072-h1376",
        small_image_url: "https://play-lh.googleusercontent.com/KSVMAkgusrMMFPwbZVWUhBZy0DfaUKIYI7VDDfxZ50EQsWMfReDaohw-5tnLgaFGqRo=s360",
        price: 18.00,
        description: "Compre, venda e planeje seu caminho para a riqueza onde quer que esteja. Jogue cara a cara com seus amigos e familiares com o chat de vídeo multijogador integrado! É o jogo de tabuleiro Hasbro MONOPOLY sem anúncios online e offline!",
        categories: ["Jogo de Tabuleiro", "Casual", "Em Turnos"],
        platform: "Mobile"
    },
    {
        id: 7,
        name: "Cyberpunk 2077",
        image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1621944801",
        small_image_url: "https://i1.sndcdn.com/artworks-kb2KdSqUgEytRcfh-VkRYyg-t240x240.jpg",
        price: 200.00,
        description: "Cyberpunk 2077 é uma história de ação e aventura de mundo aberto ambientada em Night City, uma megalópole obcecada por poder, glamour e biomodificações. Você joga como V, um mercenário fora da lei atrás de um implante único que carrega a chave da imortalidade.",
        categories: ["Cyberpunk", "Mundo Aberto", "RPG"],
        platform: "PC"
    },
    {
        id: 8,
        name: "Slay the Spire",
        image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header.jpg?t=1592339399",
        small_image_url: "https://play-lh.googleusercontent.com/ryhmN3MoDNXB_lsX85BaAk-N8errnNbS_KIYex1wgeBEfUzoYKFXQ1_ane9ASV19NOI=s360",
        price: 19.00,
        description: "Nós combinamos jogos de carta com roguelike para fazer o melhor deckbuilder single player que pudemos. Monte um deck único, encontre criaturas bizarras, descubra relíquias de imenso poder, e Destrua o Pináculo(Slay The Spire)!",
        categories: ["Batalha de Cartas", "Roguelike", "Estratégia"],
        platform: "Mobile"
    }
]

export const pc_games = games.filter(game => game.platform == "PC")

export const mobile_games = games.filter(game => game.platform == "Mobile")

/* ,
{
    id: 0,
    name: "",
    image_url: "",
    small_image_url: "",
    price: 00.00,
    description: "",
    categories: [],
    platform: ""
} */