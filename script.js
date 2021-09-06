// All Career Button //
var alljobsPlaceholder = document.getElementById("alljobsText");
var showJobs = document.getElementById("allJobs");

var alljobsList = ["Astronaut",
                "Athlete",
                "Business",
                "Criminal",
                "Culinary",
                "Entertainer",
                "Freelance Digital Artist",
                "Freelance Programmer",
                "Freelance Writer",
                "Freelance Fashion Photographer",
                "Freelance Crafter",
                "Painter",
                "Secret Agent",
                "Style Influencer",
                "Tech Guru",
                "Writer",
                "Detective",
                "Doctor",
                "Scientist",
                "Critic",
                "Politician",
                "Social Media",
                "Gardener",
                "Actor",
                "Military",
                "Conservationist",
                "Education",
                "Engineer",
                "Law",
                "Civil Designer",
                "Babysitter",
                "Barista",
                "Fast Food Employee",
                "Manual Laborer",
                "Retail Employee",
                "Diver",
                "Fisherman",
                "Lifeguard",
                "Salaryperson",
            ]

var jobsNumber;

function randomJob(){
  return alljobsList[jobsNumber];
}

showJobs.addEventListener('click', function(){
  jobsNumber = Math.floor(Math.random()*39);
  alljobsPlaceholder.textContent = randomJob();
});


// Part Time Job Button//
var ptjobsPlaceholder = document.getElementById("ptjobsText");
var showptJobs = document.getElementById("ptJobs");

var ptjobsList = ["Freelance Digital Artist",
                "Freelance Programmer",
                "Freelance Writer",
                "Freelance Fashion Photographer",
                "Freelance Crafter",
                "Babysitter",
                "Barista",
                "Fast Food Employee",
                "Manual Laborer",
                "Retail Employee",
                "Diver",
                "Fisherman",
                "Lifeguard",
            ]

var ptjobsNumber;

function randomptJob(){
  return ptjobsList[ptjobsNumber];
}

showptJobs.addEventListener('click', function(){
  ptjobsNumber = Math.floor(Math.random()*13);
  ptjobsPlaceholder.textContent = randomptJob();
});

// Base Game Job Button //
var bgjobsPlaceholder = document.getElementById("bgjobsText");
var showbgJobs = document.getElementById("bgJobs");

var bgjobsList = ["Astronaut",
                "Athlete",
                "Business",
                "Criminal",
                "Culinary",
                "Entertainer",
                "Freelance Digital Artist",
                "Freelance Programmer",
                "Freelance Writer",
                "Painter",
                "Secret Agent",
                "Style Influencer",
                "Tech Guru",
                "Writer",
                "Babysitter",
                "Barista",
                "Fast Food Employee",
                "Manual Laborer",
                "Retail Employee",
            ]

var bgjobsNumber;

function randombgJob(){
  return bgjobsList[bgjobsNumber];
}

showbgJobs.addEventListener('click', function(){
  bgjobsNumber = Math.floor(Math.random()*19);
  bgjobsPlaceholder.textContent = randombgJob();
});



// Aspirations //
var aspirePlaceholder = document.getElementById("aspireText");
var showasPire = document.getElementById("asPire");

var aspireList = ["Friend of the Animals",
                "Bodybuilder",
                "Extreme Sports Enthusiast",
                "Painter Extraordinare",
                "Musical Genius",
                "Bestselling Author",
                "Master Actor/Actress",
                "Master Maker",
                "Lord/Lady of the Knits",
                "Public Enemy",
                "Chief of Mischief",
                "Successful Lineage",
                "Big Happy Family",
                "Vampire Family",
                "Super Parent",
                "Master Chef",
                "Master Mixologist",
                "Fabulously Wealthy",
                "Mansion Baron",
                "Renaissance Sim",
                "Nerd Brain",
                "Computer Whiz",
                "Master Vampire",
                "Archaeology Scholar",
                "Spellcraft & Sorcery",
                "Academic",
                "Serial Romantic",
                "Soulmate",
                "City Native",
                "Strangerville Mystery",
                "Beach Life",
                "Mt. Komorebi Sightseer",
                "Freelance Botanist",
                "The Curator",
                "Angling Ace",
                "Outdoor Enthusiast",
                "Jungle Explorer",
                "Purveyor of Potions",
                "Eco Innovator",
                "Country Caretaker",
                "Joke Star",
                "Party Animal",
                "Friend of the World",
                "Leader of the Pack",
                "Good Vampire",
                "World Famous Celebrity",
            ]

