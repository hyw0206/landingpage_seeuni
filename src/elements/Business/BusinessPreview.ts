import styled from "styled-components";

export const BusinessPreviewWrapper = styled.div`
	width: 100%;
	height: 368px;
	display: flex;
	justify-content: center;
	background: #FFE6F9;
`

export const BusinessPreviewItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 29px;
	border-right: 1px solid rgba(0, 0, 0, 0.5);
	&:first-child {
		padding-left: 0;
	}
	&:last-child {
		padding-right: 0;
		border: none;
	}
`

export const BusinessPreviewItemImage = styled.img`
	width: 103px;
	height: 103px;
	margin-top: 51px;
`
export const BusinessPreviewItemTitle = styled.div`
	margin-top: 25px;
	font-size: 30px;
	font-family: "Roboto";
`
export const BusinessPreviewItemArticle = styled.div`
	margin-top: 12px;
	max-width: 258px;
	font-size: 16px;
	font-weight: 300;
	font-family: "Roboto";
	text-align: center;
	line-height: 120%;
`