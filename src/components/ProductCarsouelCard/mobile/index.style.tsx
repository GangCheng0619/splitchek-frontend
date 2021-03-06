import styled from "styled-components";
export const CardWrapper = styled.div`
  padding: 22px 20px;
  widtth: 100%;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 33px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding: 25px 50px;
  }
  @media screen and (max-width: 460px) {
    padding: 25px 18px 24px 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarsouelContainer = styled.div`
  margin-bottom: 20px;

  & .imgArea {
    display: block !important;
    margin: 0 auto;
    max-width: 305px;
    height: 169px;
    & img {
      max-width: 305px;
      height: 169px;
      width: 100%;
    }
  }
`;

export const TitleContainer = styled.div`
  & h5 {
    margin-bottom: 20px;
    color: #140a01;
    font-weight: bold;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 11px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  & .price {
    margin-bottom: 14px;
    & p {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 0px;
    }
  }
  & p {
    margin-bottom: 0px;
    font-size: 12px;
  }
`;
export const ReactionArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const CommentNumberImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  text-align: right;

  & img {
    width: 50px;
    height: 22px;
  }
  & p {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #36558f;
    margin-left: 6px;
  }
`;
export const CommentText = styled.div`
  justify-content: flex-end;
  display: flex;
  color: #7a8698;
`;

export const ShipsFromText = styled.div`
  margin-bottom: 20px;
  & p {
    font-size: 12px;
    margin-bottom: 0px;
  }
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 17px;
  & p {
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 0px;
  }
`;

export const TagGroupContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  & Button {
    height: 26px;
    padding: 9px;
    font-size: 11px;
    margin-right: 2px;
    margin-top: 2px;
    border-radius: 8px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
