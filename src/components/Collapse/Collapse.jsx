import React, { useState } from "react";
import "./Collapse.scss";
import ArrowIcon from "../../assets/arrow-up.png"; // Importez une seule image d'une flèche (dans n'importe quelle direction)

function Collapse({ data }) {
  // Initialisation des états locaux pour contrôler l'état d'ouverture/fermeture de chaque élément
  const [isOpenArray, setIsOpenArray] = useState(data.map(() => false));

  // Fonction de gestion du clic pour basculer entre ouvert et fermé pour un élément donné
  const handleToggle = (index) => {
    setIsOpenArray((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <section className="contCollapse">
      {data.map((item, index) => (
        <div key={item.id}>
          <h3 className="contCollapse-Title" onClick={() => handleToggle(index)}>
            {item.title}
            {/* Ajoutez la classe "rotate" si l'élément est ouvert */}
            <img
              src={ArrowIcon}
              alt="Arrow"
              className={`contCollapse-Icon ${isOpenArray[index] ? "rotate" : ""}`}
            />
          </h3>
          {/* Utilisation de l'état local pour afficher/masquer le paragraphe */}
          {isOpenArray[index] && <p className="contCollapse-Text">{item.text}</p>}
        </div>
      ))}
    </section>
  );
}

export default Collapse;

