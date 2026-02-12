export interface Testimonial {
    id: number;
    name: string;
    location: string;
    avatar: string;
    testimonial: string;
    stars: number;
    url?: string;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 5,
        name: "Jeane Bastos",
        location: "Presidente Médici - Rondônia",
        avatar: "https://api.dwalt.net/uploads/testimonials/1770900475691-6575.png",
        testimonial: "Excelente atendimento e resultado garantido.",
        stars: 5,
        url: "https://www.youtube.com/embed/qW4rQUGwkC8"
    },
    {
        id: 4,
        name: "Cleberson do Tio Porquinho",
        location: "Rondônia",
        avatar: "https://api.dwalt.net/uploads/testimonials/1770834609712-3113.png",
        testimonial: "Muito satisfeito com a economia e o serviço prestado.",
        stars: 5,
        url: "https://www.youtube.com/embed/MkkH5T10tA8"
    },
    {
        id: 3,
        name: "Janaína Brito",
        location: "Rondônia",
        avatar: "https://api.dwalt.net/uploads/testimonials/1770834574395-8954.png",
        testimonial: "Cliente da Dwalt Energia desde dezembro e super satisfeita! Além do atendimento impecável e suporte presencial, o resultado é incrível: ar-condicionado ligado o dia todo e zero preocupação com a conta de luz. Liberdade e economia de verdade!",
        stars: 5,
        url: "https://www.youtube.com/embed/3QNLMXys2L8"
    },
    {
        id: 2,
        name: "Joelma",
        location: "Rondônia",
        avatar: "https://api.dwalt.net/uploads/testimonials/1770834555322-7130.png",
        testimonial: "Tenho o prazer de chegar em casa à noite e aproveitar o conforto que a energia solar me proporciona. A DWalt me ofereceu o melhor plano, explicou todo o processo presencialmente e transmitiu muita confiança. Realizei um sonho ao adquirir energia solar com a DWalt.",
        stars: 5,
        url: "https://www.youtube.com/embed/0P_d8ghlMww"
    },
    {
        id: 1,
        name: "Édson Lopes Leal",
        location: "Ariquemes - RO",
        avatar: "https://api.dwalt.net/uploads/testimonials/1770834139404-7900.png",
        testimonial: "Comprei o sistema de energia solar da DWalt Energia na Black Friday há 8 meses. Antes, minha conta de luz era em torno de R$ 800 e hoje pago apenas R$ 160, praticamente só a taxa mínima. Estou extremamente satisfeito com o resultado.",
        stars: 5,
        url: "https://www.youtube.com/embed/_dNoknmsouo"
    }
];
