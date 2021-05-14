const RuleEngine = require("node-rules");

// Creating Rule Engine instance
const R = new RuleEngine(null,{ignoreFactChanges: true});

// Adding rules
const vocationalRules = require('./rules/rules_vocationalArea')
const personalityRules = require('./rules/rules_personality')

R.register(vocationalRules)
R.register(personalityRules)

//Example
const fact = {
    motivacion: "palabras",
    aptitud: "formacion",
    personalidad: "imaginativa"
}

//Infering with forward chaining
R.execute(fact, function (data) {
    if(data.result) {
        const areaInteres = data.area_interes

        if(areaInteres){
            console.log(`El area de interes inferido es: ${areaInteres}.`)
        } else {
            console.log('No se ha podido inferir el área de interes con los hechos proporcionados.')
        }

        console.log(`*******MEMORIA DE TRABAJO*******`)
        console.log(data)
    } else {
        console.log('Ocurrio un error al utilizar el motor de inferencia.')
    }
})