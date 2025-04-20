# 🐾 Goyammy

<aside>
💡 **고양이 자유게시판 및 중고마켓**  
Goyammy는 고양이 용품을 찾고, 정보와 질문을 자유롭게 공유할 수 있는 게시판과 중고마켓을 제공합니다.  
집사들은 필요한 물품을 구매·판매하며, 커뮤니티를 통해 고양이와의 삶을 더욱 풍성하게 가꿀 수 있습니다.
</aside>

---

## 🔧 기술 스택

- **Frontend**  
  React · Next.js · TypeScript · JavaScript · Styled-Components · Emotion  
- **Data & API**  
  GraphQL (Apollo Client)  
- **Infra & Tools**  
  AWS · Git  

---

## 🚀 구현 기능

### 😻 랜덤 고양이 이미지 (홈)
- 고양이 사진 9장 랜덤 출력 (open API 활용)

---

### 🔛 로그인 / 로그아웃 / 회원가입
- **로그인** / **로그아웃** 기능  
- 미가입 시 → **회원가입 페이지**로 이동  
- **회원가입** 후 자동 로그인 페이지 이동

---

### 🙀 자유게시판 (Board)
- **게시글 작성 (BoardWrite)**
  - 작성자, 비밀번호, 제목, 내용, 주소, 유튜브, 이미지  
  - 내용: `react-quill` 에디터  
  - 주소 검색: `daum-postcode`
    
- **게시글 수정 / 삭제 / 상세 (BoardEdit, BoardDelete, BoardDetail)**
  - 수정 시 기존 내용 `defaultValue` 로 로드 & 비밀번호 확인  
  - 상세에 주소·유튜브는 툴팁 표시, 이미지 캐러셀, 좋아요·싫어요, 댓글(별점)
    
- **댓글 (BoardComment)**
  - 댓글 작성·수정·삭제
    
- **게시글 목록 (BoardList)**
  - 베스트 게시글 강조, 제목 검색, Pagination

---

### 🎁 중고마켓 (Item)
- **상품 글 작성 (ItemWrite)**
  - 상품명, 한줄요약, 설명, 가격, 태그, 이미지  
  - 설명: `react-quill`, 거래 위치: `daum-postcode` + `kakao-map`
     
- **수정 / 삭제 / 상세 (ItemEdit, ItemDelete, ItemDetail)**
  - 수정 시 기존 내용 로드 & 비밀번호 확인  
  - 상세: 작성자·날짜·이미지·가격·설명·태그·위치·찜 수, 댓글/대댓글
    
- **댓글 · 대댓글 (ItemQuestion, ItemAnswer)**
  - 작성·수정·삭제
    
- **상품 목록 (ItemList)**
  - 베스트 상품, 최근 본 3개 표시, 검색(날짜·이름), 필터(판매중/완료), 무한 스크롤

---

### 🏠 마이페이지 (MyPage)
- **포인트 충전 / 결제**  
- **찜한 상품 목록**  
- **구매 / 판매 내역 조회**

---

## 📂 디렉토리 구조 (예시)
```
├── pages
│   ├── _app.tsx
│   ├── boards
│   │   ├── [boardId]
│   │   │   ├── edit
│   │   │   └── index.tsx
│   │   ├── index.tsx
│   │   └── new
│   ├── index.tsx
│   ├── login
│   ├── markets
│   │   ├── [useditemId]
│   │   │   ├── edit
│   │   │   └── index.tsx
│   │   ├── index.tsx
│   │   └── new
│   ├── mypages
│   └── signup
├── public
│   ├── favicon.ico
│   ├── images
│   └── vercel.svg
├── src
│   ├── commons
│   │   ├── libraries
│   │   ├── store
│   │   ├── styles
│   │   └── types
│   └── components
│       ├── commons
│       │   ├── apollo
│       │   ├── breakPoints
│       │   ├── buttons
│       │   ├── hooks
│       │   ├── inputs
│       │   ├── kakao-map
│       │   ├── layout
│       │   ├── paginations
│       │   ├── payment
│       │   ├── searchbars
│       │   ├── tags
│       │   └── uploads
│       └── units
│           ├── board
│           ├── boardComment
│           ├── cats
│           ├── login
│           ├── mypage
│           ├── signup
│           ├── useditem
│           ├── useditem-answer
│           └── useditem-question
├── styles
```
