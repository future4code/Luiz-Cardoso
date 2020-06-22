import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Experiencias from './components/Experiencias/Experiencias';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fgru8-1.fna.fbcdn.net/v/t1.0-9/79007340_2664154193698178_8951875802476052480_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=GEYMymL5VfQAX-zc-nP&_nc_ht=scontent.fgru8-1.fna&oh=fd7450501ae3938259bd63c1e4de42eb&oe=5F0CF140" 
          nome="Luiz Bombonatti" 
          descricao="Oi, sou o Bombonatti, mais conhecido como lubÊ, que é meu nome artistico que me colocaram nas batalhas de rap e assim ficou! Estou me aventurando nessa nova etapa, com muitos desafios, mas me mantendo firme. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
        imagem="https://i0.wp.com/www.construoseusite.com.br/wp-content/uploads/2014/12/verificar-email.jpg"
        topico="Email:"
        descricao="jaguncinhodabagunça@mundomarte.com"
        />

        <CardPequeno
        imagem="data:image/png;base64,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"
        topico="Endereço: "
        descricao="Rua jajajaheehe numero 12345"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <Experiencias
          texto="Já trabalhei com bastante coisa, como professor, entregador, corretor, vendedor, já trabalhei com a produção de empresas, mas sinto que estou gostando do mercado de DEV!"
        />
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
