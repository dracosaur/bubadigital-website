'use client'
import { Title } from '../Title/app'
import S from './styles'
import { steps } from '@/utils/steps.json'


export function ProjectSteps() {
  return (
    <S.Container>
      <S.Header>
        <Title title={'Processos'} />
      </S.Header>
      { steps?.map((data) => (
            <S.Content>
            <S.StepContainer>
                <S.Step>{data.name}</S.Step>
                <S.TextContent>
                {data.description}
                </S.TextContent>
            </S.StepContainer>
            <S.Text>{data.complementarText}</S.Text>
            </S.Content>
        ))
        }
    </S.Container>
  )
}
