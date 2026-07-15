




export default function( {date} ){
    // foncion de conversion de la date en format lisible
    const formatDjangoDate = (djangoDateString) => {
    if (!djangoDateString) return "";
    
    // Transforme la chaîne ISO en objet Date JavaScript
    const date = new Date(djangoDateString);
    
    // Formate en français standard "12 juin 2026"
    return new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
    };
    return(
        <p>{formatDjangoDate(date)}</p>
    )
}