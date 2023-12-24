function paint(colour) {
    const circle = document.getElementById('circleID');
    circle.style = `background-color:${colour}`;

    if (colour === "random") {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        let hex = n.slice(0, 6)
        circle.style = `background-color:#${hex}`;
    }
}