const faker = require('faker');
const fs = require('fs');

let shoeImages = [
    'https://sdc-nike.s3-us-west-1.amazonaws.com/nike-sdc/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg',
    'https://sdc-nike.s3-us-west-1.amazonaws.com/nike-sdc/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg',
    'https://sdc-nike.s3-us-west-1.amazonaws.com/nike-sdc/epic-react-flyknit-2-mens-running-shoe-2S0Cn1.jpg',
    'https://sdc-nike.s3-us-west-1.amazonaws.com/nike-sdc/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg',
    'https://sdc-nike.s3-us-west-1.amazonaws.com/nike-sdc/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg',
    'https://sdc-nike.s3-us-west-1.amazonaws.com/nike-sdc/joyride-cc-mens-shoe-7pfVQF.jpg',
    'https://sdc-nike.s3-us-west-1.amazonaws.com/nike-sdc/react-element-55-se-womens-shoe-L5WpdL.jpg',
    'https://sdc-nike.s3-us-west-1.amazonaws.com/nike-sdc/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg',
    'https://sdc-nike.s3-us-west-1.amazonaws.com/nike-sdc/react-ianga-mens-shoe-GBwZHW.jpg',
    'https://sdc-nike.s3-us-west-1.amazonaws.com/nike-sdc/air-max-270-react-eng-mens-shoe-CPRm5W.jpg'
]
let shoeKeyword = ['Men Shoe', 'Women Shoe', 'Running', 'Run', 'Air', 'Free', 'Zoom', 'React', 'Flyknit', 'Vomero', 'RN', 'Jordan', 'Free RN', 'Odyssey', 'Air Zoom', 'React A.I.R', 'React Terra', 'Zoom Vomero', 'React Ianga', 'Jordan React', 'Air Zoom Fly', 'Odyssey React', 'React Element', 'Air Zoom Fly 3', 'Zoom Vomero 14', 'Free RN Motion', 'React HyperSet', 'Air Zoom Freak', 'Air Zoom Vomero', 'React Element 55', 'Air Zoom Pegasus', 'React Terra Globe', 'Air Zoom Vomero 14', 'React HyperSet Rise', 'Odyssey React JoyRide', 'Odyssey React JoyRide CC', 'Air Zoom Pegasus FlyEase', 'Light Redwood', 'Pink Quartz', 'White', 'Dark Grey', 'Pure Platinum', 'Anthracite', 'Bright Crimson', 'Black', 'Pink Blast', 'Dune Red', 'Mahogany', 'Team Orange', 'Burgundy Ash', 'Stone Mauve', 'Barely Rose', 'Smokey Mauve', 'Metallic Red Bronze', 'Volt', 'Gum Light Brown', 'Aura', 'Light Armory Blue', 'Mint Foam', 'Blackened Blue', 'Cosmic Clay', 'Blue Hero', 'Sail', 'Barely Grey', 'Fossil', 'Pistachio Frost', 'Iced Lilac', 'Noble Red', 'Atomic Violet', 'Night Maroon', 'Oil Grey', 'Wolf Grey', 'Cool Grey', 'Metallic Platinum', 'Valerian Blue', 'Vivid Purple', 'Plum Chalk', 'Infinite Gold', 'Silver Lilac', 'Metallic Gold', 'True Berry', 'Vast Grey', 'Phantom', 'Barely Volt', 'Spruce Aura', 'Bio Beige', 'Light Orewood Brown', 'Villain Red', 'Hyper Crimson', 'Pumice', 'Celestial Gold', 'Echo Pink', 'Photon Dust', 'Light Thistle', 'Pollen Rise', 'Magic Flamingo', 'University Blue', 'Half Blue', 'Beechtree', 'Cargo Khaki', 'Off Noir', 'Summit White', 'Laser Fuchsia', 'Psychic Purple', 'Thunder Grey', 'Light Carbon', 'Bright Ceramic', 'Yellow Pulse', 'Ocean Cube', 'Metallic Cool Grey', 'Speed Yellow', 'Team Red', 'Cosmic Fuchsia', 'Limelight', 'Hyper Pink', 'Racer Blue', 'Atmosphere Grey', 'Sky Grey', 'Obsidian Mist', 'Particle Grey', 'Lava Glow', 'Light Bone', 'Laser Crimson', 'Platinum Tint', 'Track Red', 'Light Blue'];
let shoeType = ['Women Running Shoe', 'Men Running Shoe', 'Women Shoe', 'Men Shoe'];
let getRandomImageIndex = () => {
    return Math.floor(Math.random() * 10);
}
let getRandomTypeIndex = () => {
    return Math.floor(Math.random() * 4);
}
let getRandomKeywordArray = () => {
    let len = shoeKeyword.length;
    let arr = [];
    for (let i = 0; i < 14; i++) {
        let index = Math.floor(Math.random() * len);
        arr.push(shoeKeyword[index]);
    }
    return arr;
}

////////////////////////////////////////
////Generate JSON File Without Drain////
////////////////////////////////////////

const writeNikeData = () => {
    return{
        item: faker.commerce.productName(),
        type: shoeType[getRandomTypeIndex()],
        price: faker.random.number(300),
        image: shoeImages[getRandomImageIndex()],
        collections: getRandomKeywordArray(),
        id: count
    }
}

let writeStream = fs.createWriteStream('shoeData.json');

let count = 0;
console.time('JSON seed time')
for(let i = 0; i < 10000000; i++){
    writeStream.write(JSON.stringify(writeNikeData()) + "\n", 'utf8');
    count++;
}
console.timeEnd('JSON seed time')

writeStream.on('finish', () => {
    console.log('wrote all data to file');
});

writeStream.end();