import './App.css'
import { useTheme } from './Components/ThemeContext'
import TextTyping from './Components/TextTyping/TextTyping';




function App() {
  const {theme, toggleTheme} = useTheme()

  return (
    <>
    <div className={`app ${theme}`}> 
      <div className="cabeçalho" >
        <div className="container">
          
            <div>
              <h3>
                <a href="#Projects" >  Projetos</a>
              </h3>
            </div>
            <div>
            <h3>
                <a href="https://github.com/GisellySouza" target="-blank"> Tecnologias</a>
              </h3>
            </div>
            <div>
            <h3>
                <a href="#Sobre">Sobre mim</a>
            </h3>
            </div>
        </div>
        <div id="fig" className="contactIcons">
          
            <a href="https://github.com/GisellySouza" target="-blank">           
              <img src="git-hub.svg" className='fig'/>
            </a>
            <a href="https://www.linkedin.com/in/giselly-souza-dev/" target="-blank">
              <img src="linkedin.png" className='fig'/>
            </a>                
            <img src="theme2.png" onClick={toggleTheme} id="buttonTheme"/>
                    
        
        </div> 
       
        
      </div>
      <div>
        <h1><TextTyping Text={["Olá, ", "Eu sou Giselly Souza", "Desenvolvedora Full Stack"]}/>
        
        </h1>
        <div>
      
        <p className={`subtitulo ${theme}`}>
          Desenvolvedora Full Stack em formação pela escola DNC<br></br>
          JAVASCRIPT | HTML | CSS | REACT.
        </p>
        </div>
      </div>
        <a href="https://www.linkedin.com/in/giselly-souza-dev/" target="-blank">
          <button id='button1'>
            Saiba mais
          </button>
        </a>  

      <div>
        <section id='Projects'>
          <h1>Projetos</h1>
        <div className='projetos'>
            <div>
              <div className='template'>
                <img className="projects" src='siteDesigner.png'/>
                <h2 className='nameprojects'>Site Designer de Interiores</h2>
                <div>
                <p className='descriçãoProjetos'>
                Site de designer de inteiores utilizando React e VIte com configuração para 
                o React funcionar no Vite com HMR e algumas regras ESLint.

                </p>
                </div>
                <a href="https://designer-interiores.netlify.app/" target="-blank"> 
                  <button>Clique aqui</button>
                </a>
              </div>
              <div className='template'>
                <img className="projects" src='prevTempo.png'/>
                <h2 className='nameprojects'>Previsão do tempo</h2>
                  <div>
                  <p className='descriçãoProjetos'>
                    Site de previsão do tempo com consumo de API e tratamento de erro. 
                    Apartir da incersão da latitude, longitude e CEP fornece previsão do tempo.

                  </p>
                  </div>
                  <a href="https://previsa-de-clima-cep.netlify.app/" target="-blank"> 
                    <button>Clique aqui</button>
                  </a>
              </div>
            </div>
        
            <div>  
              <div className='template'>
              <img className="projects" src='LpDNC1.png'/>
              <h2 className='nameprojects'>Página DNC</h2>
                <div>
                <p className='descriçãoProjetos'>
                   Página de captura de leads para Escola DNC de tecnologia, possui vídeo de divulgação, 
                   depoimento dos alunos em carrosel e acesso à ementa do curso.
                </p>
                </div>
                <a href="https://projeto-1-dnc.netlify.app/" target="-blank"> 
                  <button>Clique aqui</button>
                </a>
              </div>
              <div className='template'>
              <img className="projects" src='LpArquitetura.png'/>
              <h2 className='nameprojects'>Landing Page Arquitetura</h2>
                <div>
                  <p className='descriçãoProjetos'>
                    Landing page para empresa de arquitetura com integração 
                    de formulário para contato de clientes via Sheet Monkey. </p>
                </div>
                <a href="https://keen-sawine-e371bd.netlify.app/" target="-blank"> 
                  <button>Clique aqui</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="Sobre">

          <div>
            <div>
              <h1>Sobre mim</h1>
            </div>
            
            <div className="about">
              <div className='lineabout'>
                <h2>2021</h2>
              </div>
              <div className='lineabout'>
                <h2>2022</h2>
              </div>
              <div className='lineabout'>
                <h2>2023</h2>
              </div>
              <div className='lineabout'>
                <h2>2024</h2>
              </div>
            </div>
            <div>
              <img id="timeline" src='timeline.svg'/>
            </div>
            <div className="about">
                <div className='lineabout'>
                    <p>Gerenciei os laboratórios de física de IFBA- Salvador, realizando a montagem, inspeção 
                      e manutenção de experimentos didáticos de física para turmas de ensino de nível técnico e superior. 
                      Nessa função desenvolvi manuais e normas de segurança laboratoriais e também participei da organização
                       de simpósios nacionais, feiras científicas e atividades educacionais.</p>
                </div>
                <div className='lineabout'>
                    <p>Realizei atividade de docência de física e tutoria de aprendizado, elaborando desde materiais 
                    didáticos e de apoio a ferramentas de aferição de aprendizagem continuada.
                    O desempenho da função tinha como necessidade básica a utilização de habilidades de comunicação oral 
                    e escrita, inteligência emocional e gestão de equipes e conflitos.</p>
                </div>
                <div className='lineabout'>
                    <p>Como aluna pesquisadora no Mestrado de Energia e Sustentabilidade da UNILA, 
                      atuei no desenvolvimento de pesquisas científicas laboratoriais realizando a síntese
                       de compostos de grafeno, utilizando métodos de esfoliação química, para produção de 
                       supercapacitores eletrolíticos.</p>
                </div>
                <div className='lineabout'>
                    <p>Estudando desenvolvimento de sistemas e aplicações web usando HTML. CSS e Javascript.
                    Aplicação de metodologias como Express.JS e React.JS: 
                    Modelagem de banco de dados, criação de visualizações em MySQL e MongoDB,
                     criação de APIs, aplicação de metodologia ágeis durante os processos, deploy utilizando Nginx, 
                     aplicações em CRUD utilizando JavaScript, criação de wireframes de baixa e alta fidelidade.</p>
                </div>
              </div>
          </div>
          </section>


        <div className="rodapé" >
        <div className="container">
          
            <div>
            <h3> Meu contato:</h3>
            <h3>(45) 99157-7128</h3>
            </div>
            <div>
            <h3>E-mail:</h3>
            <h3>gisellydesouza@hotmail.com</h3>
            </div>
        </div>
        <div className="contactIcons">
          <a href="https://github.com/GisellySouza" target="-blank">           
            <img src="git-hub.svg" className='fig2'/>
          </a>
          <a href="https://www.linkedin.com/in/giselly-souza-dev/" target="-blank">
            <img src="linkedin.png" className='fig2'/>
          </a>  
          <a href='https://www.figma.com/design/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-Desenvolva-um-portf%C3%B3lio-com-React-hooks?node-id=0-1&node-type=canvas&t=akEotF0ezkQoF2cx-0' target='-blank'>
            <img src="figma.svg" className='fig2'/>  
          </a>
                    
        </div>
        
      </div>

        
      </div>
    </div>
   
    
    </>
  )
}

export default App

