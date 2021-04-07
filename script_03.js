const users = [
    { id: 1, email: "dwainwatsica@blockluettgen.org", firstName: "Della", lastName: "Noél", sex: "F", revenue: 3700, country: "Colombia" },
    { id: 2, email: "berthaabbott@quigley.io", firstName: "Rodney", lastName: "Dumas", sex: "M", revenue: 9100, country: "Germany" },
    { id: 3, email: "willodeanchristiansen@kreigerkoch.biz", firstName: "Danny", lastName: "Morin", sex: "M", revenue: 0, country: "United States" },
    { id: 4, email: "nikki@monahan.com", firstName: "Birgit", lastName: "Dubois", sex: "F", revenue: 7700, country: "Great Britain" },
    { id: 5, email: "albinafritsch@bartell.net", firstName: "Audra", lastName: "Hénry", sex: "F", revenue: 0, country: "Germany" },
    { id: 6, email: "laurencethompson@schaefer.org", firstName: "Doreatha", lastName: "Nguyén", sex: "F", revenue: 0, country: "France" },
    { id: 7, email: "floratreutel@hageneshahn.info", firstName: "Vergie", lastName: "Marchal", sex: "F", revenue: 3900, country: "France" },
    { id: 8, email: "kendallkunze@bechtelar.org", firstName: "Eloy", lastName: "Rivieré", sex: "M", revenue: 0, country: "France" },
    { id: 9, email: "matt@jakubowskiwitting.info", firstName: "Therese", lastName: "Dupont", sex: "F", revenue: 1500, country: "France" },
    { id: 10, email: "alleneshanahan@lindgren.info", firstName: "Dora", lastName: "Rousséau", sex: "F", revenue: 0, country: "Great Britain" },
    { id: 11, email: "vito@hayesbartoletti.org", firstName: "Robt", lastName: "Meyér", sex: "M", revenue: 800, country: "France" },
    { id: 12, email: "chadwick@anderson.io", firstName: "Vincenzo", lastName: "Jéan", sex: "M", revenue: 0, country: "Germany" },
    { id: 13, email: "asley@stroman.info", firstName: "Myong", lastName: "Lopéz", sex: "F", revenue: 0, country: "Germany" },
    { id: 14, email: "hank@huelkilback.com", firstName: "Horacio", lastName: "Rousséau", sex: "M", revenue: 0, country: "France" },
    { id: 15, email: "buckwaelchi@gusikowski.net", firstName: "Rhonda", lastName: "Noél", sex: "F", revenue: 6600, country: "Czech Republic" },
    { id: 16, email: "clay@greenfelder.co", firstName: "Julienne", lastName: "Carpéntier", sex: "F", revenue: 0, country: "Great Britain" },
    { id: 17, email: "clarettarunolfsdottir@vonruedenwolff.org", firstName: "Maudie", lastName: "Brunét", sex: "F", revenue: 0, country: "Great Britain" },
    { id: 18, email: "dorris@nolan.name", firstName: "Dirk", lastName: "Rodriguéz", sex: "M", revenue: 0, country: "Germany" },
    { id: 19, email: "ronspencer@waltercarter.biz", firstName: "Ernie", lastName: "Collét", sex: "M", revenue: 0, country: "Great Britain" },
    { id: 20, email: "armandina@kshlerin.biz", firstName: "Arleen", lastName: "Roux", sex: "F", revenue: 0, country: "Taiwan" },
    { id: 21, email: "penelope@crookszulauf.net", firstName: "Romain", lastName: "Masson", sex: "N/A", revenue: 9400, country: "United States" },
    { id: 22, email: "cristenjenkins@hermiston.name", firstName: "Jenelle", lastName: "Léroy", sex: "F", revenue: 0, country: "Palau" },
    { id: 23, email: "lucius@bailey.net", firstName: "Alphonse", lastName: "Rey", sex: "M", revenue: 4500, country: "Libyan Arab Jamahiriya" },
    { id: 24, email: "delbertcain@lebsackwhite.co", firstName: "Nettie", lastName: "Roché", sex: "F", revenue: 1100, country: "Sweden" },
    { id: 25, email: "benton@kozeyankunding.org", firstName: "Mohamed", lastName: "Fontainé", sex: "M", revenue: 0, country: "Great Britain" },
    { id: 26, email: "fredrick@paucek.io", firstName: "Jacqueline", lastName: "Moulin", sex: "F", revenue: 0, country: "Germany" },
    { id: 27, email: "keila@welch.info", firstName: "Jess", lastName: "Girard", sex: "M", revenue: 1500, country: "United States" },
    { id: 28, email: "danicasenger@prosacco.com", firstName: "Heath", lastName: "Laurént", sex: "M", revenue: 0, country: "Kiribati" },
    { id: 29, email: "becki@treutel.com", firstName: "Terry", lastName: "Carpéntier", sex: "M", revenue: 0, country: "United States" },
    { id: 30, email: "elvakoch@ondrickakovacek.org", firstName: "Neal", lastName: "Boyér", sex: "M", revenue: 2300, country: "Denmark" },
    { id: 31, email: "florenciohickle@mann.net", firstName: "Xiao", lastName: "Roché", sex: "F", revenue: 4000, country: "Great Britain" },
    { id: 32, email: "vidaanderson@wuckert.com", firstName: "Donnette", lastName: "Vincent", sex: "F", revenue: 0, country: "United States" },
    { id: 33, email: "kaneshayost@schneider.io", firstName: "Venessa", lastName: "Brunét", sex: "F", revenue: 0, country: "Germany" },
    { id: 34, email: "mariette@mckenzie.io", firstName: "Tania", lastName: "Martinéz", sex: "F", revenue: 0, country: "Puerto Rico" },
    { id: 35, email: "dean@harber.name", firstName: "Dominique", lastName: "Brun", sex: "M", revenue: 0, country: "Afghanistan" },
    { id: 36, email: "norris@ondricka.name", firstName: "Katherin", lastName: "Morél", sex: "F", revenue: 0, country: "France" },
    { id: 37, email: "benedict@pacocha.co", firstName: "Esteban", lastName: "Carré", sex: "M", revenue: 0, country: "France" },
    { id: 38, email: "stefanygerhold@bernier.org", firstName: "Dwain", lastName: "Mullér", sex: "M", revenue: 2000, country: "Germany" },
    { id: 39, email: "merle@lindgren.biz", firstName: "Alan", lastName: "Giraud", sex: "M", revenue: 0, country: "Germany" },
    { id: 40, email: "hyewalsh@tromplockman.name", firstName: "Kasie", lastName: "Le roux", sex: "F", revenue: 0, country: "Botswana" },
    { id: 41, email: "deidreledner@stracke.io", firstName: "Weldon", lastName: "Charlés", sex: "M", revenue: 0, country: "Ecuador" },
    { id: 42, email: "horacekemmer@stanton.biz", firstName: "Jamie", lastName: "Gaillard", sex: "M", revenue: 0, country: "Niue" },
    { id: 43, email: "arliegerhold@kertzmann.name", firstName: "Benjamin", lastName: "Roché", sex: "M", revenue: 0, country: "France" },
    { id: 44, email: "rickiebode@kihn.name", firstName: "Rosalva", lastName: "Morin", sex: "F", revenue: 0, country: "United States" },
    { id: 45, email: "lanette@dooley.com", firstName: "Graham", lastName: "Colin", sex: "M", revenue: 0, country: "United States" },
    { id: 46, email: "ellen@shields.info", firstName: "Bunny", lastName: "Rolland", sex: "F", revenue: 1300, country: "United States" },
    { id: 47, email: "vito@gutmannkling.net", firstName: "Felice", lastName: "Dufour", sex: "F", revenue: 6800, country: "France" },
    { id: 48, email: "kiethmante@schroeder.name", firstName: "Archie", lastName: "Bourgéois", sex: "M", revenue: 0, country: "Chad" },
    { id: 49, email: "caypfannerstill@torphy.co", firstName: "Rosamaria", lastName: "Renaud", sex: "F", revenue: 2800, country: "Germany" },
    { id: 50, email: "sanorabode@oconnernienow.info", firstName: "Sam", lastName: "Fléury", sex: "M", revenue: 3000, country: "Great Britain" },
    { id: 51, email: "robin@maggio.info", firstName: "Clair", lastName: "Robért", sex: "M", revenue: 0, country: "Serbia" },
    { id: 52, email: "homer@purdy.biz", firstName: "Tim", lastName: "Guyot", sex: "M", revenue: 0, country: "Dominica" },
    { id: 53, email: "lawanadubuque@feeneydickinson.info", firstName: "Louna", lastName: "Noél", sex: "N/A", revenue: 0, country: "Puerto Rico" },
    { id: 54, email: "andree@weimann.co", firstName: "Michele", lastName: "Garcia", sex: "F", revenue: 1000, country: "Great Britain" },
    { id: 55, email: "nellyrau@corwin.org", firstName: "Fabian", lastName: "Poiriér", sex: "M", revenue: 2800, country: "France" },
    { id: 56, email: "napoleonhuel@damore.biz", firstName: "Cora", lastName: "Maillard", sex: "F", revenue: 0, country: "Great Britain" },
    { id: 57, email: "ling@braunturner.name", firstName: "Jesica", lastName: "Dufour", sex: "F", revenue: 0, country: "Great Britain" },
    { id: 58, email: "vergie@mccullough.co", firstName: "Jordon", lastName: "Philippé", sex: "M", revenue: 3800, country: "Great Britain" },
    { id: 59, email: "dorthea@lind.io", firstName: "Arcelia", lastName: "Maillard", sex: "F", revenue: 4800, country: "Egypt" },
    { id: 60, email: "rebbeccahamill@monahan.name", firstName: "Chi", lastName: "Pons", sex: "M", revenue: 0, country: "United States" },
    { id: 61, email: "kirbynolan@ward.info", firstName: "Luciano", lastName: "Lucas", sex: "M", revenue: 7600, country: "Great Britain" },
    { id: 62, email: "enidluettgen@toy.org", firstName: "Walker", lastName: "Francois", sex: "M", revenue: 0, country: "Great Britain" },
    { id: 63, email: "nestormayert@runolfon.net", firstName: "Hilton", lastName: "Paris", sex: "M", revenue: 0, country: "United States" },
    { id: 64, email: "deloragutmann@tillman.com", firstName: "Treena", lastName: "Lévêque", sex: "F", revenue: 0, country: "United States" },
    { id: 65, email: "coltonwalsh@wintheiser.info", firstName: "Ossie", lastName: "Pérrin", sex: "F", revenue: 4200, country: "France" },
    { id: 66, email: "rileyrenner@daniel.com", firstName: "Lorri", lastName: "Roussél", sex: "F", revenue: 4900, country: "Germany" },
    { id: 67, email: "darrickschimmel@raynor.net", firstName: "Vasiliki", lastName: "Morin", sex: "F", revenue: 0, country: "Great Britain" },
    { id: 68, email: "taunyaratke@rutherfordstracke.io", firstName: "Jess", lastName: "Charlés", sex: "M", revenue: 0, country: "United States" },
    { id: 69, email: "meridithwuckert@doylehaag.info", firstName: "Tamar", lastName: "Dupuy", sex: "F", revenue: 0, country: "United States" },
    { id: 70, email: "shirl@wunsch.net", firstName: "Jonathan", lastName: "Lemoiné", sex: "M", revenue: 1200, country: "Great Britain" },
    { id: 71, email: "jeanetteheller@haag.net", firstName: "Paz", lastName: "Julién", sex: "F", revenue: 600, country: "Botswana" },
    { id: 72, email: "leigh@oreillyullrich.name", firstName: "Will", lastName: "Charpéntier", sex: "M", revenue: 5200, country: "Germany" },
    { id: 73, email: "almabogisich@dare.com", firstName: "Cornell", lastName: "Aubért", sex: "M", revenue: 0, country: "United States" },
    { id: 74, email: "brandon@waelchiortiz.io", firstName: "Kalyn", lastName: "Rolland", sex: "F", revenue: 9200, country: "United States" },
    { id: 75, email: "damion@rohan.info", firstName: "Edna", lastName: "André", sex: "F", revenue: 0, country: "United States" },
    { id: 76, email: "quinn@kling.net", firstName: "Sacha", lastName: "Lucas", sex: "N/A", revenue: 3600, country: "Great Britain" },
    { id: 77, email: "hungjacobson@harris.co", firstName: "Dwain", lastName: "Chevaliér", sex: "M", revenue: 0, country: "United States" },
    { id: 78, email: "burtonjacobs@abernathy.biz", firstName: "Ok", lastName: "Pons", sex: "F", revenue: 3800, country: "Germany" },
    { id: 79, email: "alane@block.com", firstName: "Bryant", lastName: "Fourniér", sex: "M", revenue: 0, country: "United States" },
    { id: 80, email: "joelle@erdman.net", firstName: "Frances", lastName: "Roussél", sex: "M", revenue: 0, country: "Great Britain" },
    { id: 81, email: "walton@feest.info", firstName: "Margeret", lastName: "Fernandéz", sex: "F", revenue: 3100, country: "United States" },
    { id: 82, email: "eneidarunolfon@lubowitz.name", firstName: "Dodie", lastName: "Durand", sex: "F", revenue: 9200, country: "United States" },
    { id: 83, email: "crystarutherford@baumbachhane.net", firstName: "Milo", lastName: "Barré", sex: "M", revenue: 0, country: "France" },
    { id: 84, email: "jeffery@maggio.com", firstName: "Evan", lastName: "Dubois", sex: "M", revenue: 1100, country: "Montenegro" },
    { id: 85, email: "lilianbuckridge@okon.name", firstName: "Horacio", lastName: "Giraud", sex: "M", revenue: 0, country: "Germany" },
    { id: 86, email: "mickey@grahampredovic.info", firstName: "Marge", lastName: "Bénoit", sex: "F", revenue: 0, country: "Uganda" },
    { id: 87, email: "isaacbuckridge@barrowscrist.biz", firstName: "Patrick", lastName: "Bonnét", sex: "M", revenue: 0, country: "United States" },
    { id: 88, email: "adrian@donnelly.info", firstName: "Lynwood", lastName: "Masson", sex: "M", revenue: 0, country: "Germany" },
    { id: 89, email: "vanita@torphy.info", firstName: "Jan", lastName: "Laurént", sex: "M", revenue: 0, country: "United States" },
    { id: 90, email: "eloy@ryan.biz", firstName: "Jose", lastName: "Aubért", sex: "M", revenue: 0, country: "Cambodia" },
    { id: 91, email: "andreas@kuhicjones.io", firstName: "Grisel", lastName: "Poiriér", sex: "F", revenue: 0, country: "Germany" },
    { id: 92, email: "margeretcartwright@conroy.biz", firstName: "Terence", lastName: "Dupont", sex: "M", revenue: 0, country: "Germany" },
    { id: 93, email: "maryannwehner@fisher.biz", firstName: "Renato", lastName: "Paris", sex: "M", revenue: 2200, country: "France" },
    { id: 94, email: "kyle@hyattkonopelski.org", firstName: "Mavis", lastName: "Fléury", sex: "F", revenue: 0, country: "France" },
    { id: 95, email: "vashti@nolanritchie.biz", firstName: "Maria", lastName: "Gautiér", sex: "M", revenue: 3800, country: "United States" },
    { id: 96, email: "donettehintz@huelsbrakus.info", firstName: "Jesica", lastName: "Martinéz", sex: "F", revenue: 7400, country: "Swaziland" },
    { id: 97, email: "enriquewilliamson@goodwintrantow.co", firstName: "Bennett", lastName: "Roux", sex: "M", revenue: 4900, country: "French Guiana" },
    { id: 98, email: "namwillms@auer.co", firstName: "Shela", lastName: "Marié", sex: "F", revenue: 5400, country: "United States" },
    { id: 99, email: "alannalynch@schaden.co", firstName: "Agustin", lastName: "Sanchéz", sex: "M", revenue: 0, country: "Afghanistan" },
    { id: 100, email: "jacqueline@rohan.net", firstName: "Chau", lastName: "Noél", sex: "F", revenue: 0, country: "Nigeria" },
    { id: 101, email: "dillon@mosciski.org", firstName: "Virgil", lastName: "Roussél", sex: "M", revenue: 0, country: "Germany" },
    { id: 102, email: "ivoryreichert@ernserblock.org", firstName: "Cathy", lastName: "Philippé", sex: "F", revenue: 0, country: "Great Britain" },
    { id: 103, email: "starrklocko@goodwin.org", firstName: "Nellie", lastName: "Méunier", sex: "F", revenue: 0, country: "Great Britain" },
    { id: 104, email: "kumpollich@hamillryan.com", firstName: "Maryanna", lastName: "Aubért", sex: "F", revenue: 0, country: "United States" },
    { id: 105, email: "jeseniaswaniawski@vonrueden.io", firstName: "Robena", lastName: "Lopéz", sex: "F", revenue: 0, country: "United States" },
    { id: 106, email: "lon@witting.co", firstName: "Jimmie", lastName: "Bréton", sex: "M", revenue: 0, country: "United States" },
    { id: 107, email: "norbertquitzon@cremin.org", firstName: "Andreas", lastName: "Sanchéz", sex: "M", revenue: 9400, country: "France" },
    { id: 108, email: "natisha@lowe.net", firstName: "Augustus", lastName: "Pétit", sex: "M", revenue: 0, country: "Great Britain" },
    { id: 109, email: "garrett@ziemann.com", firstName: "Ezra", lastName: "Garcia", sex: "M", revenue: 0, country: "Great Britain" },
    { id: 110, email: "michel@denesik.co", firstName: "Yuriko", lastName: "Louis", sex: "F", revenue: 0, country: "France" }
   ]

    // Quel est le chiffre d'affaires moyen 
    console.log("Quel est le chiffre d'affaires moyen ")

    const revenue = users.map(itemUser => {
        arrayRevenue = {}
        arrayRevenue = itemUser.revenue
        return arrayRevenue
    })
    let moyeneRevenue = revenue.reduce((a,b) => {
        
        return a + b
    })
    console.log( parseInt(moyeneRevenue/users.length))

    //Parmi les utilisateurs ayant rapporté de l'argent, quel est le chiffre d'affaires moyen d'un utilisateur ?
    console.log("") 
    console.log("Parmi les utilisateurs ayant rapporté de l'argent, quel est le chiffre d'affaires moyen d'un utilisateur ?") 

   

    const filterZero = users.filter((item) => item.revenue !== 0);

    const onlyRevenue = filterZero.map((item) => {
        arrayOnlyRevenue = {}
        arrayOnlyRevenue = item.revenue
        return arrayOnlyRevenue
    })

    let moyenSupZero = onlyRevenue.reduce((a,b) =>{
        return a + b
    })

    console.log(moyenSupZero/onlyRevenue.length)

    // Combien avons-nous gagné d'argent au total ?
    console.log("")
    console.log("Combien avons-nous gagné d'argent au total ?")

   const total = users.map((user) => {
       arrayTotal = {}
       arrayTotal = user.revenue
       return arrayTotal
   })
   let totalRevenue = total.reduce((a,b) => {
       return a + b
   })
   console.log(totalRevenue)

