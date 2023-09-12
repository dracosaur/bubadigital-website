'use client'
import { Title } from '../Title/app'
import S from './styles'
import { team } from '@/utils/team.json'

export function Team() {
  return (
    <S.Container>
        <S.Header>
            <Title title={'Nosso Time'} />
            <S.Text>
            {'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet sed diam nonummy nibh euismod tincidunt ut laoreet..'}
            </S.Text>
        </S.Header>
        <S.Content>
            <S.TextContent>
            {'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet sed diam nonummy nibh euismod tincidunt ut laoreet..'}
            </S.TextContent>
            <S.TeamContainer>
                { team?.map((data, index) => (
                    <S.TeamContent key={index} position={index % 2 === 0 ? 'column' : 'column-reverse'}>
                        <S.Image />
                        <S.TeamInfo>
                            <S.NameContainer>
                                <S.Name>{data.firstName}</S.Name>
                                <S.Name>{data.lastName}</S.Name>
                            </S.NameContainer>
                            <S.Position>
                                <p>{data.office}</p>
                            </S.Position>
                        </S.TeamInfo>
                    </S.TeamContent>
                ))
                }
            </S.TeamContainer>
        </S.Content>
    </S.Container>
  )
}
