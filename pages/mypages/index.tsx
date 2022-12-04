// 마이페이지
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import ItemMyPage from "../../src/components/units/mypage/ItemMypage.container";

export default function MyPage() {
  useAuth();
  return <ItemMyPage />;
}
