import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { breakPoints } from "../../../commons/breakPoints/breakPoints";

export const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.form`
  width: 100%;
  padding: 80px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  background-color: white;

  @media ${breakPoints.tablet} {
    padding: 40px 50px;
  }

  @media ${breakPoints.mobile} {
    padding: 20px 30px;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const RowBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  gap: 30px;

  @media ${breakPoints.tablet} {
    padding-top: 20px;
  }

  @media ${breakPoints.mobile} {
    padding-top: 10px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const Label = styled.div`
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: 500;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const Contents = styled(ReactQuill)`
  width: 100%;
  height: 300px;
  padding-left: 16px;
  padding: 14px;
  border-radius: 10px;
  resize: none;
  background-color: #f7f8f9;
  color: #464747;
  outline-color: #f39c1f;
  .ql-toolbar.ql-snow {
    border: none !important;
  }
  .ql-container.ql-snow {
    border: none !important;
    height: 220px;
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    height: 250px;
    padding: 0px;
    .ql-container.ql-snow {
      height: 200px;
    }
  }
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 50px;
  padding-left: 16px;
  border-radius: 10px;
  border: none;
  background-color: #f7f8f9;
  color: #464747;
  outline: none;

  @media ${breakPoints.mobile} {
    height: 40px;
    padding-left: 12px;
  }
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 50px;
  margin-left: 16px;
  border: none;
  background-color: #f39c1f;
  border-radius: 10px;
  cursor: pointer;
  color: white;

  @media ${breakPoints.mobile} {
    height: 40px;
    margin-left: 12px;
    font-size: 12px;
  }
`;

export const Address = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 16px;
  margin: 15px 0px;
  border-radius: 10px;
  background-color: #f7f8f9;
  border: none;
  color: #464747;
  outline-color: #f39c1f;
  ::placeholder {
    color: #a5a5a5;
  }

  @media ${breakPoints.mobile} {
    height: 40px;
    padding-left: 12px;
    margin: 10px 0px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
