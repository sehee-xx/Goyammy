import styled from "@emotion/styled";
import { breakPoints } from "../breakPoints/breakPoints";
import { Input, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const Tags = styled(Tag)`
  height: 50px;
  font-size: 14px;
  font-weight: 500;
  color: #464747;
  display: flex;
  outline: 0;
  border: 0;
  border-radius: 10px;
  background-color: #a5a5a5;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px;
  margin-bottom: 15px;

  @media ${breakPoints.mobile} {
    height: 40px;
    font-size: 14px;
  }
`;

export const TagInput = styled(Input)`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: #464747;
  background-color: #f7f8f9;
  padding-left: 16px;

  @media ${breakPoints.mobile} {
    height: 40px;
    padding-left: 12px;
    font-size: 14px;
    ::placeholder {
      font-size: 11px;
    }
  }
`;

export const TagBox = styled(Tag)`
  width: 100%;
  height: 50px;
  font-size: 14px;
  color: #a5a5a5;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  padding-right: 0px;
  margin-right: 0px;
  background-color: #f7f8f9;

  @media ${breakPoints.mobile} {
    height: 40px;
    font-size: 11px;
  }
`;

export const Plus = styled(PlusOutlined)`
  padding-left: 10px;
  padding-right: 5px;
  font-size: 10px;
  color: #a5a5a5;

  @media ${breakPoints.mobile} {
    padding-right: 4px;
  }
`;
