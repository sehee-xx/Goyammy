import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      name
      _id
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
      seller {
        name
        picture
      }
    }
  }
`;
