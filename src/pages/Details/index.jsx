import { Container, Links, Content } from './styles';
 
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';


 export function Details() {
  
   return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe optio architecto consequuntur, consequatur, natus tenetur nobis amet qui officiis blanditiis esse voluptatum vero tempore eveniet. Odit perferendis distinctio ullam sequi.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>


          <Button title = "Voltar"/>
        </Content>
      </main>
    </Container>
   );
  }


            

