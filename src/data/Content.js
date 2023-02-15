import Foto_01 from '../img/01.png';
import Foto_02 from '../img/02.png';
import Foto_03 from '../img/03.png';

import Avatar_01 from '../img/avatar_01.png';
import Avatar_02 from '../img/avatar_02.png';
import Avatar_03 from '../img/avatar_03.png';
import Avatar_04 from '../img/avatar_04.png';
import Avatar_05 from '../img/avatar_05.png';

import Hero_image from '../img/hero_image.png';
import Hero_icon from '../img/icon/mtb_icon.svg';

import car_icon from '../img/icon/carro_icon.svg';
import shirt_icon from '../img/icon/camisa_icon.svg';
import bike from '../img/icon/bicicleta_icon.svg';
import mask from '../img/icon/mascara_icon.svg';

import video from '../video/video.mp4';
import videoFrame from '../video/frame.jpg';

const Completo = {
  
  hero: {
    route_img:{
      img: Hero_image,
      alt: "Veículo abandonado em trilha é transformado em tela com um grafite. Obra retrata um peixe azul com listras brancas e uma auréola de anjo.",
    },
    route_title: "Cachoeira do Santo Antônio",
  
    heder_data_route:{
      typeof: "Ciclismo de estrada",
      type_of_route_icon: Hero_icon,
      level: "Nível iniciante"
    },
    route_data: [
      {
        tooltip: "Distância percorrida",
        data: "31,9 km",
      },
      {
        tooltip: "Desnível acumulado subida",
        data: "400 m",
      },
      {
        tooltip: "Desnível acumulado descida",
        data: "400 km",
      },
      {
        tooltip: "Dificuldade técnica",
        data: "Fácil",
      },
      {
        tooltip: "Rota Cicular",
        data: "sim",
      },
      {
        tooltip: "Desnível máximo",
        data: "829 m",
      },
      {
        tooltip: "Desnível mínimo",
        data: "684 m",
      },
    ],
    about:"Esta rota é uma opção perfeita para aqueles que procuram aventura e contato com a natureza. Percorrendo trilhas de terra e estradas rurais, os ciclistas podem desfrutar de paisagens incríveis e desafiantes.",
    participants: [
      {
        name: "João Silva",
        avatar: Avatar_01,
      },
      {
        name: "Maria Rodrigues",
        avatar: Avatar_02,
      },
      {
        name: "Pedro Santos",
        avatar: Avatar_03,
      },
      {
        name: "Ana Oliveira",
        avatar: Avatar_04,
      },
      {
        name: "Juliana Ferreira",
        avatar: Avatar_05,
      },
    ],
  },

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

  rate:{
    text:'Neste passeio vamos pedalar pelas trilhas de Sabará e nele esta incluso o BikerGuia com GPS e rádio, apoio mecânico e seguro para danos pessoais dos participantes. O local de partida será divulgado com antecedência e cada ciclista deverá chegar com o seu próprio carro.',
    value:"<em>50</em><span>00</span>", 
    options: [
      {
        option: "Trasporte até o local",
        icon: car_icon,
        value: "<em>50</em><span>00</span>",
      },
      {
        option: "Camisa personalizada",
        icon: shirt_icon,
        value: "<em>30</em><span>00</span>",
      },
      {
        option: "Aluguel de bicicleta",
        icon: bike,
        value: "<em>30</em><span>00</span>",
      },
      {
        option: "Máscara personalizada",
        icon: mask,
        value: "<em>15</em><span>00</span>",
      },
    ],
  },

  cta:{
    cta_phrase: "Pedalar é só o começo da história. Nada é comparável a satisfação de perceber que é possível “chegar lá” sem precisar de um carro.",
  },

  videoSection:{
    phrase:"Venha se divertir com a gente explorando as trilhas de minas",
    videoBg: video,
    videoFrame: videoFrame,
  }

}

export default Completo; 
