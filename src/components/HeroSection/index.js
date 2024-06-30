import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  MiddleText,
} from "./HeroStyle";
import HeroImg from "../../images/profile-pic4.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <MiddleText>"Fueled by Creativity, Driven by Results"</MiddleText>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            {/* <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton> */}
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
