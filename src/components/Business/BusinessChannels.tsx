import * as Styled from "elements/Business/BusinessChannels"


export default function BusinessChannels() {

  const pinData = [
    {
      "fileName": "Pin_America.png",
      "top": "141",
      "left": "168"
    },
    {
      "fileName": "Pin_Brazil.png",
      "top": "258",
      "left": "249"
    },
    {
      "fileName": "Pin_RepSouthAfrica.png",
      "top": "298",
      "left": "395"
    },
    {
      "fileName": "Pin_Vietnam.png",
      "top": "174",
      "left": "562"
    },
    {
      "fileName": "Pin_Indonesia.png",
      "top": "226",
      "left": "589"
    },
    {
      "fileName": "Pin_Russia.png",
      "top": "54",
      "left": "597"
    },
    {
      "fileName": "Pin_Japan.png",
      "top": "142",
      "left": "637"
    },
  ]
  return (
    <Styled.BusinessChannelsWrapper>
      <Styled.BusinessChannelsTitle>
        Distribution Channels
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
    </Styled.BusinessChannelsWrapper>
  )
}