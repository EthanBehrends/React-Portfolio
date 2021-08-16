import './App.css';
import { useEffect, useRef } from 'react';
import { Section, Block } from './Section';
import  Button from './Button';
import Name from './Name';
import { GetApp, Email, LinkedIn, GitHub } from '@material-ui/icons';
import SocialLinks from './SocialLinks';
import ScrollPrompt from './ScrollPrompt';
import ProjectCard from './ProjectCard'
import projects from './Projects/projects'

function fadeOut(image){
	var opacity = 2;
	var timer = setInterval(function(){
		if(opacity < 0){
			clearInterval(timer);
		}
		image.style.opacity = opacity;
		opacity -=  0.1;
	}, 50);
}

function App() {
  const emailSel = useRef("hire.ethanb@gmail.com");
  const popup = useRef(null);

  const copy = () => {
    emailSel.current.style.display = "block";
    emailSel.current.select();
    document.execCommand("copy");
    emailSel.current.style.display = "none";
    fadeOut(popup.current);
  }

  return (
    <div>
      <div id="watermark">Ethan Behrends</div>
      <Section background="#52CCBE">
        <Name name="Ethan Behrends" title="full-stack developer"/>
        <SocialLinks headerLinks color="#D8EBE8" width="400px">
          <LinkedIn  fontSize="inherit"/>
          <GitHub  fontSize="inherit"/>
          <Email  fontSize="inherit"/>
        </SocialLinks>
        <ScrollPrompt />
        <div className="bubbles">
          <div className="bubone"><div></div></div>
          <div className="bubtwo"><div></div></div>
          <div className="bubthree"><div></div></div>
          <div className="bubfour"><div></div></div>
          <div className="bubfive"><div></div></div>
        </div>
      </Section>
      <Section className="bigBubble" background="#D8EBE8">
        <Block>
          <h1>Hey, thanks for stopping by</h1>
          <p>I’m Ethan Behrends, a full-stack developer from Lawrence, Kansas.</p>
          <p>I bring to the table 5+ years of experience and a passion for creating things for the web. I enjoy working with React, but (am fluent with ___?  and love expanding my skill set? ) love learning new technologies as well.</p>
          <p>I am actively seeking a new role. Feel free to reach out - I would love to chat.</p>
        </Block>
        <Block flex>
          <Button>
            <GetApp fontSize="large" />
            <div>Download my resume</div>
          </Button>
          <div className="centerText">&</div>
          <div className="centerText">Check out my work below!</div>
        </Block>
      </Section>
      <Section className="bigBubble" background="#A3E8E0">
        <h1>Projects</h1>
        <div style={{flexBasis: "100%"}}></div>
        {[0,1,2].map(x => {
          return(<ProjectCard project={projects[x]} />)
        })}
        <div style={{flexBasis: "100%"}}></div>

      </Section>
      <Section className="bigBubble" background="#D8EBE8">
        <Block>
          <h1>Like what you see?</h1>
          <p>I am actively seeking a new role, and would love to work at your company.</p>
          <p>If you are interested in adding me to your team, please feel free to get in touch!</p>
          <SocialLinks color="#52CCBE">
            <a href="https://www.linkedin.com/in/ethan-behrends" target="_blank" rel="noopener"><LinkedIn  fontSize="inherit"/></a>
            <GitHub  fontSize="inherit"/>
            <Email  fontSize="inherit"/>
          </SocialLinks>
        </Block>
        <Block flex>
          <Button>
            <GetApp fontSize="large" />
            <div>Download my resume</div>
          </Button> 
          <div style={{flexBasis: "100%"}}></div>

          <Button onClick={copy}>
            <div ref={popup} className="popup" id="copiedText">Copied to clipboard!</div>
            <Email fontSize="large" />
            <input ref={emailSel} id="emailSelect" className="hiddenInput" type="text" value="hire.ethanb@gmail.com"></input>
            <div>hire.ethanb@gmail.com</div>
          </Button>        
        </Block>
      </Section>
    </div>
  );
}

export default App;
