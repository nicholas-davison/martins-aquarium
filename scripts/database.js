const database = {
    fish: [
        {
            id: 1,
            Species: "Puffer",
            Length: 6,
            Name: "Scooby",
            Origin: "North Carolina",
            Diet: "Bugz"
        },
        {
            id: 2,
            Species: "Clownfish",
            Length: 3,
            Name: "Nemo",
            Origin: "Great Barrier Reef",
            Diet: "Algae and small crustaceans"
        },
        {
            id: 3,
            Species: "Angelfish",
            Length: 5,
            Name: "Angel",
            Origin: "Amazon River",
            Diet: "Small fish and algae"
        },
        {
            id: 4,
            Species: "Blue Tang",
            Length: 7,
            Name: "Dory",
            Origin: "Indo-Pacific",
            Diet: "Algae"
        },
        {
            id: 5,
            Species: "Discus",
            Length: 6,
            Name: "Disco",
            Origin: "Amazon River",
            Diet: "Insects, worms, and plants"
        },
        {
            id: 6,
            Species: "Guppy",
            Length: 2,
            Name: "Bubbles",
            Origin: "South America",
            Diet: "Small insects and algae"
        },
        {
            id: 7,
            Species: "Moorish Idol",
            Length: 8,
            Name: "Mojo",
            Origin: "Indo-Pacific",
            Diet: "Sponges and algae"
        },
        {
            id: 8,
            Species: "Tetra",
            Length: 1,
            Name: "Tetris",
            Origin: "South America",
            Diet: "Small insects and plankton"
        },
        {
            id: 9,
            Species: "Zebra Danio",
            Length: 2,
            Name: "Ziggy",
            Origin: "India",
            Diet: "Small insects and plankton"
        },
        {
            id: 10,
            Species: "Cichlid",
            Length: 5,
            Name: "Rocky",
            Origin: "Lake Malawi",
            Diet: "Insects, crustaceans, and algae"
        },
        {
            id: 11,
            Species: "Cardinal Tetra",
            Length: 1,
            Name: "Cardy",
            Origin: "Amazon River",
            Diet: "Small insects and plankton"
        },
        {
            id: 12,
            Species: "Mandarinfish",
            Length: 4,
            Name: "Manny",
            Origin: "Pacific Ocean",
            Diet: "Small crustaceans and worms"
        },
        {
            id: 13,
            Species: "Parrotfish",
            Length: 8,
            Name: "Polly",
            Origin: "Tropical Oceans",
            Diet: "Algae and coral"
        },
        {
            id: 14,
            Species: "Rainbowfish",
            Length: 3,
            Name: "Rainy",
            Origin: "New Guinea",
            Diet: "Small insects and algae"
        },
        {
            id: 15,
            Species: "Swordtail",
            Length: 4,
            Name: "Blade",
            Origin: "Central America",
            Diet: "Small insects and algae"
        },
        {
            id: 16,
            Species: "Tiger Barb",
            Length: 2,
            Name: "Stripes",
            Origin: "Sumatra",
            Diet: "Small insects and plants"
        },
        {
            id: 17,
            Species: "Triggerfish",
            Length: 9,
            Name: "Trigger",
            Origin: "Tropical Oceans",
            Diet: "Crustaceans and small fish"
        },
        {
            id: 18,
            Species: "Betta",
            Length: 2,
            Name: "Rex",
            Origin: "Southeast Asia",
            Diet: "Insects and small crustaceans"
        },
        {
            id: 19,
            Species: "Discus",
            Length: 6,
            Name: "Discord",
            Origin: "Amazon River",
            Diet: "Insects, worms, and plants"
        },
        {
            id: 20,
            Species: "Koi",
            Length: 12,
            Name: "Kai",
            Origin: "Japan",
            Diet: "Insects, plants, and algae"
        }
        
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
