import { Carousel } from "@mantine/carousel";
import fit from "../assets/fit.jpg";
import underTheWeather from "../assets/underTheWeather.jpg";
import woman from "../assets/woman.jpg";
import study from "../assets/study.jpg";
import { Container, Title, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) =>({

image:{
   height : 320,
   

}

}))

export function About() {
  const {classes} = useStyles()
  return (
   
    <Container>
      <Title fw="500">About Us</Title>
      <Carousel withIndicators
    height={320}
    slideSize="33.333333%"
    slideGap="md"
    loop
    align="start"
    slidesToScroll={3}
  
    >
   
      <Carousel.Slide>
        <img className = {classes.image} src={fit} />
      </Carousel.Slide>
     
      <Carousel.Slide>
        <img className = {classes.image} src={woman} />
      </Carousel.Slide>
      <Carousel.Slide>
        <img className = {classes.image} src={underTheWeather} />
      </Carousel.Slide>
      <Carousel.Slide>
        <img className = {classes.image} src={study} />
      </Carousel.Slide>
      
    </Carousel></Container>
  );
}
