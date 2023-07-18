import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExcercises from '../components/SearchExcercises';
import Excercises from '../components/Excercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExcercises setExercises={setExercises} 
                        bodyPart={bodyPart} 
                        setBodyPart={setBodyPart} />
      <Excercises setExercises={setExercises} 
                  exercises={exercises} 
                  setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home