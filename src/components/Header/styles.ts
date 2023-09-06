import styled from '@emotion/styled'

export default {
  HeaderContainer: styled.div`
    width: 100%;
    margin: 0 56px;
    flex-shrink: 0;
    background: #0c0c0c;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 131px;
    }
  `,
  HeaderNavbar: styled.div`
    display: flex;
    gap: 54px;
  `,
  Line: styled.div`
    color: #F2F2F2;
    font-family: var(--font-poppins);
    font-size: 14px;
    font-style: normal;
    font-weight: 275;
    line-height: normal;
    cursor: pointer;
  `,
}