const personalityRules = [
    {
        "id": "personalidad_imaginativa_1",
        "condition": function (R) {
            R.when(
                this.pensamiento == "sensitivo",
                this.preocupacion_por == "los_demas",
                this.en_discusiones_es == "lastimado_facilmente"
            );
        },
        "consequence": function (R) {
            this.personalidad = "imaginativa";
            R.stop();
        }
    },
    {
        "id": "personalidad_imaginativa_2",
        "condition": function (R) {
            R.when(
                this.pensamiento == "sensitivo",
                this.preocupacion_por == "los_demas",
                this.en_discusiones_es == "evasivo",
                this.cualidad_principal == "creatividad"
            );
        },
        "consequence": function (R) {
            this.personalidad = "imaginativa";
            R.stop();
        }
    },
    {
        "id": "personalidad_pasiva_1",
        "condition": function (R) {
            R.when(
                this.pensamiento == "sensitivo",
                this.preocupacion_por == "los_demas",
                this.en_discusiones_es == "evasivo",
                this.cualidad_principal == "cooperacion"
            );
        },
        "consequence": function (R) {
            this.personalidad = "pasiva";
            R.stop();
        }
    },
    {
        "id": "personalidad_imaginativa_3",
        "condition": function (R) {
            R.when(
                this.pensamiento == "sensitivo",
                this.preocupacion_por == "si_mismo",
                this.sentimiento_dominante == "frustracion",
                this.cualidad_principal == "creatividad"
            );
        },
        "consequence": function (R) {
            this.personalidad = "imaginativa";
            R.stop();
        }
    },
    {
        "id": "personalidad_pasiva_1",
        "condition": function (R) {
            R.when(
                this.pensamiento == "sensitivo",
                this.preocupacion_por == "si_mismo",
                this.sentimiento_dominante == "frustracion",
                this.cualidad_principal == "cooperacion"
            );
        },
        "consequence": function (R) {
            this.personalidad = "pasiva";
            R.stop();
        }
    },
    {
        "id": "personalidad_pasiva_2",
        "condition": function (R) {
            R.when(
                this.pensamiento == "sensitivo",
                this.preocupacion_por == "si_mismo",
                this.sentimiento_dominante == "paciencia",
                this.preferencia_por == "trabajo_en_equipo"
            );
        },
        "consequence": function (R) {
            this.personalidad = "pasiva";
            R.stop();
        }
    },
    {
        "id": "personalidad_pasiva_3",
        "condition": function (R) {
            R.when(
                this.pensamiento == "sensitivo",
                this.preocupacion_por == "si_mismo",
                this.sentimiento_dominante == "paciencia",
                this.preferencia_por == "trabajo_individual",
                this.socializa == "facilmente"
            );
        },
        "consequence": function (R) {
            this.personalidad = "pasiva";
            R.stop();
        }
    },
    {
        "id": "personalidad_solitaria_1",
        "condition": function (R) {
            R.when(
                this.pensamiento == "sensitivo",
                this.preocupacion_por == "si_mismo",
                this.sentimiento_dominante == "paciencia",
                this.preferencia_por == "trabajo_individual",
                this.socializa == "dificilmente"
            );
        },
        "consequence": function (R) {
            this.personalidad = "solitaria";
            R.stop();
        }
    },
    {
        "id": "personalidad_pasiva_4",
        "condition": function (R) {
            R.when(
                this.pensamiento == "racional",
                this.percibido_como == "buen_miembro_de_equipo",
                this.preferencia_por == "trabajo_en_equipo"
            );
        },
        "consequence": function (R) {
            this.personalidad = "pasiva";
            R.stop();
        }
    },
    {
        "id": "personalidad_pasiva_5",
        "condition": function (R) {
            R.when(
                this.pensamiento == "racional",
                this.percibido_como == "buen_miembro_de_equipo",
                this.preferencia_por == "trabajo_individual",
                this.socializa == "facilmente"
            );
        },
        "consequence": function (R) {
            this.personalidad = "pasiva";
            R.stop();
        }
    },
    {
        "id": "personalidad_solitaria_2",
        "condition": function (R) {
            R.when(
                this.pensamiento == "racional",
                this.percibido_como == "buen_miembro_de_equipo",
                this.preferencia_por == "trabajo_individual",
                this.socializa == "dificilmente"
            );
        },
        "consequence": function (R) {
            this.personalidad = "solitaria";
            R.stop();
        }
    },
    {
        "id": "personalidad_pasiva_6",
        "condition": function (R) {
            R.when(
                this.pensamiento == "racional",
                this.percibido_como == "tranquilo_y_o_arrogante",
                this.facultad == "complaciente",
                this.socializa == "facilmente"
            );
        },
        "consequence": function (R) {
            this.personalidad = "pasiva";
            R.stop();
        }
    },
    {
        "id": "personalidad_solitaria_3",
        "condition": function (R) {
            R.when(
                this.pensamiento == "racional",
                this.percibido_como == "tranquilo_y_o_arrogante",
                this.facultad == "complaciente",
                this.socializa == "dificilmente"
            );
        },
        "consequence": function (R) {
            this.personalidad = "solitaria";
            R.stop();
        }
    },
    {
        "id": "personalidad_solitaria_4",
        "condition": function (R) {
            R.when(
                this.pensamiento == "racional",
                this.percibido_como == "tranquilo_y_o_arrogante",
                this.facultad == "iniciativa_propia"
            );
        },
        "consequence": function (R) {
            this.personalidad = "solitaria";
            R.stop();
        }
    }
]

module.exports = personalityRules