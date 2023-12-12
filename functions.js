 function exibir() {
    let mostrar = document.getElementById("mostrar")
    window.alert("***Lista criada com sucesso***")
}
 function mostrarLista() {
    document.write("<p><strong>Comex</strong></p>")
    pulaLinha();
    document.write("Código:1 Nome:Livros");
    pulaLinha();
    document.write("Código:2 Nome:Games")
    pulaLinha();
    document.write("Código:3 Nome:Comidas")
    pulaLinha();
    document.write("Código:4 Nome:Doçes")
    pulaLinha();
    document.write("Código:5 Nome:Salgados")
}
 function pulaLinha() {
    document.write("<br>")
}