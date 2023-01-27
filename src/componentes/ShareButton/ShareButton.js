import React, { useState } from 'react';

import styles from './ShareButton.module.css';

export default function ShareButton ({ shareType, link }) {
  const [clicked, setClicked] = useState(false);

  const msg = "Eu achei essa rota incrível e queria compartilhar com você. Vamos pedalar juntos? Link da rota";
  

  function shareRoute() {
    if (shareType === 'whatsapp') {
      window.open(`whatsapp://send?text=${msg}%20%3A%20${link}`, "_blank");
    } else if (shareType === "wikiloc") {
      window.open(link, "Share on Wikiloc", "height=600,width=600");
    } else if (shareType === 'email') {
      window.open(`mailto:?subject=Rota incrível&body=${msg}: ${link}`);
    }
  }

  return (
    <>
      <button 
        onClick={() => setClicked(true)}
        className={
          shareType === 'whatsapp' ? styles.whatsapp_button : 
          shareType === 'wikiloc' ? styles.wikiloc_button :
          shareType === 'email' ? styles.email_button : 
          null
        }
      >
        {
          shareType === 'whatsapp' ? 'Compartilhe no WhatsApp' : 
          shareType === 'wikiloc' ? 'Veja no Wikiloc' :
          shareType === 'email' ? 'Compartilhe por e-mail' :
          null
        }
      </button>
      {clicked && shareRoute()}
    </>
  );
};