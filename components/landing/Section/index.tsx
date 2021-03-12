import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const ApproachSubTitle = styled.p`
  max-width: 380px;
  font-size: 1.1rem;
  margin: 0;
  color: #00b833;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 0 0 4px rgba(00, 184, 51, 0.4);
  text-align: center;
`;

const SectionTitle = styled.h1`
  width: 100%;
  font-size: 1.4rem;
  margin: 4px 0 16px;
  text-align: center;
`;

const ApproachDescription = styled.p`
  max-width: 600px;
  font-size: 1rem;
  padding: 0 28px;
  margin: 0;
  color: rgba(0, 0, 0, 0.65);
  text-shadow: 0 0 0.6px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
`;

interface Props {
  title: string;
  subTitle: string;
  description: string;
}

export default function Section({ title, subTitle, description }: Props) {
  return (
    <SectionContainer>
      <ApproachSubTitle> {subTitle} </ApproachSubTitle>
      <SectionTitle> {title} </SectionTitle>
      <ApproachDescription>
        {description}
      </ApproachDescription>
    </SectionContainer>
  )
}

