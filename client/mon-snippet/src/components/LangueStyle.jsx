

// variable pour styler chaque tag selon la valeur qu'il contient

const COULEURS_LANGAGE = {
    python: { backgroundColor: "#7CCAD5", color: "#f0ffff" },
    css: { backgroundColor: "#E85C90", color: "#ffffff" },
    javascript: { backgroundColor: "#eab308", color: "#000000" }
};

// Hook appliquant cette logique
export default function LangueStyle({ langage }) {
    const cleLangage = langage.toLowerCase();
    const styleApplique = COULEURS_LANGAGE[cleLangage] || { backgroundColor: "#6b7280", color: "#ffffff" };

    const styleDeBase = {
        padding: "4px 12px",
        borderRadius: "100px",
        display: "block",
        ...styleApplique
    };

    return (
        <span style={styleDeBase} className="langage">
            {langage}
        </span>
    );
}
