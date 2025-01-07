import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { SVGLogo, SVGLogoLight } from './Logo';
import { useTheme } from '@mui/material/styles';

export default function SitemarkIcon() {
  const theme = useTheme();
  const resolvedMode = theme.palette.mode;

  const icon = {
    light: <SvgIcon sx={{ height: 24, width: 200, ml: "-80px" }}><SVGLogo /></SvgIcon>,
    dark: <SvgIcon sx={{ height: 24, width: 200, ml: "-80px" }}><SVGLogoLight /></SvgIcon>,
  }[resolvedMode];

  return (
    <>
      {icon}
    </>
  );
}