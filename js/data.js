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
    { name: "Akalu", amh: "አካሉ", gender: "Male" },
    { name: "Abel", amh: "አቤል", gender: "Male" },
    { name: "Yasin", amh: "ያሲን", gender: "Male" },
    { name: "Natnael", amh: "ናትናኤል", gender: "Male" },
    { name: "Guta", amh: "ጉታ", gender: "Male" },
    { name: "Kenenisa", amh: "ከነኒሳ", gender: "Male" },
    { name: "Haile", amh: "ሃይሌ", gender: "Male" },
    { name: "Samuel", amh: "ሳሙኤል", gender: "Male" },
    { name: "Mohamed", amh: "ሞሐመድ", gender: "Male" },
    { name: "Abebe", amh: "አበበ", gender: "Male" },
    { name: "Kebede", amh: "ከበደ", gender: "Male" },
    { name: "Abdela", amh: "አብደላ", gender: "Male" },
    { name: "Yared", amh: "ያሬድ", gender: "Male" },
    { name: "Biruk", amh: "ብሩክ", gender: "Male" },
    { name: "Dawit", amh: "ዳዊት", gender: "Male" },
    { name: "Daniel", amh: "ዳንኤል", gender: "Male" },
    { name: "Solomon", amh: "ሰሎሞን", gender: "Male" },
    { name: "Tibebe", amh: "ጥበበ", gender: "Male" },
    { name: "Shimeles", amh: "ሽመለስ", gender: "Male" },
    { name: "Seyfe", amh: "ሰይፈ", gender: "Male" },
    { name: "Mulu", amh: "ሙሉ", gender: "Female" },
    { name: "Mahlet", amh: "ማህሌት", gender: "Female" },
    { name: "Hana", amh: "ሀና", gender: "Female" },
    { name: "Liya", amh: "ሊያ", gender: "Female" },
    { name: "Tigist", amh: "ትግስት", gender: "Female" },
    { name: "Mekdes", amh: "መቅደስ", gender: "Female" },
    { name: "Selam", amh: "ሰላም", gender: "Female" },
    { name: "Marta", amh: "ማርታ", gender: "Female" },
    { name: "Bethlehem", amh: "ቤተልሔም", gender: "Female" },
    { name: "Ruth", amh: "ሩት", gender: "Female" },
    { name: "Fitsum", amh: "ፍጹም", gender: "Female" },
    { name: "Helen", amh: "ሄለን", gender: "Female" },
    { name: "Tirunesh", amh: "ጥሩነሽ", gender: "Female" },
    { name: "Meseret", amh: "መሰረት", gender: "Female" },
    { name: "Kemila", amh: "ከሚላ", gender: "Female" },
    { name: "Nebiyat", amh: "ነብያት", gender: "Female" },
    { name: "Saba", amh: "ሳባ", gender: "Female" },
    { name: "Medina", amh: "መዲና", gender: "Female" },
    { name: "Kerima", amh: "ከሪማ", gender: "Female" },
    { name: "Fatuma", amh: "ፋቱማ", gender: "Female" },
];
const middleNames = [
    { name: "Kebede", amh: "ከበደ" },
    { name: "Yabsira", amh: "ያብስራ" },
    { name: "Gebre", amh: "ገብሬ" },
    { name: "Biniyam", amh: "ቢንያም" },
    { name: "Hailemariam", amh: "ኃይለማሪያም" },
    { name: "Habtemariam", amh: "ሃብተማሪያም" },
    { name: "Taye", amh: "ታዬ" },
    { name: "Chala", amh: "ጫላ" },
    { name: "Caleb", amh: "ካሌብ" },
    { name: "Tirusew", amh: "ጥሩሰው" },
    { name: "Chane", amh: "ቻኔ" },
    { name: "Abrham", amh: "አብርሃም" },
    { name: "Tariku", amh: "ታሪኩ" },
    { name: "Simeneh", amh: "ስሜነህ" },
    { name: "Addis", amh: "አዲሰ" },
    { name: "Bereket", amh: "በረከት" },
    { name: "Girma", amh: "ግርማ" },
    { name: "Ayalew", amh: "አያሌው" }
];
const lastNames = [
    { name: "Tasew", amh: "ጣሰው" },
    { name: "Gebremariam", amh: "ገብረማሪያም" },
    { name: "Habtamu", amh: "ሐብታሙ" },
    { name: "Weldeariam", amh: "ወልደአሪያም" },
    { name: "Takele", amh: "ታከለ" },
    { name: "Alemu", amh: "አለሙ" },
    { name: "Bekele", amh: "በቀለ" },
    { name: "Ketema", amh: "ከተማ" },
    { name: "Tesfaye", amh: "ተስፋዬ" },
    { name: "Demissie", amh: "ደምሴ" },
    { name: "Wolde", amh: "ወልዴ" },
    { name: "Mekonnen", amh: "መኮንን" },
    { name: "Ayalew", amh: "አያሌው" },
    { name: "Abate", amh: "አባተ" },
    { name: "Tekletsadik", amh: "ተክለጻዲቅ" },
    { name: "Molla", amh: "ሞላ" },
    { name: "Yekuno", amh: "ይኩኖ" }
];

