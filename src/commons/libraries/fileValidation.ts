export const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다.");
    return false;
  }

  // 파일 크기가 5MB가 넘는 경우
  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다. (제한: 5MB)");
    return false;
  }

  // 파일 타입을 지정
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
};
