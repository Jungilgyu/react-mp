import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 8px 16px;
	font-size: 16px;
	border-width: 1px;
	border-radius: 8px; 
	cursor: pointer;
	`;
// styled-components 를 사용하여 스타일링 할 경우 템플릿 리터럴 문법 사용 

function Button(props) {
	const { title, onClick } = props;


	return <StyledButton onClick={onClick}>{title || 'button'}</StyledButton>
																						// || 이게 title이 없는 경우에 기본으로 'button'나태내게 함 
}

export default Button;