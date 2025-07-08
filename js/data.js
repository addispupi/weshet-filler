//  Data entries for a random pick from a list of profiles

// Helper functions to generate random data
function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

function randomPhone() {
    const prefix = Math.random() < 0.5 ? "+251 9" : "+251 7";
    return prefix + Math.floor(10000000 + Math.random() * 90000000);
}

function randomString(length) {
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function randomNumberString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}

const titlesByGender = {
    Male: ["Mr.", "Dr.", "Prof.", "PhD.", "Sir."],
    Female: ["Ms.", "Mrs.", "Dr.", "Prof.", "PhD.", "Miss.", "Madam"]
};

const contractTypes = ["Contractual", "Freelance", "Full-Time", "Internship", "Outsourced", "Part-Time", "Permanent", "Remote", "Temporary"];
const bankNames = [
    "Abay Bank", "Addis International Bank", "Ahadu Bank", "Amhara Bank", "Awash International Bank",
    "Bank of Abyssinia", "Berhan Bank", "Bunna International Bank", "Commercial Bank of Ethiopia",
    "Cooperative Bank of Oromia", "Dashen Bank", "Enat Bank", "Gadaa Bank", "Global Bank", "Hijra Bank",
    "Lion International Bank", "Nib International Bank", "Omo Bank", "Oromia International Bank", "Rammis Bank",
    "Sidama Bank", "Siinqee Bank", "Tsehay Bank", "United Bank", "Wegagen Bank", "Zemen Bank", "ZamZam Bank"
];
const firstNames = [
    { name: "Akalu", gender: "Male" },
    { name: "Abel", gender: "Male" },
    { name: "Yasin", gender: "Male" },
    { name: "Natnael", gender: "Male" },
    { name: "Guta", gender: "Male" },
    { name: "Kenenisa", gender: "Male" },
    { name: "Haile", gender: "Male" },
    { name: "Samuel", gender: "Male" },
    { name: "Mohamed", gender: "Male" },
    { name: "Abebe", gender: "Male" },
    { name: "Kebede", gender: "Male" },
    { name: "Abdela", gender: "Male" },
    { name: "Yared", gender: "Male" },
    { name: "Biruk", gender: "Male" },
    { name: "Dawit", gender: "Male" },
    { name: "Daniel", gender: "Male" },
    { name: "Solomon", gender: "Male" },
    { name: "Tibebe", gender: "Male" },
    { name: "Shimeles", gender: "Male" },
    { name: "Seyfe", gender: "Male" },
    { name: "Mulu", gender: "Female" },
    { name: "Mahlet", gender: "Female" },
    { name: "Hana", gender: "Female" },
    { name: "Liya", gender: "Female" },
    { name: "Tigist", gender: "Female" },
    { name: "Mekdes", gender: "Female" },
    { name: "Selam", gender: "Female" },
    { name: "Marta", gender: "Female" },
    { name: "Bethlehem", gender: "Female" },
    { name: "Ruth", gender: "Female" },
    { name: "Fitsum", gender: "Female" },
    { name: "Helen", gender: "Female" },
    { name: "Tirunesh", gender: "Female" },
    { name: "Meseret", gender: "Female" },
    { name: "Kemila", gender: "Female" },
    { name: "Nebiyat", gender: "Female" },
    { name: "Nebiyat", gender: "Female" },
    { name: "Saba", gender: "Female" },
    { name: "Medina", gender: "Female" },
    { name: "Kerima", gender: "Female" },
    { name: "Fatuma", gender: "Female" },
];
const middleNames = ["Kebede", "Tasew", "Gebre", "Biniyam", "Hailemariam", "Habtemariam", "Taye", "Chala", "Caleb", "Tirusew", "Chane", "Alemu", "Bekele", "Tesfaye", "Demissie", "Wolde", "Mekonnen", "Ayalew"];
const lastNames = ["Tasew", "Gebremariam", "Habtamu", "W/Mariam", "Gebre", "Alemu", "Bekele", "Ketema", "Tesfaye", "Demissie", "Wolde", "Mekonnen", "Ayalew", "Abate", "Tekletsadik", "Molla", "Yekuno" ];