var aspireNumber;

function aspireAct(){
  return aspireList[aspireNumber];
}

showasPire.addEventListener('click', function(){
  aspireNumber = Math.floor(Math.random()*45);
  aspirePlaceholder.textContent = aspireAct();
});



// Child Aspirations //
var chaspPlaceholder = document.getElementById("chaspText");
var showchAsp = document.getElementById("chAsp");

var chaspList = ["Artistic Prodigy",
                "Rambunctious Scamp",
                "Social Butterfly",
                "Whiz Kid",
            ]

var chaspNumber;

function randomchAsp(){
  return chaspList[chaspNumber];
}

showchAsp.addEventListener('click', function(){
  chaspNumber = Math.floor(Math.random()*4);
  chaspPlaceholder.textContent = randomchAsp();
});



// Afterschool Activities //
var asactPlaceholder = document.getElementById("asactText");
var showasAct = document.getElementById("asAct");

var asactList = ["Drama Club",
                "Scouts",
            ]

var asactNumber;

function randomasAct(){
  return asactList[asactNumber];
}

showasAct.addEventListener('click', function(){
  asactNumber = Math.floor(Math.random()*2);
  asactPlaceholder.textContent = randomasAct();
});



// Teen Jobs and Activities //
var teenjobPlaceholder = document.getElementById("teenjobText");
var showteenJob = document.getElementById("teenJob");

var teenjobList = ["Drama Club",
                "Scouts",
                "Babysiter",
                "Barista",
                "Fast Food Employee",
                "Manual Laborer",
                "Retail Employee",
                "Diver",
                "Fisherman",
                "Lifeguard",
            ]

var teenjobNumber;

function teenjobAct(){
  return teenjobList[teenjobNumber];
}

showteenJob.addEventListener('click', function(){
  teenjobNumber = Math.floor(Math.random()*10);
  teenjobPlaceholder.textContent = teenjobAct();
});



// University Degrees //
var unidPlaceholder = document.getElementById("unidText");
var showuniD = document.getElementById("uniD");

var unidList = ["Art History",
                "Biology",
                "Communications",
                "Computer Science",
                "Culinary Arts",
                "Drama",
                "Economics",
                "Fine Art",
                "History",
                "Language and Literature",
                "Physics",
                "Psychology",
                "Villainy",
            ]

var unidNumber;

function randomuniD(){
  return unidList[unidNumber];
}

showuniD.addEventListener('click', function(){
  unidNumber = Math.floor(Math.random()*13);
  unidPlaceholder.textContent = randomuniD();
});



// Skills and Hobbies //
var skillsPlaceholder = document.getElementById("skillsText");
var showskills = document.getElementById("skills");

var skillsList = ["Charisma",
                "Comedy",
                "Cooking",
                "Fishing",
                "Fitness",
                "Gardening",
                "Gourmet Cooking",
                "Guitar",
                "Handiness",
                "Logic",
                "Mischief",
                "Mixology",
                "Painting",
                "Piano",
                "Photography",
                "Programming",
                "Rocket Science",
                "Video Gaming",
                "Violin",
                "Writing",
                "Herbalism",
                "Baking",
                "Wellness",
                "Dancing",
                "DJ Mixing",
                "Singing",
                "Pipe Organ",
                "Vampire Lore",
                "Bowling",
                "Parenting",
                "Pet Training",
                "Vetrenarian",
                "Archeology",
                "Selvadorian Culture",
                "Flower Arranging",
                "Acting",
                "Media Production",
                "Research & Debate",
                "Robotics",
                "Fabrication",
                "Juice Fizzing",
                "Knitting",
                "Rock Climbling",
                "Skiing",
                "Snowboarding",
                "Cross-stitch",
            ]

var skillsNumber;

function skillsAct(){
  return skillsList[skillsNumber];
}

showskills.addEventListener('click', function(){
  skillsNumber = Math.floor(Math.random()*45);
  skillsPlaceholder.textContent = skillsAct();
});



// Worlds//
var ranworldPlaceholder = document.getElementById("ranworldText");
var showranWorld = document.getElementById("ranWorld");

