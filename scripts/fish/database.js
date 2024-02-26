const database = {
    fish: [
        {
            id: 1,
            image: "https://media.istockphoto.com/id/149081471/photo/blow-fish-frontal-view.jpg?s=612x612&w=0&k=20&c=NYsHnMesS_h4fiDavcE2gez5RKLvKHRbiYIn4B0XY9E=",
            Species: "Puffer",
            Length: 6,
            Name: "Scooby",
            Origin: "North Carolina",
            Diet: "Bugz"
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J5TAzH3MxSIVtmqKPIxteFORHI5M0RGH8eaRrcb2MBIX59YreGzcuwkKJGRqM45yAuU&usqp=CAU",
            Species: "Clownfish",
            Length: 3,
            Name: "Nemo",
            Origin: "Great Barrier Reef",
            Diet: "Algae and small crustaceans"
        },
        {
            id: 3,
            image: "data:image/jpeg;base64,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",
            Species: "Angelfish",
            Length: 5,
            Name: "Angel",
            Origin: "Amazon River",
            Diet: "Small fish and algae"
        },
        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J5TAzH3MxSIVtmqKPIxteFORHI5M0RGH8eaRrcb2MBIX59YreGzcuwkKJGRqM45yAuU&usqp=CAU",
            Species: "Blue Tang",
            Length: 7,
            Name: "Dory",
            Origin: "Indo-Pacific",
            Diet: "Algae"
        },
        {
            id: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J5TAzH3MxSIVtmqKPIxteFORHI5M0RGH8eaRrcb2MBIX59YreGzcuwkKJGRqM45yAuU&usqp=CAU",
            Species: "Discus",
            Length: 6,
            Name: "Disco",
            Origin: "Amazon River",
            Diet: "Insects, worms, and plants"
        },
        {
            id: 6,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J5TAzH3MxSIVtmqKPIxteFORHI5M0RGH8eaRrcb2MBIX59YreGzcuwkKJGRqM45yAuU&usqp=CAU",
            Species: "Guppy",
            Length: 2,
            Name: "Bubbles",
            Origin: "South America",
            Diet: "Small insects and algae"
        },
        {
            id: 7,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J5TAzH3MxSIVtmqKPIxteFORHI5M0RGH8eaRrcb2MBIX59YreGzcuwkKJGRqM45yAuU&usqp=CAU",
            Species: "Moorish Idol",
            Length: 8,
            Name: "Mojo",
            Origin: "Indo-Pacific",
            Diet: "Sponges and algae"
        },
        {
            id: 8,
            image: "",
            Species: "Tetra",
            Length: 1,
            Name: "Tetris",
            Origin: "South America",
            Diet: "Small insects and plankton"
        },
        {
            id: 9,
            image: "",
            Species: "Zebra Danio",
            Length: 2,
            Name: "Ziggy",
            Origin: "India",
            Diet: "Small insects and plankton"
        },
        {
            id: 10,
            image: "",
            Species: "Cichlid",
            Length: 5,
            Name: "Rocky",
            Origin: "Lake Malawi",
            Diet: "Insects, crustaceans, and algae"
        },
        {
            id: 11,
            image: "",
            Species: "Cardinal Tetra",
            Length: 1,
            Name: "Cardy",
            Origin: "Amazon River",
            Diet: "Small insects and plankton"
        },
        {
            id: 12,
            image: "",
            Species: "Mandarinfish",
            Length: 4,
            Name: "Manny",
            Origin: "Pacific Ocean",
            Diet: "Small crustaceans and worms"
        },
        {
            id: 13,
            image: "",
            Species: "Parrotfish",
            Length: 8,
            Name: "Polly",
            Origin: "Tropical Oceans",
            Diet: "Algae and coral"
        },
        {
            id: 14,
            image: "",
            Species: "Rainbowfish",
            Length: 3,
            Name: "Rainy",
            Origin: "New Guinea",
            Diet: "Small insects and algae"
        },
        {
            id: 15,
            image: "",
            Species: "Swordtail",
            Length: 4,
            Name: "Blade",
            Origin: "Central America",
            Diet: "Small insects and algae"
        },
        {
            id: 16,
            image: "",
            Species: "Tiger Barb",
            Length: 2,
            Name: "Stripes",
            Origin: "Sumatra",
            Diet: "Small insects and plants"
        },
        {
            id: 17,
            image: "",
            Species: "Triggerfish",
            Length: 9,
            Name: "Trigger",
            Origin: "Tropical Oceans",
            Diet: "Crustaceans and small fish"
        },
        {
            id: 18,
            image: "",
            Species: "Betta",
            Length: 2,
            Name: "Rex",
            Origin: "Southeast Asia",
            Diet: "Insects and small crustaceans"
        },
        {
            id: 19,
            image: "",
            Species: "Discus",
            Length: 6,
            Name: "Discord",
            Origin: "Amazon River",
            Diet: "Insects, worms, and plants"
        },
        {
            id: 20,
            image: "",
            Species: "Koi",
            Length: 12,
            Name: "Kai",
            Origin: "Japan",
            Diet: "Insects, plants, and algae"
        }
        
    ],

    tipList: [
        {
            id: 1,
            tip: "Regular water changes are key to maintaining a healthy fish tank ecosystem. Aim to change about 10-15% of the water weekly to remove waste and replenish essential nutrients, promoting the well-being of your aquatic friends."
        },
        {
            id: 2,
            tip: "Maintain proper filtration in your fish tank to keep the water clean and clear. Choose a filter that's suitable for the size of your tank and the type of fish you have, and clean or replace the filter media regularly to ensure optimal performance."
        },
        {
            id: 3,
            tip: "Consistently monitor and maintain the water temperature within the ideal range for your fish species. Invest in a reliable aquarium heater and thermometer to ensure the water stays within the recommended temperature range, providing a comfortable and stable environment for your fish."
        }

    ],

    locations: [
        {
            id: 1,
            country: "Australia",
            reef: "Great Barrier Reef"
        },
        {
            id: 2,
            country: "Indonesia",
            reef: "Coral Triangle"
        },
        {
            id: 3,
            country: "Egypt",
            reef: "Ras Mohammed National Park"
        },
        {
            id: 4,
            country: "Belize",
            reef: "Belize Barrier Reef"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tipList.map(tipList => ({...tipList}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}