// Importation des hooks useState (pour gérer les données) et useEffect (pour déclencher des actions au chargement)
import { useState, useEffect } from "react";
// Importation de l'instance configurée d'Axios pour faire les requêtes HTTP vers l'API
import api from '../api/axiosInstance';
import CodeSnippet from './CodeSnippet';
import LangueStyle from './LangueStyle'
import FormatDjangoDate from './FormatDjangoDate'




function Acceuil() {
    const [snippets, setSnippets] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false); 

    // useEffect est utilisé ici pour appeler l'API au chargement du composant
    useEffect(() => {
        const fetchSnippets = async () => {    // Définition d'une fonction asynchrone pour effectuer la requête API
            try {
                const res = await api.get("/snippets");    // Envoi de la requête GET via Axios et stockage de la réponse dans 'res'
                setSnippets(res.data);
            } catch (err) {
                console.error(err); 
                setError("Impossible de charger les snippets.");   // Mise à jour du state 'error' pour informer l'utilisateur
            } finally {
                setLoading(false);    // Le bloc 'finally' s'exécute toujours : on désactive le mode chargement
            }
        };
        // Exécution de la fonction définie ci-dessus
        fetchSnippets();
    }, []);
    // Si le chargement est en cours, on affiche un message d'attente à l'utilisateur
    if (loading) return <div>Chargement en cours...</div>;

    // Début de l'affichage du composant
    return (
        <>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            {/* Vérification : si le tableau est vide et qu'il n'y a pas d'erreur, on affiche un message spécifique */}
            {snippets.length === 0 && !error ? (
                <p>Aucun snippet trouvé.</p>
            ) : (
                // Sinon, on génère une liste HTML à partir du tableau 'snippets'
                <div className="container">
                    {/* transforme chaque objet 'snippet' pour l'affiche */}
                    {snippets.map(({id, title, language, code, created_at}) => (
                        // La prop 'key' est obligatoire pour que React identifie chaque élément de manière unique
                        <div key={id}>
                            <h1>{title}</h1>
                            <LangueStyle langage={language} />
                            
                            <CodeSnippet code={code} language={language} />
                            <p className="date">Publié le <FormatDjangoDate date={created_at} /></p>
                        </div>
                    ))}
                </div>
            )}
           
        </>
    );
}

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Acceuil;