import { useQuery } from '@tanstack/react-query';
import React from 'react';
import mattersService from '../../api/mattersApi';
import Header from '../../components/Header';
import * as S from './layout';
import { useNavigate } from 'react-router-dom';

const CatsGallery = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(['getCats'], async () => {
    return await mattersService.getCats();
  });

  return isLoading ? null : (
    <>
      <Header />
      <S.Container>
        <S.Grid>
          {data &&
            data.map(cat => (
              <S.CatCard
                key={cat.id}
                onClick={() => navigate('/catInformation', { state: { cat: cat } })}>
                <S.CardOverlay>
                  <S.CardText>{`${cat.name}, ${cat.gender}`}</S.CardText>
                </S.CardOverlay>
                <S.CatImage src={cat.picturePath} alt={cat.name} />
              </S.CatCard>
            ))}
        </S.Grid>
      </S.Container>
    </>
  );
};

export default CatsGallery;
