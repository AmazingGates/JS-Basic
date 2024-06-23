const companies = [
    {name: "company One", catergory: "Finance", start: 1981, end: 2003},
    {name: "company Two", catergory: "Retail", start: 1992, end: 2008},
    {name: "company Three", catergory: "Auto", start: 1999, end: 2007},
    {name: "company Four", catergory: "Retail", start: 1989, end: 2010},
    {name: "company Five", catergory: "Technology", start: 2009, end: 2014},
    {name: "company Six", catergory: "Finance", start: 1987, end: 2010},
    {name: "company Seven", catergory: "Auto", start: 1986, end: 1996},
    {name: "company Eight", catergory: "Technology", start: 2011, end: 2016},
    {name: "company Nine", catergory: "Retail", start: 1981, end: 1989}
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// Basic for loop()
for (let i =0; i < companies.length; i++) {
    console.log(companies[i])
}
// Basic for loop()

///////////////////

// Basic forEach()
companies.forEach(function(company) {
    console.log(company.catergory)
})
// Basic forEach()

//////////////////


let cannnDrink = []
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        cannnDrink.push(ages[i])
    }
}
console.log(cannnDrink)

// Basic filter()
const cannDrink = ages.filter(function(age) {
  if (age >= 21) {
    return true
  }
})
console.log(cannDrink)
// Basic filter()

/////////////////////

// Basic filter() using Arrow()
const canDrink = ages.filter(age => age >= 21)

console.log(canDrink)

const retailCompaines = companies.filter(company => company.catergory === "Retail")
console.log(retailCompaines)

const eightiesCompaines = companies.filter(company => company.start < 1990)
console.log(eightiesCompaines)

const lastedTenYears = companies.filter(company => company.end - company.start >= 10)
console.log(lastedTenYears)
// Basic filter() using Arrow()

///////////////////////////////

// Basic map()
const companyNames = companies.map(function(company) {
    return company.name
}) 
console.log(companyNames)

const testMap = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`
})
console.log(testMap)
// Basic map()

////////////////////////////////

// Basic map() using Arrow()
const businessNames = companies.map(company => company.name)
console.log(businessNames)

const businesssNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(businesssNames)

const agesSquare = ages.map(age => Math.sqrt(age))
console.log(agesSquare)

const agesTimesTwo = ages.map(age => age * 2)
console.log(agesTimesTwo)

const ageMap = ages
 .map(age => Math.sqrt(age))
 .map(age => age * 3)
console.log(ageMap)
// Basic map() using Arrow()

/////////////////////////////////////

// Basic sort()
const sortedCompanies = companies.sort(function(c1, c2) {
  if (c1.start > c2.start) {
    return 1
  } else {
    return -1
  }
})
console.log(sortedCompanies)
// Basic sort()

/////////////////////////////

// Basic sort() using Arrow()
const companiesSorted = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
console.log(companiesSorted)

const sortAges = ages.sort((a, b) => a - b)
console.log(sortAges)
// In this example "?" equals "if true", and ":" equals "else".
// Basic sort() using Arrow()

////////////////////////////////

let ageSum = 0
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i]
}
console.log(ageSum)

// Basic reduce()
const agesSum = ages.reduce(function(total, age) {
    return total + age
})
console.log(agesSum)
// Basic reduce()

//////////////////////////////////////

// Basic reduce() using Arrow()
const agessSum = ages.reduce((total, age) => total + age)
console.log(agessSum)

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears)
// Basic reduce() using Arrow()

////////////////////////////////

// Examples of combining functions

const combined = ages
  .map(age => age * 3)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b)
console.log(combined)

///////////////////////////////////////////////////

//  Example of Reversing a string. Just for a reminder
  
const gates = "!setaG eviL gnoL"
                               .split("")
                               .reverse()
                               .join("")
console.log(gates)
                  
      
