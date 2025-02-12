let imgs = [];
let counter = 0;
firstTouch = true;
let touch = 0;
let gain;
let player;
let path;
let pathLength;
let pathCounter = 3100;
let filesLoaded = false;
let frame;
const imageFiles = shuffle(files);
unmuteIosAudio()

function preload() {
    imgs[0] = loadImage(imageFiles[0]);
    imgs[1] = loadImage(imageFiles[1]);
    imgs[2] = loadImage(imageFiles[2]);
    imgs[3] = loadImage(imageFiles[3]);
    imgs[4] = loadImage(imageFiles[4]);
    frame = loadImage('images/frame.png')
}

function setup() {
    angleMode(DEGREES);
    createCanvas(windowWidth, windowHeight);
    background(20);
    imageMode(CENTER);
    textAlign(CENTER);
    gain = new Tone.Gain(1).toDestination();
    player = new Tone.Players({
        etla: "sounds/etla1.mp3",
        palm: "sounds/palm.mp3",
        rocks: "sounds/rocks.mp3",
        campo: "sounds/camp.mp3",
        cap: "sounds/cap.wav",
        dogs: "sounds/dogs.mp3",
        pebble: "sounds/pebble.mp3",
        recs: "sounds/recs.mp3",
        scrape: "sounds/scrape.mp3",
        shards: "sounds/shards.mp3",
        stone: "sounds/stone.mp3",
        squeek: "sounds/sqwik.mp3",
        zocalo: "sounds/zocalo.mp3",
        rain: "sounds/rain.mp3",
        crickets: "sounds/crickets.mp3",
        noodle1: "sounds/noodle_01.mp3",
        noodle2: "sounds/noodle_02.mp3",
        noodle4: "sounds/noodle_04.mp3",
        noodle10: "sounds/noodle_10.mp3",
        noodle11: "sounds/noodle_11.mp3"
    }, () => {
        filesLoaded = true;
    });
    player.fadeIn = 1;
    player.fadeOut = 1;
    player.connect(gain);
}

function draw() {
    drawLoadingAnimation();
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
            player.player('noodle1').start(0, Math.random() * 30, 7);
        } else if (touch == 9) {
            player.player('campo').start(0, Math.random() * 5, 5);
        } else if (touch == 12) {
            player.player('cap').start(0, Math.random() * 15, 5);
        } else if (touch == 15) {
            player.player('dogs').start(0, Math.random() * 10, 5);
        } else if (touch == 18) {
            player.player('noodle2').start(0, Math.random() * 30, 7);
        } else if (touch == 21) {
            player.player('recs').start(0, 0, 5);
        } else if (touch == 24) {
            player.player('scrape').start(0, Math.random() * 10, 5);
        } else if (touch == 27) {
            player.player('shards').start(0, Math.random() * 15, 5);
        } else if (touch == 30) {
            player.player('noodle4').start(0, Math.random() * 30, 7);
        } else if (touch == 33) {
            player.player('squeek').start(0, Math.random() * 20, 5);
        } else if (touch == 36) {
            player.player('zocalo').start(0, Math.random() * 15, 5);
        } else if (touch == 39) {
            player.player('noodle10').start(0, Math.random() * 30, 7);
        } else if (touch == 42) {
            player.player('crickets').start(0, Math.random() * 15, 5);
        } else if (touch == 45) {
            player.player('etla').start(0, Math.random() * 10, 5);
        } else if (touch == 48) {
            player.player('pebble').start(0, Math.random() * 15, 5);
        } else if (touch == 51) {
            player.player('noodle11').start(0, Math.random() * 30, 7);
        } else if (touch == 54) {
            player.player('stone').start(0, Math.random() * 20, 5);
        } else if (touch == 57) {
            player.player('rain').start(0, Math.random() * 15, 5);
        }

    }
    touch++;
    if (touch > 57) {
        touch = 0;
    }
});

