import axios from 'axios';
import React from 'react';
import { GetStaticPaths } from 'next';
import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import md5 from 'js-md5';

import Header from '../../components/Header';
import {
  Name,
  ContainerItem,
  Image,
  Description,
  DescriptionDiv,
  CarouselDiv,
} from '../../components/Characters/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { api } from '../../service/api';
import CarouselComponent from '../../components/CarouselComponent';
import CharacterComponents from '../../components/Characters';
import { useRouter } from 'next/dist/client/router';
interface CharacterInterface {
  character: {
    data: {
      results: [
        {
          id: number;
          name: string;
          description: string;
          thumbnail: {
            path: string;
            extension: string;
          };
        }
      ];
    };
  };
}
interface paramsProps {
  params: {
    id: string;
  };
}

interface CharactersInterface {
  data: {
    results: [
      {
        id: number;
      }
    ];
  };
}

interface ComicsProps {
  data: {
    results: [
      {
        id: number;
        name: string;
        description: string;
        thumbnail: {
          path: string;
          extension: string;
        };
      }
    ];
  };
  params: string;
}
export default function Character({ character }: CharacterInterface) {
  const router = useRouter();
  return (
    <CharacterComponents params={`${router.query.id}`} character={character} />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const hash = md5.create();
  const timestamp = '1';
  const private_key = process.env.PRIVATE_KEY;
  const public_key = process.env.PUBLIC_KEY;
  hash.update(timestamp + private_key + public_key);
  console.log(hash.hex());
  const response = await api.get<CharactersInterface>(
    `/characters?limit=28&ts=${timestamp}&apikey=${public_key}&hash=${hash.hex()}`
  );

  const paths = response.data.data.results.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: paramsProps) {
  const hash = md5.create();
  const timestamp = '1';
  const private_key = process.env.PRIVATE_KEY;
  const public_key = process.env.PUBLIC_KEY;
  hash.update(timestamp + private_key + public_key);
  console.log(hash.hex());
  const { data } = await api.get(
    `/characters/${
      params.id
    }?limit=28&ts=1&apikey=${public_key}&hash=${hash.hex()}`
  );

  const character = data;
  return {
    props: {
      character,
    },
  };
}
