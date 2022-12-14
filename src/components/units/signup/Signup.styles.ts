import styled from "@emotion/styled";
import { breakPoints } from "../../commons/breakPoints/breakPoints";

export const Main = styled.form`
  width: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 60px;
  margin-top: 50px;

  @media ${breakPoints.mobile} {
    width: 380px;
    padding: 30px 45px;
    margin-top: 20px;
  }
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 900;
  font-family: "live";
  font-style: normal;
  color: #f39c1f;
  padding-bottom: 30px;

  @media ${breakPoints.mobile} {
    font-size: 24px;
    font-weight: 900;
    padding-bottom: 20px;
  }
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  @media ${breakPoints.mobile} {
    padding-bottom: 10px;
  }
`;

export const Info = styled.div`
  width: 100%;
  padding-bottom: 10px;
`;

export const Label = styled.label`
  align-self: flex-start;
  padding-bottom: 4px;
  padding-left: 6px;
  color: #464747;
  font-weight: bold;
  font-size: 14px;
`;

export const Error = styled.div`
  color: #ff0033;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  padding-left: 6px;
  padding-bottom: 10px;

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Question = styled.label`
  color: #464747;
  padding: 0px 5px;
  font-size: 14px;

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const Login = styled.div`
  font-weight: 700;
  color: #f39c1f;
  cursor: pointer;
  font-size: 14px;

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;
