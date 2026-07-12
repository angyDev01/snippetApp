import { useState } from 'react';
import api from '../api/axiosInstance'; // On importe notre configuration

function FormRegisterSnippet() {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState(''); // Pour stocker le langage du snippet (ex: 'javascript')
  const [message, setMessage] = useState('');   // NOUVEAU : Pour stocker le message de succès/erreur

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Appel de notre API (on lui envoie aussi le langage)
      const response = await api.post('/snippets', {
        title: title,
        code: code,
        language: language,
      });

      setMessage('Snippet enregistré avec succès ! 🎉'); // Modifié ici
      setTitle('');
      setCode('');
      setLanguage('');
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setMessage("Échec de l'enregistrement."); // Modifié ici
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Ajouter un Snippet</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Titre</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-100"
          required
        />
      </div>

      {/* Optionnel : Ajout du champ Langage pour utiliser l'état "language" */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Langage</label>
        <input 
          type="text" 
          placeholder="ex: JavaScript, Python..."
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-100"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Code</label>
        <textarea 
          value={code} 
          onChange={(e) => setCode(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-100"
          rows="4"
          required
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
        Sauvegarder
      </button>

      {/* Désormais, "message" existe bien et s'affichera sans erreur ! */}
      {message && <p className="text-sm text-center font-medium mt-2 text-red-600">{message}</p>}
    </form>
  );
}

export default FormRegisterSnippet;