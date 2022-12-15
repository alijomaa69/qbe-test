import { Typography as MuiTypography, TypographyProps, styled  } from "@mui/material";

export const Typography = styled(MuiTypography)<
  TypographyProps<'p', { component?: 'span' | 'legend' | 'h1' | 'div' }>
>(({ theme }) => ({
  lineHeight: '17px',
  fontSize: theme.typography.fontSize,
}));

// Titles
export const MediumTitleTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: '16px',
  lineHeight: 1.5,
  color: theme.palette.primary.main,
}));


// Texts
export const TextLabelTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  whiteSpace: 'nowrap',
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightRegular,
}));

export const TextLabelSmallTypography = styled(TextLabelTypography)<TypographyProps>(() => ({
  fontSize: '12px',
  lineHeight: 1.5,
}));


export const TextTitleTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  whiteSpace: 'nowrap',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '16px',
  lineHeight: '19px',
}));

export const TextTitleSmallTypography = styled(TextTitleTypography)<TypographyProps>(() => ({
  fontSize: '12px',
  lineHeight: '14px',
}));
