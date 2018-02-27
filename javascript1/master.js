function tabuada(numero){

    var conteudo = document.getElementById('conteudo'); //Abre a lista do HTML
    var num = numero;

    for(var r=1; r<=10; r++)
    {
          var lista = document.createElement('li');                 // Create a <li> node
          lista.appendChild(document.createTextNode(num +' x '+r+' = '+num*r));
          conteudo.appendChild(lista);                              // Append the text to <li>
    }

    
}