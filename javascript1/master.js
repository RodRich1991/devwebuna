function tabuada(numero, elementos){
    var conteudo = document.getElementById('conteudo'); //Abre a lista do HTML

    for(var r=1; r<=elementos; r++)
    {
          var lista = document.createElement('li');                 // Create a <li> node
          lista.appendChild(document.createTextNode(numero +' x '+r+' = '+numero*r));
          conteudo.appendChild(lista);                              // Append the text to <li>
    }

    
}