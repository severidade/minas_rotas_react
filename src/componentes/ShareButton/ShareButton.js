import React, { useState } from 'react';

import styles from './ShareButton.module.css';

export default function ShareButton ({ shareOnWhatsApp,  link }) {
  const [clicked, setClicked] = useState(false);
  const WappMessage = "Eu achei essa rota incrível e queria compartilhar com você. *Vamos pedalar juntos?* Link da rota"

  function shareRoute() {
    if (shareOnWhatsApp) {
      // window.open(`whatsapp://send?text=${link}`, "_blank");
      window.open(`whatsapp://send?text=${WappMessage}%20%3A%20${link}`, "_blank");
    } else {
      window.open(link, "Share on Wikiloc", "height=600,width=600");
    }
  }

  return (
    <>
      <button 
        onClick={() => setClicked(true)}
        className={
          shareOnWhatsApp ? styles.whatsapp_button : styles.wikiloc_button
        }
      >
        {shareOnWhatsApp ? 'Compartilhe no WhatsApp' : 'Veja no Wikiloc'}
      </button>
      {clicked && shareRoute()}
    </>
  );
};