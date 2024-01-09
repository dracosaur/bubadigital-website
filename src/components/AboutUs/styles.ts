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
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8%;

    @media only screen and (min-width: 1367px) {
      margin-right: 157px;
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
    text-align: justify;
  `,
  Content: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10%;
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
    width: 1035px;
    height: 549px;

    @media only screen and (min-width: 1367px) {
      margin-right: 157px;
    }
  `,
}