var ranworldList = ["Brindleton Bay",
                "Britechester",
                "Del Sol Valley",
                "Evergreen Harbor",
                "Forgotten Hollow",
                "Glimmerbrook",
                "Granite Falls",
                "Henford-on-Bagley",
                "Magnolia Promenade",
                "Mt. Komorebi",
                "Newcrest",
                "Oasis Springs",
                "San Myshuno",
                "StrangerVille",
                "Sulani",
                "Willow Creek",
                "Windenburg",
            ]

var ranworldNumber;

function randomranWorld(){
  return ranworldList[ranworldNumber];
}

showranWorld.addEventListener('click', function(){
  ranworldNumber = Math.floor(Math.random()*17);
  ranworldPlaceholder.textContent = randomranWorld();
});



// All Townies //
var alltownPlaceholder = document.getElementById("alltownText");
var showallTown = document.getElementById("allTown");

var alltownList = ["Mortimer Goth",
                "Bella Goth",
                "Cassandra Goth",
                "Alexander Goth",
                "Vivian Lewis",
                "Dennis Kim",
                "Eric Lewis",
                "Alice Spencer-Kim",
                "Olivia Spencer-Kim-Lewis",
                "Bob Pancakes",
                "Eliza Pancakes",
                "Travis Scott",
                "Liberty Lee",
                "Summer Holiday",
                "Geoffrey Landgraab",
                "Nancy Landgraab",
                "Malcom Landgraab",
                "Johnny Zest",
                "Katrina Caliente",
                "Dina Caliente",
                "Nina Caliente",
                "Don Lothario",
                "Zoe Patel",
                "Mitchell Kalani",
                "J Huntington III",
                "Gavin Richards",
                "Dominic Fyres",
                "Moira Fyres",
                "Siobhan Fyres",
                "Morgan Fyres",
                "Mila Munch",
                "Gunther Munch",
                "Wolfgang Munch",
                "Lucas Munch",
                "Maaike Haas",
                "Ulrike Faust",
                "Candy Behr",
                "Yuki Behr",
                "Marcus Flex",
                "Eva Capriccoiosa",
                "Paolo Rocca",
                "Jade Rosa",
                "Bjorn Bjergsen",
                "Clara Bjergsen",
                "Sofia Bjergsen",
                "Elsa Bjergsen",
                "Joaquin Le Chien",
                "Sergio Romeo",
                "Jacques Villareal",
                "Luna Villareal",
                "Hugo Villareal",
                "Max Villareal",
                "Geeta Rasoya",
                "Raj Rosoya",
                "Arun Bheeda",
                "Jesminder Bheeda",
                "Penny Pizzazz",
                "Miko Ojo",
                "Akira Kibo",
                "Darling Walsh",
                "Salim Benali",
                "Baako Jang",
                "Anaya Jang",
                "Billie Jang",
                "Victor Feng",
                "Lily Feng",
                "Diego Lobo",
                "Vladislaus Straud",
                "Caleb Vatore",
                "Lilith Vatore",
                "Supriya Delgato",
                "Justin Delgato",
                "Pierce Delgato",
                "Evie Delgato",
                "Brant Hecking",
                "Brent Hecking",
                "Catarina Lynx",
                "Vanessa Jeong",
                "Octavia Moon",
                "Thorne Bailey",
                "Orange Bailey-Moon",
                "Judith Ward",
                "Holly Alto",
                "Baby Ariel",
                "Dustin Broke",
                "Brytani Cho",
                "Dirk Dreamer",
                "Izzy Fabulous",
                "Kayla Flemming",
                "Jess Sigworth",
                "Dylan Sigworth",
                "Christie Sigworth",
                "George Cahill",
                "Ted Roswell",
                "Meredith Roswell",
                "Mark Eggleston",
                "Alice Martin",
                "Leslie Howard",
                "Erwin Pries",
                "Keala Hoapil",
                "Lia Hauata",
                "Makoa Kealoha",
                "Lilliana Kealoha",
                "Nani Kealoha",
                "Duane Talla",
                "Alika Kahananui",
                "Mele Kahananui",
                "Oliana Ngata",
                "Tane Ngata",
                "Leila Illes",
                "Ukupanipo Hekekia",
                "Kalamainu'u Iona",
                "Nalani Mahi'ai",
                "Paka'a Uha",
                "Minerva Charm",
                "Darrel Charm",
                "Gemma Charm",
                "Emilia Ernest",
                "Grace Anansi",
                "Tomax Collette",
                "Morgyn Ember",
                "Simeon Silversweatert",
                "L. Faba",
                "Cameron Fletcher",
                "Ekram Elderberry",
                "Eleanore Elderberry",
                "Rohan Elderberry",
                "Angela Pleasant",
                "Lilith Pleasant",
                "Julia Wright",
                "Becca Clarke",
                "Serena Bharmra",
                "Jing Fen",
                "Thomas Jabari",
                "Lana McKinnon",
                "Felix Psyded",
                "Cletus Harris",
                "Francine Spencer",
                "Faye Harris",
                "Jeb Harris",
                "Gideon Harris",
                "Blossom Greenburg",
                "Mary Greenburg",
                "Knox Greenburg",
                "Bess Sterling",
                "Jules Rico",
                "Tina Tinker",
                "Yasemin Tinker",
                "Olivia Tinker",
                "Naoki Ito",
                "Megumi Ito",
                "Kiyoshi Ito",
                "Nanami Ito",
                "Kado Akiyama",
                "Jenna Akiyama",
                "Taku Akiyama",
                "Miki Akiyama",
                "Shigeru Nishidake",
                "Sachiko Nishidake",
                "Naori Nishidake",
                "Yamachan",
                "Agatha Crumplebottom",
                "Agnes Crumplebottom",
                "Michael Bell",
                "Kim Goldbloom",
                "Lavina Chopra",
                "Rahul Chopra",
                "Thomas Watson",
                "Rahmi Watson",
                "Rashida Watson",
                "Imran Watson",
                "Maira Watson",
                "Derek McMillan",
                "Ian Moody",
                "Cecilia Kang",
                "Simon Scott",
                "Sara Scott",

            ]

