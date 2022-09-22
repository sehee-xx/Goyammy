import styled from "@emotion/styled";
import { EnvironmentOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

export const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  border: 3px solid #cd863f;
  background-color: white;
`;
export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 40px;
  color: #8b4513;
`;
export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
  color: #8b4513;
  align-self: flex-start;
`;
export const ProductInfo = styled(ReactQuill)`
  width: 100%;
  /* height: 400px; */
  background-color: #faf0e6;
  color: #8b4513;
  font-size: 20px;
  border-radius: 25px;
  .ql-toolbar.ql-snow {
    border: none !important;
  }
  .ql-container.ql-snow {
    border: none !important;
  }
  margin-bottom: 40px;
  padding-bottom: 30px;
`;
export const LocationInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const MapBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GPSBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LATLNG = styled.input`
  width: 220px;
  background-color: #8b4513;
  font-size: 16px;
  color: gold;
  border: 1px solid #8b4513;
  border-radius: 30px;
  padding: 10px 0px;
  text-align: center;
  outline-color: #8b4513;
`;
export const LocationIcon = styled(EnvironmentOutlined)`
  padding-top: 4px;
  font-size: 30px;
  color: gold;
`;
export const LocationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 10px;
`;
export const AddressInput = styled.input`
  margin-bottom: 16px;
  width: 500px;
  height: 52px;
  padding-left: 30px;
  border: none;
  border-radius: 30px;
  background-color: #faf0e6;
  color: #8b4513;
  outline-color: #cd863f;
  ::placeholder {
    color: #8b4513;
  }
  margin-bottom: 40px;
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
export const OptionWrapper = styled.div`
  align-self: flex-start;
  color: #8b4513;
`;
export const RadioButton = styled.input`
  cursor: pointer;
  color: #8b4513;
  outline-color: #cd863f;
  align-self: flex-start;
  :checked {
    accent-color: orange;
  }
`;
export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;
