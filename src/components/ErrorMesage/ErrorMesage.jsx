import React from 'react';

const ErrorMessage = ({ message = "Ой, щось пішло не так... Перезавантажте будь ласка сторінку!" }) => {
  return (
    <p>{message}</p>
  );
}

export default ErrorMessage;
