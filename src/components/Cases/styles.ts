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
    align-items: center;
    margin-top: 160px;
    gap: 74px;
  `,
  Header: styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;

    @media only screen and (min-width: 1367px) {
      gap: 30%;
    }
  `,
  Text: styled.p`
    text-indent: 150px;
    color: #F2F2F2;
    font-family: var(--font-poppins);
    font-size: 40px;
    font-style: normal;
    font-weight: 275;
    line-height: 58px;
  `,
  Content: styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  TextContent: styled.p`
    text-indent: 30px;
    max-width: 300px;
    color: #F2F2F2;
    font-family: var(--font-poppins);
    font-size: 20px;
    font-style: normal;
    font-weight: 275;
    line-height: 30px;
  `,
  Image: styled.div<any>`
    background: #D9D9D9;
    width: ${({smallWidth}) => smallWidth};
    height: 606px;
    margin: 24px 0;

    @media only screen and (min-width: 1441px) {
        gap: 74px;
        width: ${({width}) => width};
      }
  `,
  CaseContainer: styled.div`
    width: 100%;
    display: grid;
    gap: 48px;
    grid-template-columns: auto auto;
    justify-content: space-between;

    @media only screen and (min-width: 1367px) {
      gap: 74px;
      margin-right: 157px;
    }
  `,
  CaseContent: styled.div<any>`
    display: flex;
    flex-direction: column;
  `,
  CaseInfo: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  NameContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Name: styled.p`
    color: #F2F2F2;
    font-family: var(--font-poppins);
    font-size: 20px;
    font-style: normal;
    font-weight: 275;
    line-height: normal;
  `,
  Position: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      color: #F2F2F2;
      font-family: var(--font-poppins);
      font-size: 20px;
      font-style: normal;
      font-weight: 275;
      line-height: normal;
    }
  `,
}