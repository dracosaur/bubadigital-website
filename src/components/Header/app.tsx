'use client'
import S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
        <img src='/buba logo-10.svg' />
        <S.HeaderNavbar>
            <S.Line>Home</S.Line>
            <S.Line>Sobre Nós</S.Line>
            <S.Line>Nosso Time</S.Line>
            <S.Line>Cases</S.Line>
            <S.Line>Processos</S.Line>
            <S.Line>Contato</S.Line>
        </S.HeaderNavbar>
    </S.HeaderContainer>
  )
}
