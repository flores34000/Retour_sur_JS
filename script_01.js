const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 },
  ];
  

//   Sors une array qui ne contient que le prénom et le nom des entrepreneurs
console.log("Sors une array qui ne contient que le prénom et le nom des entrepreneurs")


const entrepreneursNames = entrepreneurs.map(item =>{
    arrayName = {};
    
    arrayName.first = item.first
    arrayName.last = item.last
    return arrayName
})

console.log(entrepreneursNames)
console.log("")


// Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui.
console.log("")
console.log("Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui.")
 const entrepreneursAge = entrepreneurs.map(item =>{
    arrayAge = {};
    arrayAge.first = item.first
    arrayAge.last = item.last
    arrayAge.age = 2021-item.year
    return arrayAge
 })

 console.log(entrepreneursAge)

 console.log("")
 //  Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName
//  Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 uniquement
 console.log("Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName et Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 uniquement")
 
 const entrepreneursChangeLastName = entrepreneurs.map(item => {
     arrayChangeLastName = {};
     arrayChangeLastName.firstName = item.first
     arrayChangeLastName.lastName = item.last
     arrayChangeLastName.age = 2021-item.year
     return arrayChangeLastName
    }); 

    console.log(entrepreneursChangeLastName)
      

    var filtre = entrepreneursChangeLastName.filter(function(item){
        return item.age <= 50 && item.age  >= 40
        
        })

        console.log(filtre)
        
 

