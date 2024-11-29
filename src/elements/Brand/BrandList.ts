import styled from "styled-components";

// Flex 컨테이너 스타일링
export const BrandListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // 여러 줄로 아이템 배치
  justify-content: center; // 아이템을 중앙 정렬
  gap: 25px; // 아이템 간 간격
  padding: 20px;
  width: 100%;
  max-width: 1000px; // 최대 폭 설정 (아이템 크기에 맞게 조정)
  margin: 0 auto; // 컨테이너를 화면 중앙에 정렬
  margin-top: 110px;
  background-color: #FFE6F9;
  margin-bottom: 110px;
`;

export const BrandListBox = styled.div`

`;

// 각 아이템 스타일링
export const BrandListItem = styled.div`
  display: flex;
  flex-direction: column; // 이미지와 텍스트 세로 정렬
  align-items: center; // 중앙 정렬
  justify-content: center; // 중앙 정렬
  width: 293px; // 고정된 아이템 크기
  height: 239px;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
`;

// 이미지 스타일링
export const BrandListImage = styled.img`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  object-fit: contain;
  margin-bottom: 8px;
`;

// 라벨 스타일링
export const BrandListLabel = styled.div`
  font-size: 14px;
  color: #333;
  white-space: pre-line;
`;