//    Combien avons-nous d'utilisateurs en France ?
console.log("")
console.log("Combien avons-nous d'utilisateurs en France ?")

const userFrench = users.filter((item) => item.country === 'France');
console.log(userFrench.length)


// Parmi ces utilisateurs, combien avons-nous de clients payants en France ?
console.log("")
console.log("Parmi ces utilisateurs, combien avons-nous de clients payants en France ?")

const userFrenchPayant = userFrench.filter((item) => item.revenue !== 0)
console.log(userFrenchPayant.length)


// Donne-moi le chiffre d'affaires réparti dans nos 4 pays les plus représentés (Allemagne, États-Unis, France, Grande-Bretagne)
console.log("")
console.log("Donne-moi le chiffre d'affaires réparti dans nos 4 pays les plus représentés (Allemagne, États-Unis, France, Grande-Bretagne)")
console.log("")
console.log("Allemagne chiffre d'affaires:")
const allemagne = users.filter((item) => item.country === 'Germany');

const caAllemagne = allemagne.map((item) =>{
    arrayCaAllemagne = {}
    arrayCaAllemagne = item.revenue
    return arrayCaAllemagne
})
let sumCaAllemagne = caAllemagne.reduce((a,b) => {
    return a + b
})

console.log(sumCaAllemagne)

