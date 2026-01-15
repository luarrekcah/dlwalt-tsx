export interface Unit {
    name: string;
    address: string;
    cnpj?: string;
    phones: string[];
    email: string;
    mapEmbedUrl: string;
}

export const units: Unit[] = [
    {
        name: "Matriz - Ariquemes/RO",
        address: "Av. Canaã, 2500 - St. 03, Ariquemes - RO, 76870-164",
        cnpj: "26.711.744/0001-08",
        phones: ["+55 (69) 99369-5702"],
        email: "contato@dwalt.net",
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2430854375043!2d-63.045994724969916!3d-9.913701490187336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93cc90c1e2c420cf%3A0xfd5a1fbeea15df07!2sDWALT%20Energia%20Solar%20%7C%20Ariquemes%20%E2%80%93%20RO!5e0!3m2!1spt-BR!2sbr!4v1768353479963!5m2!1spt-BR!2sbr",
    },  {
        name: "Unidade - Porto Velho/RO",
        address: "R. Mte. Gabriel, 5368 - Flodoaldo Pontes Pinto, Porto Velho - RO, 76820-620",
        cnpj: "26.711.744/0001-08",
        phones: ["+55 (69) 99369-5702"],
        email: "contato@dwalt.net",
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1009526.0342088786!2d-65.08739382187501!3d-8.742613899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92324314cbdbec11%3A0xd3f63a28d0042aaf!2sDWALT%20Energia%20Solar%20%7C%20Porto%20Velho%20%E2%80%93%20RO!5e0!3m2!1spt-BR!2sbr!4v1768353593347!5m2!1spt-BR!2sbr",
    }, {
        name: "Unidade - Rolim de Moura/RO",
        address: "Av. 25 de Agosto - Centro, Rolim de Moura - RO, 76940-000",
        cnpj: "26.711.744/0001-08",
        phones: ["+55 (69) 99369-5702"],
        email: "contato@dwalt.net",
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.5633154110687!2d-61.77601800000001!3d-11.725310400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93c86b15415371a5%3A0x12d9867ca24b5768!2sDWALT%20Energia%20Solar%20%7C%20Rolim%20de%20Moura%20%E2%80%93%20RO!5e0!3m2!1spt-BR!2sbr!4v1768500880877!5m2!1spt-BR!2sbr",
    },
];
