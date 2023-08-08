import React, { useState } from "react";
import './Collapse.scss'
import ArrowUpIcon from "../../assets/arrow-up.png";
import ArrowDownIcon from "../../assets/arrow-down.png";

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
            {/* Affichage de l'icône d'expansion ou de contraction en fonction de l'état */}
            {isOpenArray[index] ? (
              <img src={ArrowUpIcon} alt="ArrowUp" className="contCollapse-Icon"/>
            ) : (
              <img src={ArrowDownIcon} alt="ArrowDown" className="contCollapse-Icon"/>
            )}
          </h3>
          {/* Utilisation de l'état local pour afficher/masquer le paragraphe */}
          {isOpenArray[index] && <p className="contCollapse-Text">{item.text}</p>}
        </div>
      ))}
    </section>
  );
}

export default Collapse;
