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
    gap: 8%;

    @media only screen and (min-width: 1367px) {
      gap: 25%;
    }
  `,
  Text: styled.p`
    max-width: 800px;
    text-indent: 150px;
    color: #F2F2F2;

    text-align: justify;
    font-family: var(--font-poppins);
    font-size: 20px;
    font-style: normal;
    font-weight: 275;
    line-height: 30px;
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
    text-align: justify;
  `,
  Image: styled.div`
    background: #D9D9D9;
    width: 445px;
    height: 606px;
    margin: 24px 0;
  `,
  TeamContainer: styled.div`
    display: flex;
    gap: 48px;

    @media only screen and (min-width: 1367px) {
      gap: 149px;
      margin-right: 157px;
    }
  `,
  TeamContent: styled.div<any>`
    display: flex;
    flex-direction: ${({ position }) => position };
  `,
  TeamInfo: styled.div`
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