// setItem[clé], [valeur] / getItem[clé] / removeItem[clé]
// clear() : supprimer tout
// key([index]) : obtenir la clef située à l'index donnée
// lenght : obtenir le nombre d'éléments stockés

if(localStorage.getItem('prenom')) {
    document.body.append('Bonjour ' + localStorage.getItem('prenom'));
} else {
    let prenom = prompt('Quel est votre prenom ?');
    localStorage.setItem('prenom', prenom);
    document.body.append('Bonjour ' + prenom);
}