import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import SVGLogo from './Logo';
export default function SitemarkIcon() {
  return (
    <SvgIcon  sx={{ height: 24, width: 200, ml: "-80px" }}>
      <SVGLogo />
    </SvgIcon>
  );
}