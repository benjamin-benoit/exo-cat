import React, { ReactNode } from 'react';
import * as S from './layout';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const Modal = ({ children, isOpen, toggle }: Props) => {
  return (
    <>
      {isOpen && (
        <S.Container onClick={toggle}>
          <S.Box onClick={e => e.stopPropagation()}>{children}</S.Box>
        </S.Container>
      )}
    </>
  );
};

export default Modal;
