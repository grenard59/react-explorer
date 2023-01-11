
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'

import './App.css';
import Folder from './components/Folder';
import data from './data/sampleData';

function App() {
  return (


    <div className="App">
      <ChakraProvider>
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={'50px 1fr 30px'}
          height='100%'
          gridTemplateColumns={'150px 1fr'}
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem pl='2' area={'header'}>
            Header
          </GridItem>
          <GridItem pl='2' borderRight={'1px solid grey'} area={'nav'}>
            <Folder data={data} />
          </GridItem>
          <GridItem pl='2' area={'main'}>
            Main
          </GridItem>
        </Grid>

      </ChakraProvider>
    </div>

  );
}

export default App;
