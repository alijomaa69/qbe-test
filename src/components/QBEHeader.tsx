import { AppBar, Divider, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {ReactComponent as Logo} from '../qbe-logo.svg';
import { AppStepper, MobileStepper } from './common/AppStepper';

export interface IHeaderProps {
  activeStep?: number;
  steps?: Array<string>;
}

export const QBEHeader = ({activeStep, steps}: IHeaderProps) => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position='static' sx={{backgroundColor: '#1d2848'}}>
        <Box sx={{
            display: {xs: 'none', sm: 'flex'}, 
            justifyContent: 'space-between',
            alignItems: 'center', 
            height: '85px', 
            pl: 4, 
            pr: 2}}>
          <Logo/>
          {steps && 
            <AppStepper 
              activeStep={activeStep} 
              steps={steps}
          />}
          <Box sx={{display: 'flex', justifySelf: 'flex-end'}}>
            <IconButton 
              sx={{color:'#FFFFFF', pr: 2}}>
                <NavigateBeforeIcon fontSize='large'/>
              </IconButton>
            <Divider 
              orientation='vertical' 
              variant='middle' 
              flexItem 
              color='#FFFFFF'
            />
            <IconButton sx={{color:'#FFFFFF', pl: 2}}>
              <CloseIcon fontSize='large'/>
            </IconButton>
          </Box>
        </Box>
        <Box sx={{
          display: {xs: 'flex', sm: 'none'}, 
          alignItems: 'center', 
          flexDirection: 'column',
          pl: 4, 
          pr: 2}}
        >
          <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}} >
            <Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'center'}}>
              <Logo/>
            </Box>
            <Box sx={{display: 'flex'}}>
              <IconButton sx={{color:'#FFFFFF', pl: 2}}>
                <CloseIcon fontSize='large'/>
              </IconButton>
            </Box>
          </Box>
          {steps && 
            <MobileStepper 
              activeStep={activeStep} 
              steps={steps}
            />
          }
        </Box>
      </AppBar>
    </Box>
  );
}
