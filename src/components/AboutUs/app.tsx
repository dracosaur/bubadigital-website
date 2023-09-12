'use client'
import { Title } from '../Title/app'
import S from './styles'

export function AboutUs() {
  return (
    <S.Container>
      <S.Header>
        <Title title={'Sobre nós'} />
        <S.Text>
          {'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet sed diam nonummy nibh euismod tincidunt ut laoreet..'}
        </S.Text>
      </S.Header>
      <S.Content>
        <S.TextContent>
          {'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet sed diam nonummy nibh euismod tincidunt ut laoreet..'}
        </S.TextContent>
        <S.Image></S.Image>
      </S.Content>
    </S.Container>
  )
}
