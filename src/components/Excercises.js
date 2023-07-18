import React from 'react';
import { useState, useEffect } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import { excerciseOptions, fetchData } from '../utils/fetchData';

const Excercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9; 

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top : 1800, behavior : 'smooth'});
  }

  return (
    <Box id="exercises" 
          sx={{mt : {lg : '110px' }}}
          mt='50px'
          p='20px'
          >
      <Typography variant='h4' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap : {lg : '110px', xs : '50px' }}} flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((exercise,index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
          {exercises.length > 0 && (
            <Pagination color='standard' 
                        shape='rounded' 
                        defaultPage={1} 
                        count={Math.ceil(exercises.length/exercisesPerPage)} 
                        page={currentPage} 
                        onChange={paginate} 
                        size='large'
            />
          )}
      </Stack>
    </Box>
  );
}

export default Excercises;