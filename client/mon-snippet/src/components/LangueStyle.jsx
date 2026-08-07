

// variable pour styler chaque tag selon la valeur qu'il contient

const COULEURS_LANGAGE = {
    python: { backgroundColor: "#e4d617", color: "#f0ffff" },
    css: { backgroundColor: "#E85C90", color: "#ffffff" },
    javascript: { backgroundColor: "#f7a409", color: "#0e0d0d" },
    html: { backgroundColor: "#472aee", color: "#dfd7d7" }
};

// Hook appliquant cette logique
export default function LangueStyle({ langage }) {
    const cleLangage = langage.toLowerCase();
    const styleApplique = COULEURS_LANGAGE[cleLangage] || { backgroundColor: "#ec9614", color: "#ffffff" };

    const styleDeBase = {
        padding: "5px 5px",
        borderRadius: "100px",
        display: "flex",
        ...styleApplique
    };

    return (
        <span style={styleDeBase} className="langage">
            {langage}
        </span>
    );
}
