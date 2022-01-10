import styled, { css } from "styled-components";

const ButtonStyle = styled.button`
  ${(props) => {
    switch (props.variant) {
      case "aqua":
        return css`
          color: #9e9aa7;
          background-color: transparent;
          border: none;
          border-radius: 1rem;
          line-height: 2.75;
          padding: 0 2.5rem;
          font-weight: 700;
          cursor: pointer;
          transition: 0.35s ease-in-out;
          &:hover {
            color: #232127;
          }
        `;
      case "aquaForm":
        return css`
          width: 25%;
          background-color: #2acfcf;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          line-height: 2.5;
          font-weight: 700;
          cursor: pointer;
          transition: 0.35s ease-in-out;
          line-height: 2.75;
          padding: 0 2.5rem;
          &:hover {
            color: #aaf1f1;
          }

          @media (max-width: 1024px) {
            width: 50%;
          }
        `;

      case "short":
        return css`
          padding: 0 1rem;
          border-radius: 0.5rem;
          color: #fff;
          background-color: ${(props) => props.backColor};
          border: none;
          line-height: 2.75;
          font-weight: 700;
          cursor: pointer;
          transition: 0.35s ease-in-out;
          &:hover {
            color: #aaf1f1;
          }
          @media (max-width: 1024px) {
            width: 100%;
          }
        `;
      default:
        return css`
          background-color: #2acfcf;
          color: #fff;
          border: none;
          border-radius: 1rem;
          line-height: 2.5;
          font-weight: 700;
          cursor: pointer;
          transition: 0.35s ease-in-out;
          line-height: 2.75;
          padding: 0 2.5rem;
          &:hover {
            background-color: #aaf1f1;
          }
        `;
    }
  }}
`;

export const Button = ({
  children,
  variant,
  disabled = false,
  onClick = null,
  link = null,
  copied = null,
}) => {
  return (
    <ButtonStyle
      variant={variant}
      disabled={disabled}
      onClick={() => onClick(link)}
      backColor={copied === link ? "#3b3054" : "#2acfcf"}
    >
      {children}
    </ButtonStyle>
  );
};
