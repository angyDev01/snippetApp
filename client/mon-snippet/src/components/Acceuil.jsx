// Importation des hooks useState (pour gérer les données) et useEffect (pour déclencher des actions au chargement)
import { useState, useEffect } from "react";
// Importation de l'instance configurée d'Axios pour faire les requêtes HTTP vers l'API
import api from '../api/axiosInstance';
import CodeSnippet from './CodeSnippet';
import LangueStyle from './LangueStyle';
import FormatDjangoDate from './FormatDjangoDate';
import '../index.css';
import ClipBoard from "./ClipBoard";
import { ErrorIcon } from "react-hot-toast";




function Acceuil() {
    const [snippets, setSnippets] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false); 

    // useEffect est utilisé ici pour appeler l'API au chargement du composant
    useEffect(() => {
        const fetchSnippets = async () => {    // Définition d'une fonction asynchrone pour effectuer la requête API
            try {
                const res = await api.get("/snippets");    // Envoi de la requête GET via Axios et stockage de la réponse dans 'res'
                await new Promise((resolve) => setTimeout(resolve, 2000));
                setSnippets(res.data);
            } catch (err) {
                console.error(err); 
                setError("Impossible de charger les données.");   // Mise à jour du state 'error' pour informer l'utilisateur
            } finally {
                setLoading(false);    // Le bloc 'finally' s'exécute toujours : on désactive le mode chargement
            }
        };
        // Exécution de la fonction définie ci-dessus
        fetchSnippets();
    }, []);
    // Si le chargement est en cours, on affiche un message d'attente à l'utilisateur
   if (loading) return (
        <div className="flex items-center justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span className="ml-2 text-gray-500">Chargement...</span>
        </div>
        );

    // Début de l'affichage du composant
    return (
        <>
           {/*  {error && <p style={{ color: 'red' }}>{error}</p>} */}
            {error && <div className="no-data flex" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                    <img src="" alt="" />
                    {error}
                </div>}
            
            {/* Vérification : si le tableau est vide et qu'il n'y a pas d'erreur, on affiche un message spécifique */}
            {snippets.length === 0 && !error ? (
                <div className="no-data">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                </div>
            ) : (
                // Sinon, on génère une liste HTML à partir du tableau 'snippets'
                <div className="container">
                    {/* transforme chaque objet 'snippet' pour l'affiche */}
                    {snippets.map(({id, title, language, code, created_at}) => (
                        // La prop 'key' est obligatoire pour que React identifie chaque élément de manière unique
                        <div key={id}>
                            <h1>{title}</h1>
                            <LangueStyle langage={language} />
                            <div className="code-container bg-white">
                                <CodeSnippet code={code} language={language} />
                                <ClipBoard textToCopy={code} />
                            </div>
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