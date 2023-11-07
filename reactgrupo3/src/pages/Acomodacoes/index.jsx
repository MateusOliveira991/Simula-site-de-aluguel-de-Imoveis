import React, { useState } from 'react'
import '../Acomodacoes/style.css'
import { Link } from 'react-router-dom'

export default function Acomodacoes({textoBtn}) {

  const [isCollapse, setIsCollapsed] = useState(false);

  const toggleColapse = () => {
    setIsCollapsed(!isCollapse);
  }

  return (
    <div className="Acontainer">
      <div className='Aheader'>
        <h2>Acomodações</h2>
      </div>
      <div className="Acards">
        <div className="Acard">
          <img src="src\assets\images\casa.jpg" alt="imagem de casa" width={200} />
          <h3>Curitiba, Paraná</h3>
          <p>Linda casa amarela em local tranquilo e na beira da rua</p>
          <div className="aluguel">
            <Link to={'/aluguel'}>
              <button className='Abtn'>{textoBtn}</button>
            </Link>
            <div className="precos">
              <span className='Apreco-old'>R$ 1.250,00</span>
              <span className='Apreco'>R$ 890,00</span>
            </div>
          </div>
        </div>
        <div className="Acard">
          <img src="src\assets\images\casa1.jpg" alt="imagem de casa" width={200} />
          <h3>Grupiara, Minas Gerais</h3>
          <p>Apartamento rústico a 1km do centro da cidade</p>
          <div className="aluguel">
            <Link to={'/aluguel'}>
              <button className='Abtn'>Alugar</button>
            </Link>
            <span className='Apreco'>R$ 1150,00</span>
          </div>
        </div>
        <div className="Acard">
          <img src="src\assets\images\casa2.jpg" alt="imagem de casa" width={200} />
          <h3>Miguel Leão, Piauí</h3>
          <p>Casa moderna recém construída, com design contemporâneo</p>
          <div className="aluguel">
            <Link to={'/aluguel'}>
              <button className='Abtn'>Alugar</button>
            </Link>
            <div className="precos">
              <span className='Apreco-old'>R$ 1.800,00</span>
              <span className='Apreco'>R$ 1.500,00</span>
            </div>
          </div>
        </div>
        <div className="Acard">
          <img src="src\assets\images\casa4.jpg" alt="imagem de casa" width={200} />
          <h3>Uru, São Paulo</h3>
          <p>Linda casa com piscina estilo xalé, espaço muito reservado</p>
          <div className="aluguel">
            <Link to={'/aluguel'}>
              <button className='Abtn'>Alugar</button>
            </Link>
            <span className='Apreco'>R$ 2.650,00</span>
          </div>
        </div>
        <div className="Acard">
          <img src="src\assets\images\casa5.jpg" alt="imagem de casa" width={200} />
          <h3>União da Serra, Rio Grande do Sul</h3>
          <p>Casa nas monstanhas, ideal para quem busca um local mais isolado</p>
          <div className="aluguel">
            <Link to={'/aluguel'}>
              <button className='Abtn'>Alugar</button>
            </Link>
            <div className="precos">
              <span className='Apreco-old'>R$ 1.400,00</span>
              <span className='Apreco'>R$ 1.150,00</span>
            </div>
          </div>
        </div>
        <div className="Acard">
          <img src="src\assets\images\casa6.jpg" alt="imagem de casa" width={200} />
          <h3>Moiporá, Goiás</h3>
          <p>Casa perto da praia com quintal espaçoso, ideal para famílias grandes</p>
          <div className="aluguel">
            <Link to={'/aluguel'}>
              <button className='Abtn'>Alugar</button>
            </Link>
            <span className='Apreco'>R$ 325,00</span>
          </div>
        </div>
      </div>
      <button onClick={toggleColapse} className='btn-more'>Saiba Mais</button>
      <div className="collapse">
        {isCollapse ? null : (
          <div className="texto">
            <p>A confiabilidade das casas disponíveis para aluguel é uma preocupação fundamental tanto para locatários quanto para proprietários. Ter um lar seguro e bem mantido é essencial para o bem-estar e a tranquilidade de todos os envolvidos. Existem várias razões pelas quais as casas disponíveis para aluguel geralmente podem ser consideradas confiáveis:

              Contratos legais: Os contratos de aluguel são documentos legais que estabelecem os direitos e responsabilidades tanto do locatário quanto do proprietário. Esses contratos fornecem uma base sólida para garantir que ambas as partes cumpram suas obrigações, o que aumenta a confiabilidade do processo de aluguel.

              Manutenção e inspeções regulares: Proprietários e administradores de propriedades geralmente realizam manutenção regular e inspeções para garantir que a casa esteja em boas condições. Isso inclui reparos, pintura, encanamento e manutenção do sistema elétrico, entre outros. Essas práticas contribuem para a confiabilidade da moradia.

              Leis e regulamentos: A maioria das regiões possui leis e regulamentos que regem a qualidade e segurança das propriedades de aluguel. Isso inclui requisitos de construção, códigos de habitação e regulamentos de segurança. Os proprietários devem cumprir essas regulamentações, o que aumenta a confiabilidade das casas disponíveis para aluguel.

              Serviço de reparos e manutenção: A disponibilidade de serviços de reparos e manutenção é crucial para a confiabilidade das casas de aluguel. Proprietários ou empresas de administração de propriedades frequentemente têm equipes prontas para lidar com emergências e reparos do dia a dia, garantindo que os problemas sejam resolvidos de forma eficaz e oportuna.

              Avaliações e comentários: Locatários anteriores costumam deixar avaliações e comentários sobre suas experiências de aluguel. Essas informações podem ajudar futuros inquilinos a avaliar a confiabilidade de uma propriedade e de seu proprietário ou administrador.

              Seguro de locatário: Muitos locatários optam por adquirir um seguro de locatário para proteger seus pertences pessoais em caso de danos ou perdas. Isso oferece uma camada adicional de segurança e confiabilidade para os inquilinos.

              Relações de locação a longo prazo: Proprietários que buscam relações de locação a longo prazo têm um incentivo significativo para manter suas propriedades em boas condições e garantir a satisfação dos inquilinos. Essas relações de confiança mútua promovem a confiabilidade no mercado de aluguel.

              É importante lembrar que a confiabilidade das casas disponíveis para aluguel pode variar dependendo do proprietário, da localização e do mercado imobiliário em questão. Portanto, é aconselhável fazer uma pesquisa detalhada, ler os contratos atentamente e fazer perguntas antes de assinar um contrato de aluguel para garantir que você esteja escolhendo a melhor opção para suas necessidades e expectativas.</p>
          </div>
        )}
      </div>
    </div>
  )
}
