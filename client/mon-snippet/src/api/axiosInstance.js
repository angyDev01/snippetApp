import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
// On crée une instance personnalisée d'Axios
const api = axios.create({
  // URL de base de votre API (ex: votre backend Python/Node)
  baseURL: apiUrl, 
  timeout: 5000, // Temps max d'attente d'une réponse (5 secondes)
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Optionnel : Vous pourrez ajouter ici des intercepteurs plus tard 
// (par exemple pour attacher automatiquement un token de connexion)

export default api;