var alltownNumber;

function randomallTown(){
  return alltownList[alltownNumber];
}

showallTown.addEventListener('click', function(){
  alltownNumber = Math.floor(Math.random()*176);
  alltownPlaceholder.textContent = randomallTown();
});



// Single Townies //
var sintownPlaceholder = document.getElementById("sintownText");
var showsinTown = document.getElementById("sinTown");

var sintownList = ["Vivian Lewis",
                "Dennis Kim",
                "Travis Scott",
                "Liberty Lee",
                "Summer Holiday",
                "Johnny Zest",
                "Katrina Caliente",
                "Dina Caliente",
                "Nina Caliente",
                "Don Lothario",
                "Zoe Patel",
                "Mitchell Kalani",
                "J Huntington III",
                "Gavin Richards",
                "Mila Munch",
                "Gunther Munch",
                "Maaike Haas",
                "Ulrike Faust",
                "Candy Behr",
                "Marcus Flex",
                "Eva Capricciosa",
                "Paolo Rocca",
                "Jade Rosa",
                "Joaquin Le Chien",
                "Jacques Villareal",
                "Geeta Rasoya",
                "Raj Rasoya",
                "Penny Pizzazz",
                "Miko Ojo",
                "Akira Kibo",
                "Darling Walsh",
                "Salim Benali",
                "Diego Lobo",
                "Vladislaus Straud",
                "Caleb Vatore",
                "Lilith Vatore",
                "Catarina Lynx",
                "Vanessa Jeong",
                "Judith Ward",
                "Holly Alto",
                "Baby Ariel",
                "Dustin Broke",
                "Brytani Cho",
                "Dirk Dreamer",
                "Izzy Fabulous",
                "Kayla Flemming",
                "George Cahill",
                "Mark Eggleston",
                "Alice Martin",
                "Leslie Howard",
                "Erwin Pries",
                "Keala Hoapil",
                "Lia Hauata",
                "Ukupanipo Hekekia",
                "Kalamainu'u Iona",
                "Nalani Mahi'ai",
                "Paka'a Uha",
                "Minerva Charm",
                "Grace Anansi",
                "Tomax Collette",
                "Morgyn Ember",
                "Simeon Silversweatert",
                "L.Faba",
                "Cameron Fletcher",
                "Angela Pleasant",
                "Lilith Pleasant",
                "Julia Wright",
                "Becca Clarke",
                "Knox Greenburg",
                "Agatha Crumplebottom",
                "Agnes Crumplebottom",
                "Michael Bell",
                "Kim Goldbloom",
                "Lavina Chopra",
                "Cecilia Kang",

            ]

var sintownNumber;

function randomsinTown(){
  return sintownList[sintownNumber];
}

showsinTown.addEventListener('click', function(){
  sintownNumber = Math.floor(Math.random()*74);
  sintownPlaceholder.textContent = randomsinTown();
});

