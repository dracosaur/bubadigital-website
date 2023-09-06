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
      position: absolute;
      right: 0;
      z-index: 0;
    }
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