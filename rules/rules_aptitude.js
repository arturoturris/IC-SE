const aptitudeRules = [
    {
        "id": "aptitud_formacion",
        "condition": function (R) {
            R.when(
                this.razonamiento == "logica_y_visual",
                this.sentido_visual == "forma_y_simetria"
            );
        },
        "consequence": function (R) {
            this.aptitud = "formacion";
            R.stop();
        }
    },
    {
        "id": "aptitud_observacion_1",
        "condition": function (R) {
            R.when(
                this.razonamiento == "logica_y_visual",
                this.sentido_visual == "los_detalles"
            );
        },
        "consequence": function (R) {
            this.aptitud = "observacion";
            R.stop();
        }
    },
    {
        "id": "aptitud_observacion_2",
        "condition": function (R) {
            R.when(
                this.razonamiento == "palabras_y_numeros",
                this.analisis == "numerico"
            );
        },
        "consequence": function (R) {
            this.aptitud = "observacion";
            R.stop();
        }
    },
    {
        "id": "aptitud_penetracion_verbal",
        "condition": function (R) {
            R.when(
                this.razonamiento == "palabras_y_numeros",
                this.analisis == "linguistico"
            );
        },
        "consequence": function (R) {
            this.aptitud = "penetracion_verbal";
            R.stop();
        }
    }
]
module.exports = aptitudeRules