$(function () {
    $('#telefone').mask("00 00000-0000", { reverse: false });
    getPessoa();
});

function getPessoa() {
    $.post("../backend/pessoa/pessoa.php", {
    }).success(function (result) {
        result = JSON.parse(result);

        if (result != "" && result != null) {
            var tabela = $("table tbody");
            tabela.html("");
            var row = "";
            $.each(result, function (a, b) {
                row = " <tr>";
                row += " <td>" + b.nome + "</td>";
                row += " <td>" + b.sobre_nome + "</td>";
                row += " <td>" + b.endereco + "</td>";
                row += " <td>" + b.telefone + "</td>";
                row += " <td><span data-id='" + b.id + "' class='editarPessoa'><i class='fa fa-pencil' aria-hidden='true'></i></span><span data-id='" + b.id + "' class='exlcuirPessoa'><i class='fa fa-trash' aria-hidden='true'></i></span></td>";
                row += "</tr>";
                tabela.append(row);
            });
        }
        else {
            var tabela = $("table tbody");
            tabela.html("");
            $(".pessoas-ativas").hide();
            $(".criar-pessoa").show();
        }

    }).fail(function () {

    });
}

$("#adicionar_pessoa").click(function () {
    $(".pessoas-ativas").hide();
    $(".criar-pessoa").show();
});

$("#cancelar").click(function () {
    $(".pessoas-ativas").show();
    $(".criar-pessoa").hide();
});

$("#salvar").click(function () {
    var url = "";
    if (id == "") {
        url = "../backend/pessoa/setPessoa.php";
    } else {
        url = "../backend/pessoa/updatePessoa.php";
    }

    var nome = $("#nome").val();
    var sobre_nome = $("#sobrenome").val();
    var endereco = $("#endereco").val();
    var telefone = $("#telefone").val();

    if (nome != "" && sobre_nome != "" && endereco != "" && telefone != "") {
        $.post(url, {
            id: id,
            nome: nome,
            sobre_nome: sobre_nome,
            endereco: endereco,
            telefone: telefone

        }).success(function (result) {

            getPessoa();
            $(".pessoas-ativas").show();
            $(".criar-pessoa").hide();
            $("input[type=text]").val("");

        }).fail(function () {

        });
    }
    else {
        var campos = "";
        var maiscampo = false;
        $("input[type=text]").each(function () {
            if ($(this).val() == "") {
                if (campos == "") {
                    campos = $(this).prop("id");
                }
                else {
                    maiscampo = true;
                    campos += ", " + $(this).prop("id");
                }
            }
        });
        maiscampo == true ? alert("Os campos (" + campos.toUpperCase() + ") não podem estar vazios!") : alert("O campo (" + campos.toUpperCase() + ") não pode ser vazio!");
    }
});

var id = "";

$("body").on("click", ".editarPessoa", function () {
    id = $(this).data("id");
    $.post("../backend/pessoa/pessoa.php", {
        id: id
    }).success(function (result) {
        result = JSON.parse(result);
        $.each(result, function (a, b) {
            $("#nome").val(b.nome);
            $("#sobrenome").val(b.sobre_nome);
            $("#endereco").val(b.endereco);
            $("#telefone").val(b.telefone);
            $(".pessoas-ativas").hide();
            $(".criar-pessoa").show();
        });

        $(".mdl-js-textfield").addClass("is-dirty");

    }).fail(function () {

    });
});

$("body").on("click", ".exlcuirPessoa", function () {
    if (confirm('Deseja excluir?')) {
        id = $(this).data("id");
        $.post("../backend/pessoa/excluirPessoa.php", {
            id: id
        }).success(function (result) {
            getPessoa();
        }).fail(function () {

        });
    }
});
