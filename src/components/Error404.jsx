import React from 'react';
import { CustomAlert } from './CustomAlert';

export const Error404 = () => {
  return (
    <CustomAlert msg={'Error 404, content, not found'} variant={'danger'} />
  );
};
