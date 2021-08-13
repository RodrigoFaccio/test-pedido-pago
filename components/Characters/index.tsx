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
} from './styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { api } from '../../service/api';
import CarouselComponent from '../../components/CarouselComponent';
import { useRouter } from 'next/dist/client/router';
import Footer from '../Footer';
interface CharacterInterface {
  character: {
    data: {
      results: [
        {
          id: number;
          title?: string;
          name?: string;
          description: string;
          thumbnail: {
            path: string;
            extension: string;
          };
        }
      ];
    };
  };
  params: string;
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
}
export default function Character({ character, params }: CharacterInterface) {
  const [comics, setComics] = useState<ComicsProps>();
  const router = useRouter();
  console.log(router.asPath);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function requestComics() {
      const { data } = await api.get(
        `/characters/${character.data.results[0].id}/comics?ts=1&apikey=52f13c30182a5e9b73545981288bc7de&hash=0a8d228d00b3f12b152e459c589dc9f7`
      );
      setComics(data);
      setLoading(false);
      console.log(data.data);
    }
    requestComics();
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log(character.data.results[0].title);
  const [dataCharacters, setDataCharacters] = useState(
    character.data.results[0]
  );
  return (
    <div>
      <Header />
      <ContainerItem>
        <Image
          src={`${dataCharacters.thumbnail.path}.${dataCharacters.thumbnail.extension}`}
        />

        <DescriptionDiv>
          <Name>
            {router.asPath == `/characters/${dataCharacters.id}`
              ? dataCharacters.name
              : dataCharacters.title}
          </Name>
          <Description>{dataCharacters.description}</Description>
        </DescriptionDiv>
      </ContainerItem>

      {router.asPath == `/characters/${router.query.id}` && comics ? (
        <CarouselDiv>
          <h2>Comics</h2>
          <Carousel responsive={responsive} swipeable={false} infinite={true}>
            {comics?.data.results.map((item) => (
              <CarouselComponent
                key={item.id}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              />
            ))}
          </Carousel>
        </CarouselDiv>
      ) : (
        <h1></h1>
      )}
      <Footer />
    </div>
  );
}
