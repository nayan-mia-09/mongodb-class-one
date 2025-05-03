// use("Mern09")
// // Data InsertMany
// db.brand.insertMany([
//     {"name": "Oppo", "color": "Blue"},
//     {"name": "Realme", "color": "Red"},
//     {"name": "Vivo", "color": "White"},
//     {"name": "Redmi", "color": "Orange"},
// ])
// //Data Find
// db.brand.find()

// Projection concept

use("sample_mflix")

db.movies.find({}, {title:1, year:1, _id:0})

