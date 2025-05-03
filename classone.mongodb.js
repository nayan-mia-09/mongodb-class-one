use("Mern09")
// Data InsertMany
db.brand.insertMany([
    {"name": "Oppo", "color": "Blue"},
    {"name": "Realme", "color": "Red"},
    {"name": "Vivo", "color": "White"},
    {"name": "Redmi", "color": "Orange"},
])
//Data Find
db.brand.find()

