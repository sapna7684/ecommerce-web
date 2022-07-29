import styled from "styled-components"

const Container = styled.div`
text-align:center;
padding:8px 0;
font-size:16px;
background:teal;
color:#fff;
`

export const Announcement = () => {

  return (
    <Container>Super Deal! Free shipping on order $50</Container>
  )
}