document.addEventListener("touchstart", async() => {
    if (touch == 0) {
        await Tone.start();
        console.log("touch audio is ready");
        firstTouch = false;
    }
    if (player.loaded) {
        if (touch == 0) {
            player.player('rocks').start(0, Math.random() * 10, 5);
        } else if (touch == 3) {
            player.player('palm').start(0, Math.random() * 20, 5);
        } else if (touch == 6) {
            player.player('noodle1').start(0, Math.random() * 30, 7);
        } else if (touch == 9) {
            player.player('campo').start(0, Math.random() * 5, 5);
        } else if (touch == 12) {
            player.player('cap').start(0, Math.random() * 15, 5);
        } else if (touch == 15) {
            player.player('dogs').start(0, Math.random() * 10, 5);
        } else if (touch == 18) {
            player.player('noodle2').start(0, Math.random() * 30, 7);
        } else if (touch == 21) {
            player.player('recs').start(0, 0, 5);
        } else if (touch == 24) {
            player.player('scrape').start(0, Math.random() * 10, 5);
        } else if (touch == 27) {
            player.player('shards').start(0, Math.random() * 15, 5);
        } else if (touch == 30) {
            player.player('noodle4').start(0, Math.random() * 30, 7);
        } else if (touch == 33) {
            player.player('squeek').start(0, Math.random() * 20, 5);
        } else if (touch == 36) {
            player.player('zocalo').start(0, Math.random() * 15, 5);
        } else if (touch == 39) {
            player.player('noodle10').start(0, Math.random() * 30, 7);
        } else if (touch == 42) {
            player.player('crickets').start(0, Math.random() * 15, 5);
        } else if (touch == 45) {
            player.player('etla').start(0, Math.random() * 10, 5);
        } else if (touch == 48) {
            player.player('pebble').start(0, Math.random() * 15, 5);
        } else if (touch == 51) {
            player.player('noodle11').start(0, Math.random() * 30, 7);
        } else if (touch == 54) {
            player.player('stone').start(0, Math.random() * 20, 5);
        } else if (touch == 57) {
            player.player('rain').start(0, Math.random() * 15, 5);
        }

    }
    touch++;
    if (touch > 57) {
        touch = 0;
    }
});

function mousePressed() {
    let img = imgs[counter];
    push();
    translate(mouseX, mouseY);
    if (img.width > 3000) {
        let scaleDown = random(0.1, 0.3)
        scale(scaleDown)
    } else if (img.width > 1000) {
        let scaleDown = random(0.1, 0.5)
        scale(scaleDown)
    } else if (img.width > 500) {
        let scaleDown = random(0.5, 1.0)
        scale(scaleDown);
    } else {
        let scaleDown = random(0.5, 1.5)
        scale(scaleDown)
    }
    rotate(random(-15, 15))
    image(img, 0, 0);
    pop();
    counter++;
    let nextImg = loadImage(imageFiles[(counter + 4) % imageFiles.length]);
    imgs.push(nextImg);
}

function drawLoadingAnimation() {
    let scaler = 0.3;
    stroke("#fffb00")
    strokeWeight(8);
    let originPoint = path.getPointAtLength(0);
    let thisPoint = path.getPointAtLength(pathCounter)
    if (pathCounter < 7500) {
        push();
        translate(width / 2 - 150, height / 2 - 200);
        point(thisPoint.x * scaler, thisPoint.y * scaler);
        pop();
        pathCounter += 15;
    } else {
        if (filesLoaded) {
            background(20);
            textSize(32);
            textFont('Atkinson Hyperlegible Mono')
            noStroke();
            fill(255, 251, 0);
            push();
            translate(width / 2 - 150, height / 2 - 200);
            text('haga clic', thisPoint.x * scaler, thisPoint.y * scaler)
            pop();
            noLoop();
        } else {
            background(20);
            pathCounter = 3100;
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    path = document.getElementById('path1')
    pathLength = Math.floor(path.getTotalLength());
});