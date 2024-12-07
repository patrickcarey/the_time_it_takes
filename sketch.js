const images = ["images/fifteen.png", "images/four.png", "images/nine.png", "images/tapes3.JPEG", "images/seven.png", "images/six.png", "images/tapes1.jpg", "images/three.png", "images/two.jpeg", "images/eleven.png", "images/five.png", "images/fourteen.jpg", "images/ten.png", "images/twelve.png", "images/eight.png", "images/jose.jpg", "images/etla.JPEG", "images/falls.JPEG", "images/pave.JPEG", "images/tapes2.JPEG", "images/thorns.JPEG"]
firstTouch = true;
let touch = 0;
const gain = new Tone.Gain(1).toDestination();

const player = new Tone.Players({
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
    crickets: "sounds/crickets.mp3"
}, () => {
    console.log('loaded')
});

player.connect(gain);

document.addEventListener("click", async() => {
    if (touch == 0) {
        await Tone.start();
        console.log("audio is ready");
        firstTouch = false;
    }
    if (player.loaded) {
        if (touch == 0) {
            player.player('rocks').start();
        } else if (touch == 3) {
            player.player('palm').start();
        } else if (touch == 6) {
            player.player('etla').start();
        } else if (touch == 10) {
            player.player('campo').start();
        } else if (touch == 13) {
            player.player('cap').start();
        } else if (touch == 18) {
            player.player('dogs').start();
        } else if (touch == 22) {
            player.player('pebble').start();
        } else if (touch == 28) {
            player.player('recs').start();
        } else if (touch == 33) {
            player.player('scrape').start();
        } else if (touch == 38) {
            player.player('shards').start();
        } else if (touch == 43) {
            player.player('stone').start();
        } else if (touch == 47) {
            player.player('squeek').start();
        } else if (touch == 50) {
            player.player('zocalo').start();
        } else if (touch == 55) {
            player.player('rain').start();
        } else if (touch == 60) {
            player.player('crickets').start();
        }

    }
    console.log(touch);
    touch++;
    if (touch > 60) {
        touch = 0;
    }
});
let i = 0

function placeImage(x, y) {
    const nextSrc = images[i]

    const img = document.createElement("img")
    img.setAttribute("src", nextSrc)
    img.setAttribute("draggable", "false")

    img.style.left = x + "px"
    img.style.top = y + "px"
    let randSize = (Math.random() * 30) + 20;
    img.style.width = randSize + "%"
    img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

    document.body.appendChild(img)

    i++;
    if (i >= images.length) {
        i = 0
    }
}

document.addEventListener("click", function(event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function(event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})