import { AccessibleForward, DirectionsRun, DirectionsWalk } from '@mui/icons-material';
import { Container, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import no from '../../../public/translations/no';
import en from '../../../public/translations/en';
import fr from '../../../public/translations/fr';
import de from '../../../public/translations/de';

const Lanes = () => {
  const { locale } = useRouter();
  const translation = locale === 'en' ? en : locale === 'fr' ? fr : locale === 'de' ? de : no;

  return (
    <Container>

      <Stack
        gap='2.5rem'
      >
        <Stack
          gap='0.5rem'
        >
          <Typography
            variant='h3'
            textAlign='center'
          >
            {translation.practices.lanes[0]}
          </Typography>
          <Typography
            color='text.secondary'
          >
            {translation.practices.lanes[1]}
          </Typography>
        </Stack>

        <Stack
          gap='0.5rem'
        >
          <Stack
            direction='row'
            gap='0.5rem'
            alignItems='center'
          >
            <Typography
              variant='h4'
              textAlign='center'
            >
              {translation.practices.lanes[2]}
            </Typography>
            <AccessibleForward />
          </Stack>
          <Typography
            marginLeft='2rem'
            color='text.secondary'
          >
            {translation.practices.lanes[3]}
          </Typography>
        </Stack>

        <Stack
          gap='0.5rem'
        >
          <Stack
            direction='row'
            gap='0.5rem'
            alignItems='center'
          >
            <Typography
              variant='h4'
              textAlign='center'
            >
              {translation.practices.lanes[4]}
            </Typography>
            <DirectionsWalk />
          </Stack>
          <Typography
            marginLeft='2rem'
            color='text.secondary'
          >
            {translation.practices.lanes[5]}
          </Typography>
        </Stack>

        <Stack
          gap='0.5rem'
        >
          <Stack
            direction='row'
            gap='0.5rem'
            alignItems='center'
          >
            <Typography
              variant='h4'
            >
              {translation.practices.lanes[6]}
            </Typography>
            <DirectionsRun />
          </Stack>
          <Typography
            marginLeft='2rem'
            color='text.secondary'
          >
            {translation.practices.lanes[7]}
          </Typography>
        </Stack>

        <Typography
          marginTop='2.5rem'
          textAlign='center'
        >
          {translation.practices.choice}
        </Typography>
      </Stack>
      
    </Container>
  );
}

export default Lanes;
