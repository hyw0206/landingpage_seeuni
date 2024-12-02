import * as Styled from "elements/Info/InfoAbout"
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";


export default function InfoAbout({ language }: languageProps) {
  const titleData = {
    "English": {
      "InfoAboutTitle": "About us."
    },
    "Korean": {
      "InfoAboutTitle": "회사 개요."
    },
  }
  const miniTitleData1 = {
    "English": {
      "InfoAboutTitle": "Company Name"
    },
    "Korean": {
      "InfoAboutTitle": `<span style="font-weight: 400; font-family: Roboto;" >회사명</span>`
    }
  }
  const miniTitleData2 = {
    "English": {
      "InfoAboutTitle": "Established"
    },
    "Korean": {
      "InfoAboutTitle": `<span style="font-weight: 400; font-family: Roboto;" >설립일</span>`
    }
  }
  const miniTitleData3 = {
    "English": {
      "InfoAboutTitle": "CEO"
    },
    "Korean": {
      "InfoAboutTitle": `<span style="font-weight: 400; font-family: Roboto;" >대표</span>`
    }
  }
  const miniTitleDetail1 = {
    "English": {
      "InfoAboutTitle": "May 2023"
    },
    "Korean": {
      "InfoAboutTitle": "2023년 5월"
    }
  }
  const miniTitleDetail2 = {
    "English": {
      "InfoAboutTitle": `Jae-Young Park,<br />
      South Korea`
    },
    "Korean": {
      "InfoAboutTitle": `박재영<br />
      (대한민국)`
    }
  }
  const textData1 = {
    "English": {
      "InfoAboutText": `The name
        <span style="font-weight: 500; color: #ED74DA";> "Seeuni"</span> is inspired by
        <span style="font-weight: 500; color: #ED74DA";> "See You and I,"</span> symbolizing the company's commitment to sharing the unique value of Korean beauty with consumers worldwide.<br /> Seeuni's mission is to bring Korean beauty to the global stage and invite customers to experience the essence and
        <span style="font-weight: 500; color: #ED74DA";> authenticity of K-beauty.</span>`
    },
    "Korean": {
      "InfoAboutText": `Seeuni는 <span style="font-weight: 500; color: #ED74DA";>"See You and I"</span>에서 영감을 받아 탄생한 이름입니다. 이는 한국의 아름다움을 전 세계 소비자와 함께 경험하고자 하는 브랜드의 의지를 담고 있습니다. Seeuni는 한국 화장품의 고유한 가치를 세상에 선보이며, 고객과 함께 한국의 뷰티를 발견하고 경험하는 여정을 시작합니다.`
    }
  }

  return (
    <Styled.InfoAboutWrapper id="About-us">
      <Styled.InfoAboutTitle>{parse(titleData[language].InfoAboutTitle)}</Styled.InfoAboutTitle>
      <Styled.InfoAboutSummaryWrapper>
        <Styled.InfoAboutSummaryItem>
          <Styled.InfoAboutSummaryItemTitle>{parse(miniTitleData1[language].InfoAboutTitle)}</Styled.InfoAboutSummaryItemTitle>
          <Styled.InfoAboutSummaryItemLine />
          <Styled.InfoAboutSummaryItemArticle>SEEUNI</Styled.InfoAboutSummaryItemArticle>
        </Styled.InfoAboutSummaryItem>
        <Styled.InfoAboutSummaryItem>
          <Styled.InfoAboutSummaryItemTitle>{parse(miniTitleData2[language].InfoAboutTitle)}</Styled.InfoAboutSummaryItemTitle>
          <Styled.InfoAboutSummaryItemLine />
          <Styled.InfoAboutSummaryItemArticle>{parse(miniTitleDetail1[language].InfoAboutTitle)}</Styled.InfoAboutSummaryItemArticle>
        </Styled.InfoAboutSummaryItem>
        <Styled.InfoAboutSummaryItem>
          <Styled.InfoAboutSummaryItemTitle>{parse(miniTitleData3[language].InfoAboutTitle)}</Styled.InfoAboutSummaryItemTitle>
          <Styled.InfoAboutSummaryItemLine />
          <Styled.InfoAboutSummaryItemArticle>{parse(miniTitleDetail2[language].InfoAboutTitle)}</Styled.InfoAboutSummaryItemArticle>
        </Styled.InfoAboutSummaryItem>
      </Styled.InfoAboutSummaryWrapper>
      <Styled.InfoAboutArticle>
      {parse(textData1[language].InfoAboutText)}

      </Styled.InfoAboutArticle>
    </Styled.InfoAboutWrapper>
  )
}