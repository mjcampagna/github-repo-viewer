import { styled } from 'design-system'

export const Button = styled('button', {
  backgroundColor: '$grey600',
  border: '2px solid $grey600',
  borderRadius: '$s',
  color: '$white',
  cursor: 'pointer',
  fontSize: '$body1',
  fontWeight: '$bold',
  lineHeight: '$body1',
  padding: '0 $s',

  '&:disabled': {
    backgroundColor: '$grey500',
    borderColor: '$grey500',
    color: '$grey100',
  },
})
