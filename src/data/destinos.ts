export type Destino = {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  localizacao: string;
  melhorEpoca: string;
};

export const destinos: Destino[] = [
  {
    id: "gramado",
    nome: "Gramado",
    imagem:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    descricao:
      "Conhecida pelo clima europeu, Gramado encanta com arquitetura charmosa, gastronomia variada e eventos sazonais.",
    localizacao: "Rio Grande do Sul, Brasil",
    melhorEpoca: "Inverno e Natal Luz (junho a dezembro)",
  },
  {
    id: "fernando-de-noronha",
    nome: "Fernando de Noronha",
    imagem:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    descricao:
      "Arquipélago com praias paradisíacas, águas cristalinas e excelente vida marinha para mergulho e contemplação.",
    localizacao: "Pernambuco, Brasil",
    melhorEpoca: "Agosto a fevereiro",
  },
  {
    id: "foz-do-iguacu",
    nome: "Foz do Iguaçu",
    imagem:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    descricao:
      "Destino famoso pelas Cataratas do Iguaçu e pela combinação de natureza exuberante com infraestrutura turística.",
    localizacao: "Paraná, Brasil",
    melhorEpoca: "Março a maio e agosto a outubro",
  },
  {
    id: "lençois-maranhenses",
    nome: "Lençóis Maranhenses",
    imagem:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
    descricao:
      "Parque nacional com dunas e lagoas sazonais de águas transparentes, ideal para paisagens únicas e aventura.",
    localizacao: "Maranhão, Brasil",
    melhorEpoca: "Junho a setembro",
  },
];
