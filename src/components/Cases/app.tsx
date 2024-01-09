'use client'
import { Title } from '../Title/app'
import S from './styles'
import { cases } from '@/utils/cases.json'

export function Cases() {
  return (
    <S.Container>
        <S.Header>
            <Title title={'Cases'} />
        </S.Header>
        <S.Content>
            <S.CaseContainer>
                { cases?.map((data, index) => (
                    <S.CaseContent key={index}>
                        <S.Image width={data.width} smallWidth={data.smallWidth}/>
                        <S.CaseInfo>
                            <S.NameContainer>
                                <S.Name>{data.projectName}</S.Name>
                            </S.NameContainer>
                        </S.CaseInfo>
                    </S.CaseContent>
                ))
                }
            </S.CaseContainer>
        </S.Content>
    </S.Container>
  )
}
