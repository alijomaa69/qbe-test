import { styled } from '@mui/material/styles';
import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import { VehicleSelectOption } from '../VehicleForm';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '&.MuiToggleButtonGroup-root':{
    border: '1px solid',
  },
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    height: '25px',
    '&.MuiToggleButton-root': {
      textTransform: 'none',
      '&.Mui-selected': {
        color: '#FFF',
        backgroundColor: '#535d76'
      }
    }
}));

export interface ITypeToggleProps {
  options: Array<VehicleSelectOption>;
  selectedOption: VehicleSelectOption;
  setOption: (value: VehicleSelectOption) => void;
}

export const AppToggle = ({options, selectedOption, setOption}: ITypeToggleProps) => {
  const handleChange = (event: React.MouseEvent<HTMLElement>, value: VehicleSelectOption) => {
    event.preventDefault();
    setOption(value);
  }

  return (
    <StyledToggleButtonGroup 
      exclusive
      value={selectedOption}
      onChange={handleChange}
      aria-label="Registration or Postcode"
    >
      {options.map(opt => (
        <StyledToggleButton value={opt} aria-label={opt.label}>
        <Typography fontSize='12px' sx={{pl: 2, pr: 2}}>{opt.label}</Typography>
      </StyledToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
}
