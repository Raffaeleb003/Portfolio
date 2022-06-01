import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      During my career as a front end developer I have worked with a large amount of different technologies such as: 
      <br />
      HTML5, CSS3, Javascript, Material-UI, Ant Design, Bootstrap, API, Axios and many more.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' marginLeft='2px' />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            Working on many front end projects I have developed experience with React.js and its advanced state management library, Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
