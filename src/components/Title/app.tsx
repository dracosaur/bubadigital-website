'use client'
import S from './styles'

export function Title({ title }: any) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Line />
    </S.Container>
  )
}
