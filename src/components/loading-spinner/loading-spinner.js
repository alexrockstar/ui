/* @flow */
import React from 'react';
import styled, {keyframes} from 'react-emotion';

const SPINNER_DIMENSIONS = {
  small: 20,
  medium: 30,
  large: 50,
};

const SPINNER_KEYFRAMES = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`;

const StyledLoadingSpinner = styled.div`
  position: relative;
  transform-origin: 48% 50%;
  animation: ${SPINNER_KEYFRAMES} 1600ms linear infinite;
  width: ${props => SPINNER_DIMENSIONS[props.size]}px;
  height: ${props => SPINNER_DIMENSIONS[props.size]}px;

  svg {
    fill: ${props => props.theme.colors.navy400};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

type TProps = {
  size?: 'small' | 'medium' | 'large',
};

export default function LoadingSpinner(props: TProps) {
  const {size = 'medium'} = props;

  return (
    <StyledLoadingSpinner size={size}>
      <svg
        width={`${SPINNER_DIMENSIONS[size]}px`}
        height={`${SPINNER_DIMENSIONS[size]}px`}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.33335912,2.33334154 C7.33335912,3.62501275 8.37502945,4.66668308 9.66670066,4.66668308 C10.9583719,4.66668308 12.0000422,3.62501275 12.0000422,2.33334154 C12.0000422,1.04167033 10.9583719,0 9.66670066,0 C8.37502945,0 7.33335912,1.04167033 7.33335912,2.33334154 L7.33335912,2.33334154 Z M14.8542189,6.81252396 C16.1458901,6.81252396 17.1875604,5.77085363 17.1875604,4.47918242 C17.1875604,3.18751121 16.1458901,2.14584088 14.8542189,2.14584088 C13.5625477,2.14584088 12.5208774,3.18751121 12.5208774,4.47918242 C12.5208774,5.77085363 13.5625477,6.81252396 14.8542189,6.81252396 L14.8542189,6.81252396 Z M4.47918242,6.81252396 C5.77085363,6.81252396 6.81252396,5.77085363 6.81252396,4.47918242 C6.81252396,3.18751121 5.77085363,2.14584088 4.47918242,2.14584088 C3.18751121,2.14584088 2.14584088,3.18751121 2.14584088,4.47918242 C2.14584088,5.77085363 3.18751121,6.81252396 4.47918242,6.81252396 L4.47918242,6.81252396 Z M17.0000598,12.0000422 C18.291731,12.0000422 19.3334013,10.9583719 19.3334013,9.66670066 C19.3334013,8.37502945 18.291731,7.33335912 17.0000598,7.33335912 C15.7083886,7.33335912 14.6667182,8.37502945 14.6667182,9.66670066 C14.6667182,10.9583719 15.7083886,12.0000422 17.0000598,12.0000422 L17.0000598,12.0000422 Z M2.33334154,12.0000422 C3.62501275,12.0000422 4.66668308,10.9583719 4.66668308,9.66670066 C4.66668308,8.37502945 3.62501275,7.33335912 2.33334154,7.33335912 C1.04167033,7.33335912 0,8.37502945 0,9.66670066 C0,10.9583719 1.04167033,12.0000422 2.33334154,12.0000422 L2.33334154,12.0000422 Z M4.47918242,17.1875604 C5.77085363,17.1875604 6.81252396,16.1458901 6.81252396,14.8542189 C6.81252396,13.5625477 5.77085363,12.5208774 4.47918242,12.5208774 C3.18751121,12.5208774 2.14584088,13.5625477 2.14584088,14.8542189 C2.14584088,16.1458901 3.18751121,17.1875604 4.47918242,17.1875604 L4.47918242,17.1875604 Z M14.8542189,17.1875604 C16.1458901,17.1875604 17.1875604,16.1458901 17.1875604,14.8542189 C17.1875604,13.5625477 16.1458901,12.5208774 14.8542189,12.5208774 C13.5625477,12.5208774 12.5208774,13.5625477 12.5208774,14.8542189 C12.5208774,16.1458901 13.5625477,17.1875604 14.8542189,17.1875604 L14.8542189,17.1875604 Z M9.66670066,19.3334013 C10.9583719,19.3334013 12.0000422,18.291731 12.0000422,17.0000598 C12.0000422,15.7083886 10.9583719,14.6667182 9.66670066,14.6667182 C8.37502945,14.6667182 7.33335912,15.7083886 7.33335912,17.0000598 C7.33335912,18.291731 8.37502945,19.3334013 9.66670066,19.3334013 L9.66670066,19.3334013 Z"
          stroke="none"
        />
      </svg>
    </StyledLoadingSpinner>
  );
}
