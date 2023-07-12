import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
   
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  hiddenMobile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

 

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${(8)} ${(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  return (
    <Header height={60}>
      <Container className={classes.header}>
        
        <Group sx={{ height: '100%' }} spacing={10} className={classes.hiddenMobile}>
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
        <Group>
          <Button>Register</Button>
          <Button variant="default">Login</Button>
        </Group>
      </Container>
    </Header>
  );
}

