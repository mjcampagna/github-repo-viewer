import { styled } from 'design-system'

export const Form = styled('form', {
  margin: '$s auto',
})

export const Input = styled('input', {
  backgroundColor: '$white',
  border: '1px solid #454545',
  borderRadius: '$s',
  display: 'block',
  fontSize: '$body2',
  lineHeight: '2rem',
  margin: '$l 0',
  padding: '0 12px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
})

export const Select = styled('select', {
  backgroundColor: '$white',
  border: '1px solid #454545',
  borderRadius: '$s',
  display: 'block',
  fontSize: '$body2',
  lineHeight: '2rem',
  margin: '$l 0',
  padding: '0 12px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
})

export const Label = styled('label', {
  fontSize: '$body1',
  fontWeight: '$bold',
  lineHeight: '$body1',
  margin: '$l 0 $xs',

  [`& + ${Input}`]: {
    marginTop: '$xs',
  },

  [`& + ${Select}`]: {
    marginTop: '$xs',
  },
})

