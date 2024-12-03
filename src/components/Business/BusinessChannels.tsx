import * as Styled from "elements/Business/BusinessChannels"
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function BusinessChannels({language}: languageProps) {
  const titleData = {
    "English": {
      "BusinessChannelsTitle": "Distribution Channels"
    },
    "Korean": {
      "BusinessChannelsTitle": "유통 채널"
    }
  }

  const pinData = [
    {
      "fileName": "Pin_Canada.png",
      "top": "61",
      "left": "79"
    },
    {
      "fileName": "Pin_America.png",
      "top": "113",
      "left": "135"
    },
    {
      "fileName": "Pin_Mexico.png",
      "top": "146",
      "left": "98"
    },
    {
      "fileName": "Pin_Brazil.png",
      "top": "207",
      "left": "200"
    },
    {
      "fileName": "Pin_Turkey.png",
      "top": "140",
      "left": "265"
    },
    {
      "fileName": "Pin_Qatar.png",
      "top": "171",
      "left": "318"
    },
    {
      "fileName": "Pin_RepSouthAfrica.png",
      "top": "239",
      "left": "318"
    },
    {
      "fileName": "Pin_Germany.png",
      "top": "55",
      "left": "366"
    },
    {
      "fileName": "Pin_Vietnam.png",
      "top": "140",
      "left": "452"
    },
    {
      "fileName": "Pin_Indonesia.png",
      "top": "181",
      "left": "474"
    },
    {
      "fileName": "Pin_Russia.png",
      "top": "43",
      "left": "480"
    },
    {
      "fileName": "Pin_Japan.png",
      "top": "114",
      "left": "512"
    },
    {
      "fileName": "Pin_Australia.png",
      "top": "227",
      "left": "506"
    },
  ]
  return (
    <Styled.BusinessChannelsWrapper>
      <Styled.BusinessChannelsTitle>
      {parse(titleData[language].BusinessChannelsTitle)}
      </Styled.BusinessChannelsTitle>
      <Styled.BusinessChannelsMap>
        {
          pinData.map((item, _) => {
            return (
              <Styled.BusinessChannelsPin 
                src={"/image/Business/Channels/" + item.fileName}
                top={item.top}
                left={item.left}
                key={item.fileName + item.top}
                />
            )
          })
        }
      </Styled.BusinessChannelsMap>
      <Styled.BusinessChannelsLine />
    </Styled.BusinessChannelsWrapper>
  )
}