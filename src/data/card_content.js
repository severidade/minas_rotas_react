import Foto_01 from '../img/01.png';
import Foto_02 from '../img/02.png';
import Foto_03 from '../img/03.png';


const CarouselItems = [
    {
      id: 1,
      title: "<a href='https://severidade.com.br/bhl/'>O que levar</a>", 
      picture: Foto_01,
      figure_caption: "Atletas",
      text: "Capacete, luvas, óculos, lanche básico, documentos, kit com ferramentas para pequenos reparos na bike, powerlink, câmera de ar, bomba, canivete pequeno, lanterna."
    },
    {
      id: 2,
      title: "O que levar", 
      picture: Foto_02,
      figure_caption: "<strong>01</strong> Atletas",
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
      title: "Amet consectetur", 
      picture: Foto_03,
      figure_caption: "<strong>Fauna</strong> Atletas",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veniam provident odit doloremque accusantium cupiditate quo maiores maxime modi unde. Commodi pariatur eius architecto nobis ducimus. Molestiae quisquam fugiat ea!"
    },
]

export default CarouselItems; 
