import * as Styled from "elements/Business/BusinessChannels"


export default function BusinessChannels() {

  const pinData = [
    {
      "fileName": "Pin_America.png",
      "top": "141",
      "left": "168"
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