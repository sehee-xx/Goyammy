import * as S from "./Tags.styles";
import { Input, InputRef, Tooltip } from "antd";
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
    } else if (typeof props.tags === "undefined" && inputValue) {
      props.setTags([inputValue]);
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
          <S.Tags
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
          </S.Tags>
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
        <S.TagInput
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
        <S.TagBox className="site-tag-plus" onClick={showInput}>
          <S.Plus /> 태그 입력
        </S.TagBox>
      )}
    </>
  );
}
