const prompt = require("prompt-sync")({ sigint: true });

let unicellularOrganisms = {};

let multicellularOrganisms = {};

function create(){
    console.log("You can only create unicellular organisms(sorry)")
    while (true) {
        let name = prompt("What's the name of the organism");
        let type = prompt("What's the type(Prokaryotes/Eukaryotes): ");
        unicellularOrganisms[name] = {
            type: type,
            numberOfOrganisms: 1
        };

        let startPlay = prompt("Do you want to start")

        if (startPlay.toLowerCase() === "yes" || startPlay.toLowerCase() === "Sure") {
            play();
        } else {
            continue;
        }
    }
};

function eat(eatingOrganism, beingEatenOrganism) {

}

function asexualReproduction(organism){
};

function sexualReproduction(firstParentOrganism, secondParentOrganisms){

}

function play(){
    
};

//Actually playing the test
create()