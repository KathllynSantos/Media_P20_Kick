document.getElementById('mediaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

 
    const media = (nota1 + nota2 + nota3) / 3;

   
    const status = media >= 6.0 ? 'Aprovado' : 'Reprovado';

   
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Média: ${media.toFixed(2)}<br>Status: ${status}`;
});
