import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import mattersService from '../../api/mattersApi';
import { default as dayjs } from 'dayjs';
import Header from '../../components/Header';
import * as S from './layout';
import StyledButton from '../../components/StyledButton';
import { useQuery } from '@tanstack/react-query';
import Modal from '../../components/Modal/Modal';

const CatInformation = () => {
  const navigate = useNavigate();

  const { cat } = useLocation().state;

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { data, isLoading } = useQuery(['getAdoptionAppointment'], async () => {
    return await mattersService.getAdoptionAppointment(Number(cat.id));
  });

  return isLoading ? null : (
    <>
      <Header />
      <S.Container>
        <StyledButton text={'Retour'} onClick={() => navigate(-1)} />
        <S.MainContent>
          <S.CatInfos>
            <S.CatImage src={cat.picturePath} alt={cat.name} />
            <S.CatDescr>
              <table></table>
              Name: {cat?.name}
              <br />
              Birthdate: {cat?.birthdate}
              <br />
              Breed: {cat?.breed}
              <br />
              Location: {cat?.location}
              <br />
              Gender: {cat?.gender}
              <br />
            </S.CatDescr>
          </S.CatInfos>
          <StyledButton text={'Planifier un rendez-vous'} onClick={() => setIsOpen(true)} />
        </S.MainContent>
      </S.Container>
      <Modal isOpen={isOpen} toggle={toggle}>
        {`Thanks you ! \n Let's meet at "${cat?.location}" the ${dayjs(data?.appointment)
          .format('DD/MM/YYYY, h:mm A')
          .toString()} to finalize ${cat?.name}'s adoption.`}
      </Modal>
    </>
  );
};

export default CatInformation;