console.log("")
console.log("Etats-unis chiffre d'affaires:")
const etatsUnis = users.filter((item) => item.country === 'United States');

const caEtatsUnis = etatsUnis.map((item) =>{
    arraycaEtatsUnis = {}
    arraycaEtatsUnis = item.revenue
    return arraycaEtatsUnis
})
let sumcaEtatsUnis= caEtatsUnis.reduce((a,b) => {
    return a + b
})

console.log(sumcaEtatsUnis)


console.log("")
console.log("France chiffre d'affaires:")
const france = users.filter((item) => item.country === 'France');

const caFrance = france.map((item) =>{
    arraycaFrance = {}
    arraycaFrance = item.revenue
    return arraycaFrance
})
let sumcaFrance= caFrance.reduce((a,b) => {
    return a + b
})

console.log(sumcaFrance)



console.log("")
console.log("Grande-Bretagne chiffre d'affaires:")
const grandeBretagne = users.filter((item) => item.country === 'Great Britain');

const cagrandeBretagne = grandeBretagne.map((item) =>{
    arraycagrandeBretagne = {}
    arraycagrandeBretagne = item.revenue
    return arraycagrandeBretagne
})
let sumcagrandeBretagne = cagrandeBretagne.reduce((a,b) => {
    return a + b
})

console.log(sumcagrandeBretagne)


// Fais-moi la liste de tous les pays dans lesquels nous avons gagné de l'argent ?
console.log("")
console.log("Fais-moi la liste de tous les pays dans lesquels nous avons gagné de l'argent ?")


    const listPays = filterZero.map((item) => {
        arrayListPays = {}
        arrayListPays = item.country
        return arrayListPays
    })
    const uniquelist = new Set(listPays)
    const arrayUniquelist = [...uniquelist]
    console.log(` ${arrayUniquelist} `)