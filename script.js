const productsData = [
{
id: 1,
title: "React de A a Z",
tag: "Curso Online",
description: "Domine a biblioteca mais popular do mercado, do zero ao profissional.",
price: 199.90,
imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop"
},
{
id: 2,
title: "Guia de CSS Moderno",
tag: "Ebook",
description: "Flexbox, Grid, Animações e as melhores práticas para layouts incríveis.",
price: 49.90,
imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop"
},
{
id: 3,
title: "Node.js Escalável",
tag: "Curso Online",
description: "Construa APIs robustas e de alta performance com Node.js e TypeScript.",
price: 249.90,
imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=400&auto=format&fit=crop"
},
{
id: 4,
title: "UI/UX para Desenvolvedores",
tag: "Ebook",
description: "Princípios de design essenciais para criar interfaces bonitas e intuitivas.",
price: 79.90,
imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=400&auto=format&fit=crop"
}
];

function formatPrice(price) {
return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}


function renderProductGrid() {
const grid = document.getElementById('product-grid');
grid.innerHTML = ''; // Limpa antes de renderizar

productsData.forEach(product => {
// Cria a estrutura do cartão
const card = document.createElement('div');
card.classList.add('product-card');

card.innerHTML = `
<img src="${product.imageUrl}" alt="${product.title}">
<div class="product-info">
<span class="product-tag">${product.tag}</span>
<h3>${product.title}</h3>
<p class="product-description">${product.description}</p>
<div class="product-price-btn">
<span class="product-price">${formatPrice(product.price)}</span>
<button class="btn-buy" onclick="alert('Produto ${product.id} adicionado ao carrinho!')">Comprar</button>
</div>
</div>
`;

grid.appendChild(card);
});
}
renderProductGrid();