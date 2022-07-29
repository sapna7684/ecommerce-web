import styled from "styled-components";
import { CategoryItem } from "./CategoryItem";
import { Categories } from "./data";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  margin: 30px 0;
  padding: 0 15px;
`;

export const Category = () => {
  return (
    <Container>
      {Categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};
