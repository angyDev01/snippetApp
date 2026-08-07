import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../index.css';

// On passe le code et le langage en "props"
function CodeSnippet({ code, language }) {
  return (
    // Remplacement de "overflow-hidden" par "overflow-x-auto" et correction de "shadow-2xl"
    <div className="code">
      {/* Le bloc de code avec le langage dynamique */}
      <SyntaxHighlighter 
        language={language ? language.toLowerCase() : 'javascript'} 
        style={vscDarkPlus}
        showLineNumbers={true}
        customStyle={{ 
          background: 'transparent' // Évite les conflits de fond
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSnippet;