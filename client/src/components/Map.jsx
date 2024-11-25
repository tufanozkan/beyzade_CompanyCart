import React from 'react';
import { Box } from '@mui/material';

const Map = () => {
  return (
    <Box sx={{ width: '100%', height: '288px' }}>
      <iframe
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d779.4986359427699!2d27.60051015737822!3d38.60299581316865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1732576682006!5m2!1str!2str"
        title="Beyzade Çiftliği"
        style={{ width: '100%', height: '100%', border: 0 }}
        allowFullScreen
      />
    </Box>
  );
};

export default Map;
