import React from 'react';
import { Box } from '@mui/material';

const Map = () => {
  return (
    <Box sx={{ width: '100%', height: '288px' }}>
      <iframe
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9322665804034!2d38.613364787318055!3d37.79162709973663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153358d0f281eed5%3A0x73e4518735dc4e26!2sGirne%2C%206018.%20Sk.%20No%3A23%2C%2002400%20K%C3%A2hta%2FAd%C4%B1yaman!5e0!3m2!1str!2str!4v1729091404616!5m2!1str!2str"
        title="Musto Originals"
        style={{ width: '100%', height: '100%', border: 0 }}
        allowFullScreen
      />
    </Box>
  );
};

export default Map;
