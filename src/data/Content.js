import Foto_01 from '../img/01.png';
import Foto_02 from '../img/02.png';
import Foto_03 from '../img/03.png';

const Completo = {
  CarouselItems: [
    {
      id: 1,
      title: "O que levar", 
      picture: Foto_01,
      figure_caption: "<strong>Diversão</strong> garantida",
      text: "Capacete, luvas, óculos, lanche básico, documentos, kit com ferramentas para pequenos reparos na bike, powerlink, câmera de ar, bomba, canivete pequeno, lanterna."
    },
    {
      id: 2,
      title: "Observações", 
      picture: Foto_02,
      figure_caption: "Construções<strong> históricas</strong> ", 
      list: [
        {
          item: "Para não haver grandes aglomerações, limitamos à <strong>QUINZE</strong> o número ciclistas por passeio;"
        },
        {
          item: "Durante o passeio manteremos distanciamento de segurança;"
        },
        {
          item: "<strong>SERÁ OBRIGATÓRIO O USO DE MÁSCARA</strong> durante todo o percurso;"
        },
        {
          item: "Contamos com a compreensão de todos. Vamos respeitar a indicação da OMS e fazer as atividades de forma segura e confortável."
        }
      ]
    },
    {
      id: 3,
      title: "ipsum cons", 
      picture: Foto_03,
      figure_caption: "<strong>elit</strong> veniam",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veniam provident odit doloremque accusantium cupiditate quo maiores maxime modi unde. Commodi pariatur eius architecto nobis ducimus. Molestiae quisquam fugiat ea!"
    },
  ],
  
  route:{
    title: 'Conheça e baixe a rota', 
    map: '<iframe frameBorder="0" scrolling="no" src="https://pt.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=68903740&measures=off&title=off&near=off&images=off&maptype=H" width="100%" height="100%"></iframe><div style="color:#777;font-size:11px;line-height:16px;">Powered by <a style="color:#06d;font-size:11px;line-height:16px;" target="_blank" href="https://pt.wikiloc.com">Wikiloc</a></div>',
    text: 'Etiam ut lacus vel lectus imperdiet scelerisque vel ornare sem. In nec massa justo. Pellentesque id ligula non quam auctor pulvinar. Praesent eleifend sodales sollicitudin.',
    share: 'https://pt.wikiloc.com/trilhas-mountain-bike/serra-do-cachimbo-pelo-barreiro-68903740#',
    // share: [
    //   {
    //     whatsapp: '<a href="whatsapp://send?text=Confira essa rota. Ela é a nossa cara. Partiu pedal 🚲 !!! https://pt.wikiloc.com/trilhas-mountain-bike/serra-do-cachimbo-pelo-barreiro-68903740" class="botao-wpp" data-action="share/whatsapp/share">Compartilhe no whatsapp</a>'
    //   },
    //   {
    //     email: '<a href="mailto:?subject=Confira essa rota. Ela é a nossa cara. Partiu pedal 🚲 !!!&amp;body=Check out this site https://pt.wikiloc.com/trilhas-mountain-bike/serra-do-cachimbo-pelo-barreiro-68903740." title="Share by Email">Compartilhe no e-mail</a>'
    //   }
    // ]
  },

  headDescription: {
    title:"Cachoeira do santo antônio",
    description: "Embarque em uma jornada única pelas trilhas de Minas Gerais e descubra a beleza da Cachoeira de Santo Antonio, além de visitar lugares históricos e conhecer a rica cultura da região.",
    image: Foto_01,
  }
}

export default Completo; 
