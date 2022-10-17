// 마켓 수정 페이지
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ItemWrite from "../../../../src/components/units/useditem/write/ItemWrite.container";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      seller {
        name
      }
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        lat
        lng
        address
        addressDetail
        zipcode
      }
      createdAt
    }
  }
`;

export default function EditPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  return loading ? <></> : <ItemWrite isEdit={true} itemData={data} />;
}
