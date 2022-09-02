import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const RegisterToggle = ({ value, handler, toggleValue }) => {
  return (
    <ToggleButtonGroup
      color="secondary"
      value={value}
      exclusive
      onChange={handler}
      aria-label="Platform"
    >
      <ToggleButton
        value={toggleValue}
        style={{
          minWidth: '121px',
          maxHeight: '30px',
        }}
      >
        설정함
      </ToggleButton>
      <ToggleButton
        value=""
        style={{
          minWidth: '121px',
          maxHeight: '30px',
        }}
      >
        설정안함
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default RegisterToggle;
