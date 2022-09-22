// 마켓 등록 페이지
import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import ItemWrite from "../../../src/components/units/useditem/write/ItemWrite.container";

export default function WritePage() {
  useAuth();
  return <ItemWrite isEdit={false} />;
}
