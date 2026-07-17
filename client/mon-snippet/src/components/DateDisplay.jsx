import FormatDjangoDate from './FormatDjangoDate';

export default function DateDisplay({ created_at, updated_at }) {
    const dateCreation = new Date(created_at);
    const dateModif = new Date(updated_at);

    // On considère qu'il y a modification si l'écart est supérieur à 1 minute (60000ms)
    const isModified = dateModif.getTime() > dateCreation.getTime() + 0;
    
    // Si modifié, on affiche la date de modif, sinon la date de création
    const displayDate = isModified ? updated_at : created_at;

    return (
        <p className="date">
            {isModified ? "Modifié le " : "Publié le "} 
            <FormatDjangoDate date={displayDate} />
        </p>
    );
}