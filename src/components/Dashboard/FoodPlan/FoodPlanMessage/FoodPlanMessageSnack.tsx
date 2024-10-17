// == Import : npm
import React from "react";

const msg =
  "Si vous avez l'intention d'effectuer une séance d'entrainement ce jour, cochez \"je m'entraine\" et découvrez votre collation supplémentaire.";

// == Composant
export const FoodPlanMessageSnack: React.FC = () => (
  <div className="message snackmessage">{msg}</div>
);
