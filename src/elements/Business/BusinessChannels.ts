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
  height: 677px;
`

export const BusinessChannelsTitle = styled.div`
  margin-top: 48px;
  font-size: 32px;
  font-weight: 500;
`

export const BusinessChannelsMap = styled.div`
  position: relative;
  width: 777px;
  height: 433px;
  margin-top: 60px;
  background: url("/image/Business/Channels/WorldMap.png");

`

export const BusinessChannelsPin = styled.img<BusinessChannelsPinProps>`
  position: absolute;
  top: ${(props) => props.top + 'px'};
  left: ${(props) => props.left + 'px'};
`