const cities = ["Addis Ababa", "Adama", "Bahir Dar", "Hawassa", "Mekelle", "Dire Dawa"];
const subCities = ["Bole", "Kirkos", "Yeka", "Arada", "Lideta", "Gullele", "Nifas Silk", "Kolfe"];
const regions = ["Addis Ababa", "Oromia", "Amhara", "Tigray", "SNNPR", "Afar", "Somali", "Benishangul-Gumuz", "Gambela", "Harari", "Sidama"];
const nationalities = ["Ethiopia"];
const identityTypes = ["National ID", "Passport", "Driver's License"];
const streets = ["Bole Cameron Street", "Africa Avenue", "Churchill Road", "Megenagna", "Piazza", "Mexico Square", "Kazanchis", "CMC Road"];

const DummyData = {
    profiles: [
        {
            title: "Mr.",
            firstName: "Akalu",
            middleName: "Kebede",
            lastName: "Tasew",
            gender: "Male",
            birthDate: "1990-05-15", 
            email: "akalu.tasew@gmail.com",
            phone: "+251 911 234 567",
            address: "Bole Cameron Street",
            nationality: "Ethiopia",
            region: "Addis Ababa",
            city: "Addis Ababa",
            subCity: "Bole",
            woreda: "3",
            houseNumber: "B472",
            zip: "1000",

            contractType: "Full-time",
            issueDate: "2020-01-01",
            expiryDate: "2030-01-01",

            identityType: "National ID",
            identityNumber: "1234567890123564",
            bankName: "Commercial Bank of Ethiopia",
            bankAccountNumber: "1234567890123456",
        },
    ]
};

// Generate 50 random profiles
for (let i = 0; i < 70; i++) {
    const firstNameObj = randomFromArray(firstNames);
    const gender = firstNameObj.gender;
    const firstName = firstNameObj.name;
    const title = randomFromArray(titlesByGender[gender]);
    const middleName = randomFromArray(middleNames);
    const lastName = randomFromArray(lastNames);
    const contractType = randomFromArray(contractTypes);
    const bankName = randomFromArray(bankNames);
    const city = randomFromArray(cities);
    const subCity = randomFromArray(subCities);
    const region = randomFromArray(regions);
    const nationality = randomFromArray(nationalities);
    const identityType = randomFromArray(identityTypes);
    const address = randomFromArray(streets);
    const woreda = (Math.floor(Math.random() * 10) + 1).toString();
    const houseNumber = randomString(1).toUpperCase() + Math.floor(100 + Math.random() * 900);
    const zip = (1000 + Math.floor(Math.random() * 9000)).toString();
    const birthDate = randomDate(new Date(1970, 0, 1), new Date(2005, 11, 31));
    const issueDate = randomDate(new Date(2015, 0, 1), new Date(2024, 11, 30));
    
    // Generate expiry date between 1 and 6 years from the issue date
    const now = new Date();
    const expiryStart = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
    const expiryEnd = new Date(now.getFullYear() + 6, now.getMonth(), now.getDate());
    const expiryDate = randomDate(expiryStart, expiryEnd);

    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`;
    const phone = randomPhone();
    const identityNumber = randomNumberString(16);
    const bankAccountNumber = randomNumberString(10);

    DummyData.profiles.push({
        title,
        firstName,
        middleName,
        lastName,
        gender,
        birthDate,
        email,
        phone,
        address,
        nationality,
        region,
        city,
        subCity,
        woreda,
        houseNumber,
        zip,
        contractType,
        issueDate,
        expiryDate,
        identityType,
        identityNumber,
        bankName,
        bankAccountNumber,
    });
}


export { DummyData };