const cities = ["Addis Ababa", "Adama", "Bahir Dar", "Hawassa", "Mekelle", "Dire Dawa"];
const subCities = ["Bole", "Kirkos", "Yeka", "Arada", "Lideta", "Gullele", "Nifas Silk", "Kolfe"];
const regions = ["Addis Ababa", "Oromia", "Amhara", "Tigray", "SNNPR", "Afar", "Somali", "Benishangul-Gumuz", "Gambela", "Harari", "Sidama"];
const nationalities = ["Ethiopia"];
const identityTypes = ["National ID", "Passport", "Driving License", "Residence ID", "Work Permit"];
const streets = ["Bole Cameron Street", "Africa Avenue", "Churchill Road", "Megenagna", "Piazza", "Mexico Square", "Kazanchis", "CMC Road"];
const locations = ["Temenja Yaje", "Atobis Tera", "Sefere Selam", "Total", "Ayer Tena", "Bole", "Kirkos", "Dill Gebeya", "Sarbet", "Mexico", "Arada", "Lideta", "Nifas Silk", "Tor Hayloch", "Saris", "Akaki", "Addisu Gebeya", "Asko", "Atana Tera", "Banbis", "Gergi", "Old Airport", "Haile Garment", "4 Killo", "6 Killo", "5 Killo", "Commerce", "Popolare", "Yohannes", "Gedam Sefer", "Mastawekiya", "Sebara Babur", "Brass", "Megenagna", "22 Golagol", "Hayahulet", "24 Sefer" ];

const DummyData = {
    profiles: [
        {
            title: "Mr.",
            firstName: "Akalu",
            firstNameAmh: "አካሉ",
            middleName: "Kebede",
            middleNameAmh: "ከበደ",
            lastName: "Tasew",
            lastNameAmh: "ጣሰው",
            fullName: "Akalu Kebede Tasew",
            fullNameAmh: "አካሉ ከበደ ጣሰው",
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
            location: "Megenagna",

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
    const title = randomFromArray(titlesByGender[gender]);
    const firstName = firstNameObj.name;
    const firstNameAmh = firstNameObj.amh;
    const middleNameObj = randomFromArray(middleNames);
    const middleName = middleNameObj.name;
    const middleNameAmh = middleNameObj.amh;
    const lastNameObj = randomFromArray(lastNames);
    const lastName = lastNameObj.name;
    const lastNameAmh = lastNameObj.amh;
    const fullName = firstName + " " + middleName + " " + lastName;
    const fullNameAmh = firstNameAmh + " " + middleNameAmh + " " + lastNameAmh;
    const contractType = randomFromArray(contractTypes);
    const bankName = randomFromArray(bankNames);
    const city = randomFromArray(cities);
    const subCity = randomFromArray(subCities);
    const region = randomFromArray(regions);
    const nationality = randomFromArray(nationalities);
    const identityType = randomFromArray(identityTypes);
    const address = randomFromArray(streets);
    const location = randomFromArray(locations);
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
        firstNameAmh,
        middleName,
        middleNameAmh,
        lastName,
        lastNameAmh,
        fullName,
        fullNameAmh,
        gender,
        birthDate,
        email,
        phone,
        address,
        location,
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