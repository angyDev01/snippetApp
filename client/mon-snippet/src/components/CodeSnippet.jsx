import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../index.css';

// On passe le code et le langage en "props"
function CodeSnippet({ code, language }) {
  return (
    <div className="max-w-3xl my-4 rounded-lg overflow-hidden shadow-2x1 border">
      {/* Le bloc de code avec le langage dynamique */}
      <SyntaxHighlighter 
        language={language.toLowerCase()} 
        style={vscDarkPlus}
        showLineNumbers={true}
        customStyle={{ margin: 0 , padding: 10}} // Nettoie les marges par défaut
      >
        {code}
        
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSnippet;