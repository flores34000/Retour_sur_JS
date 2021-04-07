const books = [
    { id: 133712, title: 'Gatsby le magnifique', rentedCount: 39 },
    { id: 237634, title: 'A la recherche du temps,perdu', rentedCount: 28 },
    { id: 873495, title: 'Orgueil & Préjugés', rentedCount: 56 },
    { id: 450915, title: 'Les frères Karamazov', rentedCount: 55 },
    { id: 837636, title: 'Dans les forêts de Sibérie', rentedCount: 15 },
    { id: 450911, title: 'Pourquoi j\'ai mangé mon père', rentedCount: 45 },
    { id: 675651, title: 'Et on tuera tous les affreux', rentedCount: 36 },
    { id: 888475, title: 'Le meilleur des mondes', rentedCount: 58 },
    { id: 364442, title: 'La disparition', rentedCount: 33 },
    { id: 635411, title: 'La lune seule le sait', rentedCount: 43 },
    { id: 465638, title: 'Voyage au centre de la Terre', rentedCount: 34},
    { id: 748147, title: 'Guerre et Paix', rentedCount: 19 },
  ];
console.log("")
//   Sors-moi une liste de tous les titres des livres du CDI
console.log('Sors-moi une liste de tous les titres des livres du CDI')

books.forEach((itemBook) => { 
    console.log(`titre: ${itemBook.title}`)
}

)

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("")
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
const emprunte = books.every(itemBook => itemBook.rentedCount > 0);
console.log(emprunte)


// Quel est livre le plus emprunté ?
console.log("")
console.log("Quel est livre le plus emprunté ?")

let plus = books.sort((a, b) => b.rentedCount - a.rentedCount)[0].title

console.log(plus)


//  Quel est le livre le moins emprunté ?
console.log("")
console.log("Quel est le livre le moins emprunté ?")

let moins = books.sort((a, b) => a.rentedCount - b.rentedCount)[0].title

console.log(moins)


// Supprime le livre avec l'ID 133712
console.log("")
console.log("Supprime le livre avec l'ID 133712")

const filterArray = books.filter((item) => item.id !== 133712);
console.log(filterArray)


