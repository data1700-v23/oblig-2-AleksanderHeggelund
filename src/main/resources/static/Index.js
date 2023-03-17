function kjøp() {
    const kino = {
        film: $("#film").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        tlf: $("#telefonnr").val(),
        epost: $("#epost").val()
    };

    // Add validation for user input

    if (kino.antall == "") {
        $("#errorAntall").html ("Må skrive noe inn i antall");
    } else {
        $("#errorAntall").html("")
    }
    if (kino.fornavn == "") {
        $("#errorFornavn").html("Må skrive noe inn i fornavn")
    } else {
        $("#errorFornavn").html("")
    }
    if (kino.etternavn == "") {
        $("#errorEtternavn").html("Må skrive noe inn i etternavn")
    } else {
        $("#errorEtternavn").html("")
    }
    if (kino.epost == "") {
        $("#errorEpost").html("Må skrive noe inn i epost")
    } else {
        $("#errorEpost").html("")
    }
    if (kino.tlf == "") {
        $("#errorTelefonnr").html("Må skrive noe inn i telefonnr")
    } else {
        $("#errorTelefonnr").html("")
    }

    // Send data to the server

    $.post("/lagre", kino, function () {
        hentBillett();
    });

    $("#film").val("Velg Film Her");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");

}

    function hentBillett() {
        $.get("/hentAlle", function (data) {
            utBillett(data)
        });
    }

    function utBillett(Billett) {
        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for (const kino of Billett) {
            ut += "<tr><td>" + kino.film + "</td><td>" + kino.antall + "</td><td>" + kino.fornavn + "</td><td>" + kino.etternavn + "</td><td>" + kino.tlf + "</td><td>" + kino.epost + "</td></td>";
        }
        ut += "</table>";
        $("#visBilletter").html(ut);
    }

    function slett() {
        $.get("/slettAlle", function () {
            hentBillett();
        });
    }


