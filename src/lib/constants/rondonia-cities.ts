export const RONDONIA_CITIES = [
    "Alta Floresta D'Oeste",
    "Alto Alegre dos Parecis",
    "Alto Paraíso",
    "Alvorada D'Oeste",
    "Ariquemes",
    "Buritis",
    "Cabixi",
    "Cacaulândia",
    "Cacoal",
    "Campo Novo de Rondônia",
    "Candeias do Jamari",
    "Castanheiras",
    "Cerejeiras",
    "Chupinguaia",
    "Colorado do Oeste",
    "Corumbiara",
    "Costa Marques",
    "Cujubim",
    "Espigão D'Oeste",
    "Governador Jorge Teixeira",
    "Guajará-Mirim",
    "Itapuã do Oeste",
    "Jaru",
    "Ji-Paraná",
    "Machadinho D'Oeste",
    "Ministro Andreazza",
    "Mirante da Serra",
    "Monte Negro",
    "Nova Brasilândia D'Oeste",
    "Nova Mamoré",
    "Nova União",
    "Novo Horizonte do Oeste",
    "Ouro Preto do Oeste",
    "Parecis",
    "Pimenta Bueno",
    "Pimenteiras do Oeste",
    "Porto Velho",
    "Presidente Médici",
    "Primavera de Rondônia",
    "Rio Crespo",
    "Rolim de Moura",
    "Santa Luzia D'Oeste",
    "São Felipe D'Oeste",
    "São Francisco do Guaporé",
    "São Miguel do Guaporé",
    "Seringueiras",
    "Teixeirópolis",
    "Theobroma",
    "Urupá",
    "Vale do Anari",
    "Vale do Paraíso",
    "Vilhena"
];

export const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
};
