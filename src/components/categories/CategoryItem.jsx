import styled from "styled-components";

const Container = styled.div`
position:relative;
display:inline-block;
overflow:hidden;
&:hover img{
    transform: scale3d(1.1,1.1,1);
}
&:nth-child(2) {
    grid-column: 1;
    grid-row: 2 / 4;
    max-height:370px;
  }
 &:first-child {
    grid-column: 1;
    grid-row: 1 / 2;
    max-height:370px;
  }
 &:last-child {
    grid-column-end: span 2;
    grid-row-end: span 2;
    max-height:370px;
 }
 &:nth-child(3) {
     grid-column: 2;
     grid-row: 1/4;
     max-height:770px;
  }
 &:nth-child(4) {
    FONT-WEIGHT: 200;
    grid-column: 3;
    max-height:370px;
  }
 &:nth-child(5) {
    grid-column: 4;
    max-height:370px;
  }
`;
const Image = styled.img`
transition: transform .5s;
width:100%;
height:auto;
`;
const Button = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 6px;
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  padding: 13px 39px 11px;
  max-width: 409px;
  cursor:pointer;
  transition:all .2s ease;
  text-transform: uppercase;
  &:hover{
    background:teal;
    color:#fff;
  }
`;

const Wrapper = styled.div`
overflow:hidden;
`

export const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Wrapper>
            <Image src={item.img} />
        </Wrapper>
            <Button>{item.button}</Button>
    </Container>
  );
};
