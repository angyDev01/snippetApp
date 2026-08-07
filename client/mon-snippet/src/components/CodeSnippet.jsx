import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../index.css';

// On passe le code et le langage en "props"
function CodeSnippet({ code, language }) {
  return (
    // Remplacement de "overflow-hidden" par "overflow-x-auto" et correction de "shadow-2xl"
    <div className="max-w-3xl my-4 rounded-lg overflow-x-auto shadow-2xl border border-gray-700 bg-[#1e1e1e]">
      {/* Le bloc de code avec le langage dynamique */}
      <SyntaxHighlighter 
        language={language ? language.toLowerCase() : 'javascript'} 
        style={vscDarkPlus}
        showLineNumbers={true}
        customStyle={{ 
          margin: 0, 
          padding: '12px', 
          background: 'transparent' // Évite les conflits de fond
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSnippet;