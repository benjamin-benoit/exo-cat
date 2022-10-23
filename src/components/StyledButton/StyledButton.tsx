import React from 'react';
import { CustomButton } from './layout';

interface Props {
  text: string;
  onClick: () => void;
}

const StyledButton = ({ text, onClick }: Props) => {
  return <CustomButton onClick={onClick}>{text}</CustomButton>;
};

export default StyledButton;
