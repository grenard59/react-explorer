import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import { Content } from '../types/ContentType';

const Directory = ({ data }: { data: Content }) => (
  !data?.isFolder ? <Box >{data.name}</Box> :
    <AccordionItem border={0}>
      {data?.isFolder ? <AccordionButton>
        <Box >
          {data.name}
          <AccordionIcon />
        </Box>
      </AccordionButton> :
        data.name
      }
      {data?.content?.map((element) => <AccordionPanel padding={0}><Folder data={element} /></AccordionPanel>)}
    </AccordionItem>
)

const Folder = ({ data }: { data: Content }) => (
  <Accordion allowToggle>
    <Directory data={data} />
  </Accordion>
);

export default Folder;
