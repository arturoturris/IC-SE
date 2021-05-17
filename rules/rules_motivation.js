const motivationRules = [
    {
        "id": "motivacion_experimental_1",
        "condition": function (R) {
            R.when(
                this.comunicacion == "oral",
                this.relacion == "distante"
            );
        },
        "consequence": function (R) {
            this.motivacion = "experimental";
            R.stop();
        }
    },
    {
        "id": "motivacion_experimental_2",
        "condition": function (R) {
            R.when(
                this.comunicacion == "escrita",
                this.preferencia == "analizar"
            );
        },
        "consequence": function (R) {
            this.motivacion = "experimental";
            R.stop();
        }
    },
    {
        "id": "motivacion_social",
        "condition": function (R) {
            R.when(
                this.comunicacion == "oral",
                this.relacion == "involucrado"
            );
        },
        "consequence": function (R) {
            this.motivacion = "social";
            R.stop();
        }
    },
    {
        "id": "motivacion_palabras",
        "condition": function (R) {
            R.when(
                this.comunicacion == "escrita",
                this.preferencia == "crear"
            );
        },
        "consequence": function (R) {
            this.motivacion = "palabras";
            R.stop();
        }
    }
]
module.exports = motivationRules