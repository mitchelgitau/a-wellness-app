import { createStyles, Container, Group, Anchor } from '@mantine/core';


const useStyles : any = createStyles((theme) => ({
  footer: {
    marginTop: (30),
    borderTop: `${(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row', 
    alignItems: 'center',
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    display: 'flex',
    justifyContent: 'space-evenly',
    
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function Footer({ links }: FooterSimpleProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <Group sx={{ height: '100%' }} spacing={10} className={classes.inner}>
          <a className={classes.links} >
            About Us
          </a>
          <a className={classes.links} >
            Sign Up
          </a>
          <a className={classes.links} >
            Login
          </a>
        </Group>
      </Container>
    </div>
  );
}