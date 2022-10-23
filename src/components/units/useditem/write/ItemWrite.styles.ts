import styled from "@emotion/styled";
import { EnvironmentOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

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
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 40px;
  color: #464747;
`;

export const RowBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  padding-top: 30px;
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: 500;
  color: #464747;
`;

export const ProductInfo = styled(ReactQuill)`
  width: 100%;
  height: 300px;
  padding-left: 16px;
  padding: 14px;
  border-radius: 10px;
  resize: none;
  background-color: #f7f8f9;
  color: #464747;
  outline-color: #f39c1f;
  ::placeholder {
    color: #a5a5a5;
  }
  .ql-toolbar.ql-snow {
    border: none !important;
  }
  .ql-container.ql-snow {
    border: none !important;
    height: 220px;
  }
`;

export const TagBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ZipcodeBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Zipcode = styled.input`
  width: 100%;
  max-width: 77px;
  height: 50px;
  padding-left: 16px;
  border-radius: 10px;
  border: none;
  background-color: #f7f8f9;
  color: #464747;
  outline: none;
`;

export const ZipcodeButton = styled.button`
  width: 100%;
  max-width: 124px;
  height: 50px;
  margin-left: 16px;
  border: none;
  background-color: #f39c1f;
  border-radius: 10px;
  cursor: pointer;
  color: white;
`;

export const Address = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 16px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #f7f8f9;
  border: none;
  color: #464747;
  outline-color: #f39c1f;
  ::placeholder {
    color: #a5a5a5;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 16px;
  background-color: #ffdab9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8b4513;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  padding-bottom: 40px;
`;
