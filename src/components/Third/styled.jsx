import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledParagraph = styled.div`
  color: #ffffff;
  font-size: 30px;
  text-align: left;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid white;
  width: 100%;
  display: flex;
  /* justify-content: space-around; */

  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const NewsListItem = styled.li`
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
`;

export const NewsLink = styled.a`
  display: flex;

  text-decoration: none;
  color: inherit;
  padding-bottom: 30px;
  padding-top: 30px;
  font-size: 20px;
`;

export const NewsImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  margin-right: 10px;
  flex-shrink: 0;
`;
