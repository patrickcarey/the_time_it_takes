let imgs = [];
let counter = 0;
firstTouch = true;
let touch = 0;
let gain;
let player;
const imageFiles = shuffle(files);

function preload() {
    imgs[0] = loadImage(imageFiles[0]);
}

function setup() {
    angleMode(DEGREES);
    createCanvas(windowWidth, windowHeight);
    background(20)
    imageMode(CENTER)
    gain = new Tone.Gain(1).toDestination();
    player = new Tone.Players({
        etla: "sounds/etla1.mp3",
        palm: "sounds/palm.wav",
        rocks: "sounds/rocks.wav",
        campo: "sounds/camp.mp3",
        cap: "sounds/cap.wav",
        dogs: "sounds/dogs.mp3",
        pebble: "sounds/pebble.wav",
        recs: "sounds/recs.wav",
        scrape: "sounds/scrape.wav",
        shards: "sounds/shards.wav",
        stone: "sounds/stone.wav",
        squeek: "sounds/sqwik.mp3",
        zocalo: "sounds/zocalo.mp3",
        rain: "sounds/rain.mp3",
        crickets: "sounds/crickets.mp3",
        noodle1: "sounds/noodle_01.wav",
        noodle2: "sounds/noodle_02.wav",
        noodle4: "sounds/noodle_04.wav",
        noodle10: "sounds/noodle_10.wav",
        noodle11: "sounds/noodle_11.wav"
    }, () => {
        console.log('loaded')
    });
    player.fadeIn = 1;
    player.fadeOut = 1;
    player.connect(gain);
}

document.addEventListener("click", async() => {
    if (touch == 0) {
        await Tone.start();
        console.log("audio is ready");
        firstTouch = false;
    }
    if (player.loaded) {
        if (touch == 0) {
            player.player('rocks').start(0, Math.random() * 10, 5);
        } else if (touch == 3) {
            player.player('palm').start(0, Math.random() * 20, 5);
        } else if (touch == 6) {
            player.player('noodle1').start(0, Math.random() * 30, 10);
        } else if (touch == 9) {
            player.player('campo').start(0, Math.random() * 5, 5);
        } else if (touch == 12) {
            player.player('cap').start(0, Math.random() * 15, 5);
        } else if (touch == 15) {
            player.player('dogs').start(0, Math.random() * 10, 5);
        } else if (touch == 18) {
            player.player('noodle2').start(0, Math.random() * 30, 10);
        } else if (touch == 21) {
            player.player('recs').start(0, 0, 5);
        } else if (touch == 24) {
            player.player('scrape').start(0, Math.random() * 10, 5);
        } else if (touch == 27) {
            player.player('shards').start(0, Math.random() * 15, 5);
        } else if (touch == 30) {
            player.player('noodle4').start(0, Math.random() * 30, 10);
        } else if (touch == 33) {
            player.player('squeek').start(0, Math.random() * 20, 5);
        } else if (touch == 36) {
            player.player('zocalo').start(0, Math.random() * 15, 5);
        } else if (touch == 39) {
            player.player('noodle10').start(0, Math.random() * 30, 10);
        } else if (touch == 42) {
            player.player('crickets').start(0, Math.random() * 15, 5);
        } else if (touch == 45) {
            player.player('etla').start(0, Math.random() * 10, 5);
        } else if (touch == 48) {
            player.player('pebble').start(0, Math.random() * 15, 5);
        } else if (touch == 51) {
            player.player('noodle11').start(0, Math.random() * 30, 10);
        } else if (touch == 54) {
            player.player('stone').start(0, Math.random() * 20, 5);
        } else if (touch == 57) {
            player.player('rain').start(0, Math.random() * 15, 5);
        }

    }
    console.log(touch);
    touch++;
    if (touch > 57) {
        touch = 0;
    }
});

function mousePressed() {
    let img = imgs[counter];
    img.resize(random(200, 600), 0);
    push();
    translate(mouseX, mouseY);
    rotate(random(-15, 15))
    image(img, 0, 0);
    pop();
    counter++;
    let nextImg = loadImage(imageFiles[counter % imageFiles.length]);

    imgs.push(nextImg);

}