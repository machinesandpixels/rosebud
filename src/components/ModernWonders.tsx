import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  useAppDispatch,
} from '../store/hooks';
import {
  getPhotos,
} from '../slices/photoSlice';
import wonders from '../../styles/ModernWonders.module.css';

const ModernWonders = () => {
  const dispatch = useAppDispatch();

  const sevenWonders = [
    {
      name: 'Chichén Itzá',
      location: 'Mexico',
      flag: '🇲🇽',
    },
    {
      name: 'Christ the Redeemer',
      location: 'Brazil',
      flag: '🇧🇷',
    },
    {
      name: 'The Great Wall of China',
      location: 'China',
      flag: '🇨🇳',
    },
    {
      name: 'Machu Picchu',
      location: 'Peru',
      flag: '🇵🇪',
    },
    {
      name: 'Petra',
      location: 'Jordan',
      flag: '🇯🇴',
    },
    {
      name: 'The Roman Colosseum',
      location: 'Italy',
      flag: '🇮🇹',
    },
    {
      name: 'The Taj Mahal',
      location: 'India',
      flag: '🇮🇳',
    },
  ];

  return (
    <div>
      { sevenWonders.map((wonder, i) =>
        <ButtonGroup key={i} size="sm" isAttached variant="outline">
          <Button className={wonders.btn} onClick={() => dispatch(getPhotos(wonder.name))}>
            { wonder.name }
            <span className={wonders.flag}>{ wonder.flag }</span>
          </Button>
        </ButtonGroup>) }
    </div>
  );
};

export default ModernWonders;
