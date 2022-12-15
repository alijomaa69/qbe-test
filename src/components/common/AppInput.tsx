import { styled } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';


export const AppInput = styled(TextField)<TextFieldProps>(({ theme }) =>({
    '& .MuiInput-root': {
      marginTop: theme.spacing(1.75),
      '& .MuiInput-input': {
        height: theme.spacing(2.25),
        fontSize: theme.spacing(1.75),
        paddingBottom: theme.spacing(0.25),
        paddingTop: theme.spacing(0),
      },
    },
  })
);
