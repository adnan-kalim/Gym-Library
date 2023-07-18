import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {excerciseOptions, fetchData} from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';

const ExcerciseDetail = () => {
  const[exerciseDetail, setExerciseDetail] = useState({});
  const{id} = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
       
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, excerciseOptions);
      setExerciseDetail(exerciseDetailData);
    }

    fetchExercisesData();
  })

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises />
    </Box>
  )
}

export default ExcerciseDetail