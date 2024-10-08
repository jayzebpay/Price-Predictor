// emotionStyles.ts
import styled from "@emotion/styled";
import typography from "../styles/typography"

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  width: 100%;
  height: 100%;
  background: var(--Zeb_Solid-BG_Blue, #222245);
  box-shadow: 0px 7px 7px -2px rgba(97, 79, 79, 0.14);
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: 568px) {
    flex-direction: row;
  }
`;

export const Graph = styled.div`
  display: flex;
  flex-direction: column;
  width: 47.5rem;
height: 39.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--blue-02-dark-blue, #181837);

  @media (min-width: 568px) {
    width: 70%;
  }
`;

export const PredictionCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  height: 100%;
  gap: 0.2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--Zeb_Solid-BG_Blue, #222245);
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #C0C0EE));
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Lato;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.025rem;
  margin-bottom: 0.55rem;
`;

export const Heading = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`;

export const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 2rem;
`;

export const Component15 = styled.div`
  display: flex;
  
  width: 45.5rem;
height: 15.75rem;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(Zeb_Transparent/4));
  
  padding: 1rem;
  margin-top: 1.25rem;
`;

export const Rightsidecards = styled.div`
  display: flex;
width: 19.5rem;
height: 39.75rem;
flex-direction: column;
align-items: flex-start;
gap: 1rem;


  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const Breakdown = styled.div`
  display: flex;
padding: 1rem;
flex-direction: column;
gap: 0.40rem;
justify-content: space-between;
align-items: flex-start;
flex: 1 0 0;
align-self: stretch;
  border-radius: 0.5rem;
  background: var(--blue-02-dark-blue, #181837);
`;

export const CurrentValue = styled.div`
  display: flex;
padding: 1rem;
flex-direction: column;
align-items: flex-start;
gap: 1.25rem;
align-self: stretch;
  border-radius: 0.5rem;
background: var(--Zeb_Gradient-Dark_Blue, linear-gradient(254deg, #4A62CA -43.42%, #1B264B 148.58%));
`;

export const Roww = styled.div`
  display: flex;
  // align-items: center;
  gap: 1rem;
`;

export const Coll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Headercontent = styled.div`
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #C0C0EE));
font-feature-settings: 'liga' off, 'clig' off;
/* b4/14_regular */
font-family: Lato;
font-size: 0.875rem;
font-style: normal;
margin-right: 0.55rem;
font-weight: 400;
line-height: 1.5rem; /* 171.429% */
letter-spacing: 0.025rem;
`;

export const Headercontent1 = styled.div`
  display: flex;
padding: 0rem 0.25rem;
justify-content: center;
align-items: center;
gap: 0.125rem;
border-radius: 0.25rem;
border: 1px solid var(--Shimmer-Zeb_Solid-Success, #1ECAA2);
background: var(--Shimmer-Zeb_Transparent-Green, rgba(30, 202, 162, 0.20));
`;

export const Frame461 = styled.div`
  display: flex;
  width: 100%;
  height: 2.8rem;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;
  color: var(--Shimmer-Zeb_Solid-White, #FFF);
font-feature-settings: 'liga' off, 'clig' off;
/* b3/16_semibold */
font-family: Lato;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 1.75rem; /* 175% */
letter-spacing: 0.025rem;
`;

export const Component15a = styled.div`
  display: flex;
height: 18.875rem;
flex-direction: column;
align-items: center;
align-self: stretch;
border-radius: 0.5rem;
border: 1px solid var(--Shimmer-Zeb_BG-Light_Blue, rgba(192, 192, 238, 0.20));
background: var(--Shimmer-Zeb_Solid-Dark_Blue, #181837);
`;

export const Front = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
`;

export const Component15b = styled.div`
display: flex;
padding: 0.75rem;
flex-direction: column;
align-items: flex-start;
margin-top: 0.75rem;
gap: 0.625rem;
align-self: stretch;
  border-radius: 0.5rem;
border: 0.5px solid var(--yellow-01-primary, #F9C35C);
backdrop-filter: blur(0px);
`;
export const labelStyle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 28px;
  letter-spacing: 0.4px;
  color: #FFFFFF;
`;

export const Cryptoselect = styled.div`
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #C0C0EE));
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Lato;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.025rem;
  margin-bottom: 0.55rem;
`;

export const placeholderStyle = styled.div`
  ::placeholder {
    font-size: 98px; /* Adjust the font size as needed */
  }
`;
export const Up = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--Shimmer-Zeb_Solid-White, #FFF);
font-feature-settings: 'liga' off, 'clig' off;
  }
`;
export const Down = styled.div`
  color: var(--Zeb_Solid-White, #FFF);
font-feature-settings: 'liga' off, 'clig' off;

/* c2/16 */
font-family: Lato;
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: 1.75rem; /* 175% */
letter-spacing: 0.05rem;
text-transform: uppercase;
padding: 0.65rem 0.95rem;
`;
export const History = styled.div`
  height: 2.25rem;
flex-shrink: 0;
align-self: stretch;
background: var(--Shimmer-Zeb_Solid-BG_Blue, #222245);
font-family: Lato;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: 1.125rem; /* 150% */
letter-spacing: 0.025rem;
color: var(--Shimmer-Zeb_Solid-White, #FFF);
display: flex;
justify-content: space-between;
align-items: center;
`;
export const Frame458 = styled.div`
display: flex;
flex-direction: column;

gap: 0.5rem;
`;
export const Wcontent = styled.div`
color: var(--Zeb_Solid-White, #FFF);
font-feature-settings: 'liga' off, 'clig' off;

/* b5/12_regular */
font-family: Lato;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: 1.125rem; /* 150% */
letter-spacing: 0.025rem;
`;
export const Rowww = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 0.5rem;
align-self: stretch;
color: var(--Zeb_Solid-Yellow, #F9C35C);
font-feature-settings: 'liga' off, 'clig' off;
`;
export const Divi = styled.div`
margin-top: 0.6rem;
font-family: Lato;
font-size: 1.02rem;
font-style: normal;
font-weight: 400;
line-height: 1.125rem; /* 150% */
letter-spacing: 0.025rem;
color: var(--Shimmer-Zeb_Solid-White, #FFF);
`;
export const Cols = styled.div`
padding: 0.9rem;


`;
export const Chart = styled.div`
width: 100%;
  height: 100%;


`;
export const CryptoOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: normal;
  margin: 0.4rem;
`;

export const CryptoIcon = styled.img`
  // margin-top: 0.6rem;
  width: 1.5rem;
  height: 1.5rem;
`;

export const CryptoText = styled.div`
  margin-left: 0.5rem;
  margin-top: 0.2rem;
  line-height: 1.2;
  font-size: 1rem; /* 16px to rem */
  align-items: center;
`;