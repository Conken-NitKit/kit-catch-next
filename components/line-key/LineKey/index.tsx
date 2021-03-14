import { useState } from "react";
import styled from "styled-components";

const KeyContainer = styled.div`
  position: relative;
  left: 50%;
  width: 80vw;
  border-radius: 8px;
  padding: 24px 12px;
  margin: 72px 0;
  transform: translateX(-50%);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.35);
  border: solid 0.1px rgba(0, 0, 0, 0.15);
  color: #555;
  font-size: 14px;
  text-align: center;
  height: 200px;
  @media screen and (min-width: 768px) {
    left: 58%;
    font-size: 25px;
    margin-bottom: 30px;
  }
  p {
    margin: 12px 0;
    color: #555;
    font-size: 28px;
    font-weight: bolder;
    letter-spacing: 1.7px;
    span {
      padding: 0 2.4px;
    }
  }

  button {
    color: white;
    font-size: 11px;
    font-weight: bolder;
    letter-spacing: 1.7px;
    background-color: orange;
    border: none;
    outline: none;
    margin-top: 4px;
    padding: 12px 20px;
    border-radius: 24px;
    transition: all 0.1s;
    box-shadow: 1.2px 1.6px 3px rgba(0, 0, 0, 0.5);
    &:active {
      box-shadow: 0.4px 0.4px 3px rgba(0, 0, 0, 0.4);
      transform: translate(0.3px, 0.6px);
    }
  }
`;

export const LineKey = () => {
  const [effectiveDate, setEffectiveDate] = useState<number | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <>
      <KeyContainer>
        LINE連携用のワンタイムパスワード
        <br />(
        {effectiveDate &&
          (() => {
            const date = new Date(effectiveDate);
            return (
              " 有効期限 : " +
              date.getFullYear() +
              "/" +
              ("0" + (date.getMonth() + 1)).slice(-2) +
              "/" +
              ("0" + date.getDate()).slice(-2) +
              " " +
              ("0" + date.getHours()).slice(-2) +
              ":" +
              ("0" + date.getMinutes()).slice(-2) +
              " "
            );
          })()}
        )
        <p>
          <span>{password && password.slice(-6, -3)}</span>
          <span>{password && password.slice(-3)}</span>
        </p>
        <button
          onClick={() => {
            setEffectiveDate(() => {
              return new Date(new Date().getTime() + 10 * 60 * 1000).getTime();
            });
          }}
        >
          ワンタイムパスワードを再発行する
        </button>
      </KeyContainer>
    </>
  );
}
