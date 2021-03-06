import React from "react";
import styled, { keyframes } from "styled-components";
import { brightGray, darkOrange } from "../utils/themeColors";

const spinnerRotation = keyframes`
    0% { $1 }

    25% { $1 }

    50% { $1 }

    75% { $1 }

    100% { $1 }
`;

const SpinnerWrapper = styled.div`
    font-weight: 900;
    color: ${brightGray};
    font-size: 3rem;
    font-family: "Arial Black", sans-serif;

    animation: ${spinnerRotation} 4s linear infinite;
    transform-origin: 50% 50%;
`;

export default () => (
    <SpinnerWrapper>
        <svg style={{ width: "5vw" }} viewBox="0 0 355 159" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Square" transform="translate(-669.000000, -1706.000000)" fill="#DADFEA">
                    <path d="M772.397716,1706.78973 C789.485801,1706.78973 803.165665,1712.16568 813.437716,1722.91773 C823.709767,1733.66979 828.845716,1748.16564 828.845716,1766.40573 L828.845716,1864.61373 L777.869716,1864.61373 L777.869716,1781.09373 C777.869716,1772.26169 775.46974,1765.30176 770.669716,1760.21373 C765.869692,1755.12571 759.437756,1752.58173 751.373716,1752.58173 C742.925674,1752.77373 735.965743,1755.55771 730.493716,1760.93373 C725.021689,1766.30976 721.805721,1773.41369 720.845716,1782.24573 L720.845716,1864.61373 L669.581716,1864.61373 L669.581716,1708.80573 L720.845716,1708.80573 L720.845716,1734.14973 C726.413744,1725.12569 733.565672,1718.30976 742.301716,1713.70173 C751.03776,1709.09371 761.069659,1706.78973 772.397716,1706.78973 Z M853.504,1708.80573 L912.256,1708.80573 L937.312,1752.58173 L964.384,1708.80573 L1020.544,1708.80573 L971.296,1784.83773 L1024,1864.61373 L964.96,1864.61373 L937.312,1817.09373 L906.496,1864.61373 L850.048,1864.61373 L903.04,1784.83773 L853.504,1708.80573 Z" id="nx"></path>
                </g>
            </g>
        </svg>
    </SpinnerWrapper>
);