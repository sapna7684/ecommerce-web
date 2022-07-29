import styled from 'styled-components'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { sliderItems } from './data';
import { useState } from 'react';

const Container = styled.div`
width:100%;
height:100vh;
position:relative;
overflow:hidden;
`
const Wrapper = styled.div`
display:flex;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw)
`
const Arrow = styled.div`
position:absolute;
top:0;
bottom:0;
height:45px;
width:45px;
margin:auto;
border-radius: 50%;
background-color:#fff;
opacity:0.5;
display:flex;
align-items:center;
justify-content:center;
left: ${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
cursor:pointer;
z-index:2;
`
const Slides = styled.div`
display:flex;
justify-content:flex-end;
background-repeat:no-repeat;
background-size:cover;
background-position:top;
height:100vh;
width:100%;
min-width:100%;
align-items:center;
`
const InfoContainer = styled.div`
width:50%;
text-align:center;
`
const Title = styled.h2`
font-size: 72px;
    line-height: 56px;
    margin: 28px 0 23px;
`
const Desc = styled.p`
font-size: 18px;
margin: 0 0 44px;
color: #010101;
`
const Button = styled.button`
font-size: 16px;
    line-height: 1;
    display: inline-block;
    padding: 19px 50px 21px;
    text-transform: uppercase;
    color: #010101;
    border: 1px solid #333;
`
export const BannerSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 );
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick('left')}>
            <ArrowBackIosNewIcon/>
        </Arrow>
        <Wrapper  slideIndex={slideIndex}>
            {sliderItems.map((sliderItem) => (
                <Slides key={sliderItem.id} style={{backgroundImage:`url(${sliderItem.img})`}}>
                    <InfoContainer>
                        <Title>{sliderItem.title}</Title>
                        <Desc>{sliderItem.desc}</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slides>
            ))}
        
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick('right')}>
            <ArrowForwardIosIcon/>
        </Arrow>
        </Container>
  )
}
