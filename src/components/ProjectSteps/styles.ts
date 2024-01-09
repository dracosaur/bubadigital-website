import styled from '@emotion/styled'

export default {
  Container: styled.div`
    width: 100%;
    margin: 0 56px;
    flex-shrink: 0;
    background: #0c0c0c;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 160px;
    gap: 88px;

  `,
  Header: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8%;

    @media only screen and (min-width: 1367px) {
      gap: 30%;
    }
  `,
  Text: styled.p`
    width: 431px;
    color: #F2F2F2;
    font-family: var(--font-poppins);
    font-size: 20px;
    font-style: normal;
    font-weight: 275;
    line-height: 30px;
  `,
  Content: styled.div`
    width: calc(100% - 147px);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10%;
  `,
  StepContainer: styled.div`
    width: 1033px;
    border-bottom: 1px solid #FFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 215px;
    padding-bottom: 84px;
  `,
  Step: styled.p`
    width: 90px;
    color: #F2F2F2;

    text-align: justify;
    font-family: var(--font-poppins);
    font-size: 20px;
    font-style: normal;
    font-weight: 275;
    line-height: 30px;
  `,
  TextContent: styled.p`
    width: 648px;
    color: #F2F2F2;

    text-align: justify;
    font-family: var(--font-poppins);
    font-size: 40px;
    font-style: normal;
    font-weight: 275;
    line-height: 58px;
  `,
}