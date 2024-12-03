import styled from "styled-components";

interface BusinessChannelsPinProps {
  top: String;
  left: String;
}

export const BusinessChannelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 525px;
  ::selection {
    background-color: #ED74DA;
    color: white;
  }
`

export const BusinessChannelsTitle = styled.div`
  margin-top: 41px;
  font-size: 32px;
  font-weight: 500;
`

export const BusinessChannelsMap = styled.div`
  position: relative;
  width: 625px;
  height: 348px;
  margin-top: 56px;
  background: url("/image/Business/Channels/WorldMap.png");

`

export const BusinessChannelsPin = styled.img<BusinessChannelsPinProps>`
  position: absolute;
  top: ${(props) => props.top + 'px'};
  left: ${(props) => props.left + 'px'};
`