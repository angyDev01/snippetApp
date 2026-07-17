




export default function( {date, date1} ){
    // foncion de conversion de la date en format lisible
    const formatDjangoDate = (djangoDateString) => {
    if (!djangoDateString) return "";
    
    // Transforme la chaîne ISO en objet Date JavaScript
    const date = new Date(djangoDateString);
    const date1 = new Date(djangoDateString)
    console.log(date, date1)
    
    // Formate en français standard "12 juin 2026"
    return new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date, date1);
    };
    return(
        <p>{formatDjangoDate(date, date1)}</p>
    )
}