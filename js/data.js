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

const titles = ["Mr.", "Ms.", "Mrs.", "Dr.", "Prof.", "PhD.", "Miss.", "Sir.", "Madam"];
const contractTypes = ["Contractual", "Freelance", "Full-Time", "Internship", "Outsourced", "Part-Time", "Permanent", "Remote", "Temporary"];
const bankNames = [
    "Abay Bank", "Addis International Bank", "Ahadu Bank", "Amhara Bank", "Awash International Bank",
    "Bank of Abyssinia", "Berhan Bank", "Bunna International Bank", "Commercial Bank of Ethiopia",
    "Cooperative Bank of Oromia", "Dashen Bank", "Enat Bank", "Gadaa Bank", "Global Bank", "Hijra Bank",
    "Lion International Bank", "Nib International Bank", "Omo Bank", "Oromia International Bank", "Rammis Bank",
    "Sidama Bank", "Siinqee Bank", "Tsehay Bank", "United Bank", "Wegagen Bank", "Zemen Bank", "ZamZam Bank"
];
const firstNames = ["Akalu", "Mulu", "Hana", "Samuel", "Liya", "Abebe", "Tigist", "Kebede", "Mekdes", "Yared", "Selam", "Biruk", "Marta", "Dawit", "Ruth", "Fitsum", "Helen", "Daniel", "Saba", "Solomon"];
const middleNames = ["Kebede", "Tasew", "Gebre", "Alemu", "Bekele", "Tesfaye", "Demissie", "Wolde", "Mekonnen", "Ayalew"];
const lastNames = ["Tasew", "Gebremariam", "Alemu", "Bekele", "Tesfaye", "Demissie", "Wolde", "Mekonnen", "Ayalew", "Abate"];
const genders = ["Male", "Female"];
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
for (let i = 0; i < 50; i++) {
    const gender = randomFromArray(genders);
    const firstName = randomFromArray(firstNames);
    const middleName = randomFromArray(middleNames);
    const lastName = randomFromArray(lastNames);
    const title = randomFromArray(titles);
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
    const issueDate = randomDate(new Date(2015, 0, 1), new Date(2022, 11, 31));
    const expiryDate = randomDate(new Date(2025, 0, 1), new Date(2035, 11, 31));
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`;
    const phone = randomPhone();
    const identityNumber = randomNumberString(16);
    const bankAccountNumber = randomNumberString(16);

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