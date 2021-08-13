import React, { useState } from 'react';
import axios from 'axios';
import md5 from 'js-md5';
import Header from '../../components/Header';
import { Grid } from '@material-ui/core';
import { GetStaticProps, GetStaticPaths } from 'next';
import CardCharacter from '../../components/CardCharacter';
import { api } from '../../service/api';
import { useRouter } from 'next/dist/client/router';
interface paramsProps {
  params: {
    id: string;
  };
}
interface CharactersInterface {
  characters: {
    data: {
      results: [
        {
          id: number;
          name: string;
          title: string;
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
  const router = useRouter();
  const { data } = characters;

  return (
    <>
      <Header />

      <div className="main">
        <Grid container direction="row" spacing={2}>
          {data.results.map((item) => (
            <Grid key={item.id} item xs={12} lg={3} sm={6}>
              <CardCharacter
                name={router.query.id == 'characters' ? item.name : item.title}
                params={`${router.query.id}`}
                id={item.id}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'comics',
        },
      },

      {
        params: {
          id: 'characters',
        },
      },
    ],
    fallback: false,
  };
};
export const getStaticProps = async ({ params }: paramsProps) => {
  const hash = md5.create();
  const timestamp = '1';
  const private_key = process.env.PRIVATE_KEY;
  const public_key = process.env.PUBLIC_KEY;
  hash.update(timestamp + private_key + public_key);
  console.log(hash.hex());
  const { data } = await api.get<CharactersInterface>(
    `/${
      params.id
    }?limit=28&ts=${timestamp}&apikey=${public_key}&hash=${hash.hex()}`
  );
  const characters = data;

  return {
    props: {
      characters,
    },
  };
};
