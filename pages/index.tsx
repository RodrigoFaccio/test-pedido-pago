import React from 'react';
import axios from 'axios';
import md5 from 'js-md5';
import Header from '../components/Header';
import { Grid } from '@material-ui/core';
import { GetStaticProps } from 'next';
import CardCharacter from '../components/CardCharacter';
import { api } from '../service/api';
import Footer from '../components/Footer';
interface CharactersInterface {
  characters: {
    data: {
      results: [
        {
          id: number;
          name: string;
          thumbnail: {
            path: string;
            extension: string;
          };
        }
      ];
    };
  };
}

export default function App({ characters }: CharactersInterface) {
  const { data } = characters;

  return (
    <>
      <Header />

      <div className="main">
        <Grid container direction="row" spacing={2}>
          {data.results.map((item) => (
            <Grid key={item.id} item xs={12} lg={3} sm={6}>
              <CardCharacter
                name={item.name}
                id={item.id}
                params="characters"
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const hash = md5.create();
  const timestamp = '1';
  const private_key = process.env.PRIVATE_KEY;
  const public_key = process.env.PUBLIC_KEY;
  //gerar a hash para consumo da API

  hash.update(timestamp + private_key + public_key);
  console.log(hash.hex());
  const { data } = await api.get<CharactersInterface>(
    `/characters?limit=28&ts=${timestamp}&apikey=${public_key}&hash=${hash.hex()}`
  );
  const characters = data;

  return {
    props: {
      characters,
    },
  };
};
