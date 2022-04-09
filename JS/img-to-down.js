function baixar() {
    domtoimage.toPng(document.getElementById('assinatura'))
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'assinatura.png';
            link.href = dataUrl;
            link.click();
            document.location.reload(true)
        });
}


function down() {

    var nome = document.getElementById("nome").value;
    var cargo = document.getElementById("cargo").value;
    var fone = document.getElementById("fone").value;

    if (nome === "") {
        alert("Insira seu nome!");
    } else if (cargo === "") {
        alert("Insira seu cargo ou função!");
    } else if (fone === "") {
        if (confirm("Deseja continuar sem inserir seu telefone?") == true) {
            return baixar();
        }
    } else {
        return baixar();
    }
    
}












//Exibir o Item

// function shot() {
//     var elmt = document.getElementById('assinatura')
//         domtoimage.toPng(elmt)
//             .then(function (dataUrl) {
//                 var img = new Image();
//                 img.src = dataUrl;
//                 document.body.appendChild(img);
//             })
//             .catch(function (error) {
//                 console.error('error found', error);
//             });
// }