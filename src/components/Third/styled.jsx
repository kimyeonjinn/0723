import styled from "styled-components";

export const StyledParagraph = styled.div`
  color: #ffffff;
  font-size: 30px;
  text-align: left;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid white;
  width: 1500px;
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
`;

export const NewsListItem = styled.li`
  margin-bottom: 20px;
  text-align: left;
  /* width: 80%; */
  width: 1500px;
`;

export const NewsLink = styled.a`
  display: flex;
  /* align-items: center; */
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
`;
