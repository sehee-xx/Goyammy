import { PlusOutlined } from "@ant-design/icons";
import { Input, InputRef, Tag, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";

export default function MakeTag(props: any) {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag: any) => {
    const newTags = props.tags?.filter((tag: any) => tag !== removedTag);
    props.setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && props.tags?.indexOf(inputValue) === -1) {
      props.setTags([...props.tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  const handleEditInputChange = (event: any) => {
    setEditInputValue(event.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...props.tags];
    newTags[editInputIndex] = editInputValue;
    props.setTags(newTags);
    setEditInputIndex(-1);
    setInputValue("");
  };

  return (
    <>
      {props.tags?.map((tag: any, index: number) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={editInputRef}
              key={tag}
              size="large"
              className="tag-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }

        const isLongTag: boolean = tag.length > 20;
        const tagElem = (
          <Tag
            style={{
              height: 50,
              fontSize: "14px",
              fontWeight: 500,
              color: "#464747",
              display: "flex",
              outline: "none",
              border: 0,
              borderRadius: 10,
              backgroundColor: "#a5a5a5",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 15px",
              marginBottom: "15px",
            }}
            className="edit-tag"
            key={tag}
            closable={true}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                setEditInputIndex(index);
                setEditInputValue(tag);
                e.preventDefault();
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <Input
          style={{
            width: "100%",
            height: 50,
            border: 0,
            borderRadius: 10,
            outline: "#f39c1f solid 2px",
            color: "#464747",
            backgroundColor: "#f7f8f9",
            paddingLeft: "16px",
          }}
          ref={inputRef}
          type="text"
          size="large"
          className="tag-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          className="site-tag-plus"
          onClick={showInput}
          style={{
            width: "100%",
            height: 50,
            fontSize: 14,
            color: "#a5a5a5",
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            border: 0,
            paddingRight: 0,
            marginRight: 0,
            backgroundColor: "#f7f8f9",
          }}
        >
          <PlusOutlined
            style={{
              paddingLeft: "10px",
              paddingRight: "5px",
              fontSize: "10px",
              color: "#a5a5a5",
            }}
          />{" "}
          태그 입력
        </Tag>
      )}
    </>
  );
}
