/* ## Buscando e contando dados em Array

Baseado no array de livros por categorias abaixo, faça os
seguintes desafios:

    * contar o numero de categorias e o numero de livros em cada categoria
    * contar o numero e autores
    * mostrar livros do autor Augusto Cury
    * transformar a função acima em uma função que irá receber
    o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionaria",
                author: "T. Harv Exer",
            },
            {
                title: "Homem rico",
                author: "Jota",
            },
            { 
                title: "Pai rico",
                author: "Elizah",
            },
        ],
    },
    {
        category: "Inteligencia",
        books: [
            {
                title: "Insubistituivel",
                author: "Avery",
            },
            {
                title: "Ansiedade",
                author: "Augusto Cury",
            },
            { 
                title: "Pessoas eficazes",
                author: "Augusto Cury",
            },
        ],
    },
]

const totalCategories = booksByCategory.length 
console.log(totalCategories)

for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}
countAuthors()

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

     console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('jota')
  
