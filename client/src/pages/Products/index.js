import React from 'react';
import { Grid, GridItem } from '../../components/Styles/Layout/Grid/Grid';

const Index = () => {
  const gridProps = {
    width: 'w-4/5',
    gap: 'gap-4',
    margin: {
      auto: 'm-4',
      top: 'mt-6',
    },
  };
  return (
    <Grid {...gridProps}>
      <GridItem color={'bg-orange-500'} span={2}>
        1
      </GridItem>
      <GridItem color={'bg-teal-500'} span={8}>
        2
      </GridItem>
      <GridItem color={'bg-teal-500'} span={2}>
        3
      </GridItem>
    </Grid>
  );
};

export default Index;
