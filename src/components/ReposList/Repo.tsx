import { styled } from 'design-system'

import type { Data } from 'components/RequestForm'

type ArrayElement<ArrayType extends readonly unknown[]> = 
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never

type Props = {
  handleRepoOnClick: (owner: string, repo: string) => void
  repo: ArrayElement<Data>
}

const Item = styled('li', {
  alignItems: 'center',
  borderBottom: '1px solid $grey300',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '$body2',
  justifyContent: 'space-between',
  lineHeight: '$body2',
  padding: '$s',

  '&:hover': {
    backgroundColor: '$grey100',
  },
})

const RepoName = styled('span', {
  fontSize: '$body1',
  fontWeight: '$bold',
  lineHeight: '$body1',
})

const RepoDescription = styled('span', {
  fontSize: '$body3',
  lineHeight: '$body3',
})

const Repo = ({ handleRepoOnClick, repo }: Props) => {
  return (
    <Item onClick={() => handleRepoOnClick(repo.owner.login, repo.name)}>
      <div>
        <RepoName>{repo.name}</RepoName><br />
        <RepoDescription>{repo.description}</RepoDescription>
      </div>
      <div>&raquo;</div>
    </Item>
  )
}

export default Repo
