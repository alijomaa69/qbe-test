import {
  Box, 
  Divider, 
  DividerProps, 
  Stack, 
  Step, 
  StepConnector, 
  stepConnectorClasses, 
  StepIcon, 
  stepIconClasses, 
  StepLabel, 
  Stepper, 
  styled, 
  Typography} from '@mui/material';

export const StyledStepper = styled(Stepper)(({ theme }) => ({
  width: '100%'
}));

const ActiveStepColor = '#00c457';

const StyledConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 12,
    left: 'calc(-50% + 12px)',
    right: 'calc(50% + 12px)',
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderTopStyle: 'dashed',
    borderBottomStyle: 'none',
    borderColor: '#fff',
    borderTopWidth: 1,
  },
}));

const StyledStepIcon = styled(StepIcon) (({theme}) => ({
  [`&.${stepIconClasses.text}`]: {
    border: '1px solid',
    color: '#fff',
  }
}));

const StyledStep = styled(Step)(({ theme }) => ({
  '& .MuiStepIcon-root ': {
    color: '#fff',
    '&.Mui-active': {
      color: ActiveStepColor,
    },
    
  },
  '& .MuiStepLabel-label': {
    color: '#fff',
    '&.Mui-active': {
      color: ActiveStepColor,
    },
    '&.MuiStepLabel-alternativeLabel': {
      marginTop: 0
    }
  },
  '& .MuiStepIcon-text': {
    fill: '#000'
  }
}));

interface IAppStepperProps {
  activeStep: number | undefined;
  steps: Array<string>;
}

export const AppStepper = ({activeStep, steps}: IAppStepperProps) => {
  return (
    <Box sx={{flexGrow: 1, maxWidth: '300px'}}>
      <StyledStepper activeStep={activeStep} alternativeLabel connector={<StyledConnector/>}>
        {steps.map((label) => (
            <StyledStep key={label} sx={{color: ActiveStepColor}}>
              <StepLabel 
                StepIconComponent={StyledStepIcon}
              >
                {label}
              </StepLabel>
            </StyledStep>
          ))}
      </StyledStepper>
    </Box>
  )
}

const StyledDivider = styled(Divider, {
  shouldForwardProp: (prop) => prop !== 'active',
})<DividerProps & {active: boolean}>(({ theme, active }) => ({
  border: '2px solid',
  width: '100%',
  marginRight: '2px',
  flexShrink: 1,
  ...(active && {color: ActiveStepColor})
}));

export const MobileStepper = ({activeStep = 0, steps}: IAppStepperProps) => {

  return (
    <Box sx={{display: {xs: 'flex', sm: 'none'}, flexGrow: 1, width: '100%'}}>
      <Stack sx={{width: '100%', p: 2}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography>{steps[activeStep]}</Typography>
          <Typography>{`${activeStep + 1} of ${steps.length}`}</Typography>
        </Box>
        <Box sx={{display: 'flex', flexWrap: 'nowrap'}}>
          {steps.map((_, index) => <StyledDivider flexItem active={activeStep === index}/>)}
        </Box>
      </Stack>
    </Box>
  )
}