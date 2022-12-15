import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  textTransform: 'none',
  margin: theme.spacing(1),
  height: '40px',
  minWidth: '100px',
  borderRadius: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.06)',
  color: theme.palette.primary.main,
}));