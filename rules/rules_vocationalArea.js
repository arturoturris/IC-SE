const vocationalRules = [
    {
        "id": "area_interes_artes",
        "condition": function (R) {
            R.when(
                this.motivacion == "palabras" &&
                this.aptitud == "formacion" &&
                this.personalidad == "imaginativa"
            );
        },
        "consequence": function (R) {
            this.area_interes = "artes";
            this.reason = "Tienes una motivación por las palabras, tu personalidad creativa hace que puedas imaginar nuevas formas de resolver un problema, esto te puede llevar a formarte adecuadamente en una carrera del area de Artes.";
            R.stop();
        }
    },
    {
        "id": "area_interes_ciencias",
        "condition": function (R) {
            R.when(
                this.motivacion == "experimental" &&
                this.aptitud == "observacion" &&
                this.personalidad == "pasiva"
            );
        },
        "consequence": function (R) {
            this.area_interes = "ciencias";
            this.reason = "Tienes curiosidad y te lleva a experimentar nuevas experiencias, tu personalidad pasiva hace que puedas observar detenidamente el mundo, esto te puede llevar a formarte adecuadamente en una carrera del area de Ciencias.";
            R.stop();
        }
    },
    {
        "id": "area_interes_humanidades",
        "condition": function (R) {
            R.when(
                this.motivacion == "social" &&
                this.aptitud == "penetracion_verbal" &&
                this.personalidad == "solitaria"
            );
        },
        "consequence": function (R) {
            this.area_interes = "humanidades";
            this.reason = "";
            R.stop();
        }
    }
]

module.exports = vocationalRules