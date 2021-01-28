function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

console.log("hello world", process.version);

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");

    sleep(2000, () => {
        process.exit(0);
    });
});