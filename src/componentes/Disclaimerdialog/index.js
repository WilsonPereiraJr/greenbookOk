import "./styles.css";
import React, { useState } from "react";
export default function Disclaimerdialog() {
  const [isClosed, setIsClosed] = useState(false);
  if (isClosed) return;
  return (
    <dialog open>
      <p>
        <span>Disclaimer</span> Esse sistema foi realizado com o intuito de
        estruturar o conhecimento aprendido durante o curso de Pós Graduação em
        Fitoterapia do Dr. Filipe Lopes, constituindo-se em uma ferramenta de
        busca. Não é um projeto completo e as informações contidas não
        constituem indicação de uso. O uso irracional de agentes fitoterápicos
        sem a devida precaução ou conhecimento técnico podem provocar sequelas
        graves e morte. Como autor, não me responsabilizo pelo uso indevido do
        conteúdo.
      </p>
      <div>
        <button onClick={() => setIsClosed(true)}>ciente</button>
      </div>
    </dialog>
  );
}
