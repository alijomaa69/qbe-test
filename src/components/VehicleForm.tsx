import { Grid, Box, Stack } from '@mui/material';
import { AppPaper } from './common/AppPaper';
import { AppToggle } from './common/AppToggle';
import { useState } from 'react';
import { Button } from './common/AppButton';
import { TextTitleTypography } from './common/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AppInput } from './common/AppInput';

export interface IVehicleFormProps {
  setNextStep?: () => void;
}

export interface VehicleSelectOption {
  value: string;
  label: string;
  title: string;
  helperText: string;
}

const options: Array<VehicleSelectOption> = [
  {
    value: 'registration',
    label: 'Registration number',
    title: "What's your vehicle registration number?",
    helperText: "Please enter the registration of the insured vehicle"
  },
  {
    value: 'postcode',
    label: 'Postcode',
    title: "What's your Postcode?",
    helperText: "Please enter the Postcode where your car is garaged"
  }
];

export const VehicleForm = ({setNextStep}: IVehicleFormProps) => {
  const [option, setOption] = useState<VehicleSelectOption>(options[0]);
  const [error, setError] = useState(false);

  // Validate for numbers only for demo purposes
  // Better validation would done using when useing a more complete form e.g react-hook-form with yup
  const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();

    isNaN(Number.parseInt(event.target.value)) ? setError(true) : setError(false)
  }

  return (
    <Grid container sx={{justifyContent: 'center', mt: 4}}>
      <Grid item >
        <AppPaper 
          sx={{minHeight: '500px', 
          minWidth: '380px', 
          maxWidth: '500px', 
          m: {xs: 2, sm: 4}}}
        >
            <Stack sx={{p: 4}} alignItems="center">
              <TextTitleTypography sx={{m: 1}}>One more thing</TextTitleTypography>
              <TextTitleTypography 
                sx={(theme) => ({fontWeight: theme.typography.fontWeightMedium,  m: 1})}>
                  What's your vehicle registration number or garage postcode?
              </TextTitleTypography>
              <AppToggle options={options} selectedOption={option} setOption={setOption}/>   
              <Box sx={{mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <TextTitleTypography>{option.title}</TextTitleTypography>
                <InfoOutlinedIcon sx={{color:'#000', pl: 1}}/>
              </Box>         
              <AppInput 
                error={error}
                label={option.label} 
                helperText={option.helperText}
                variant='filled'
                sx={{mt: 1}}
                onBlur={handleChange}
              />
              <Button sx={{mt: 4, width: '100px'}}>Continue</Button>
            </Stack>
        </AppPaper>
      </Grid>
    </Grid>
  );
}
