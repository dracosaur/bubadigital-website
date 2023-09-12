import styled from '@emotion/styled'

export default {
  Container: styled.div`
    width: 100%;
    margin: 0 56px;
    flex-shrink: 0;
    background: #0c0c0c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 160px;

    img {
      width: 1191.183px;
      right: 0;
      z-index: 0;
    }
  `,
  Blur: styled.div`
    position: absolute;
    right: 0;
    margin-right: 10%;
    width: 1029px;
    height: 772.028px;

    border-radius: 1029px;
    background: linear-gradient(180deg, rgba(82, 226, 226, 0.72) 0%, #ED1423 100%);
    filter: blur(100px);
  `,
  TextContent: styled.div`
    width: 591px;
    color: #F2F2F2;
    font-family: var(--font-poppins);
    font-size: 93px;
    font-style: normal;
    font-weight: 275;
    line-height: 100px;
    margin-left: 150px;
    z-index: 1;
  `,
}