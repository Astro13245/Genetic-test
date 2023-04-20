const prompt = require("prompt-sync")({ sigint: true });

let unicellularOrganisms = {};

let multicellularOrganisms = {};

function create(){
    console.log("You can only create unicellular organisms(sorry)")
    let name = prompt("What's the name of the organism");
    let type = prompt("What's the type(Prokaryotes/Eukaryotes): ");
    unicellularOrganisms[name] = {
        type: type,

    };

    let startPlay = prompt("Do you want to start")

    if (startPlay.toLowerCase() === "yes") {
        play();
    }
};

function eat(eatingOrganism, beingEatenOrganism) {

}

function reproduce(organism){

};

function play(){
    for (let i = 0; i < unicellularOrganisms.length; i++){
        unicellularOrganisms[i].numberOfOrganisms++;
    };

    
};