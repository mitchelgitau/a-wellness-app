import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
  Group,
  Flex,
} from "@mantine/core";
import heroImage from "../assets/heroImage.png";
import { useNavigate } from "react-router-dom";
import zenImage from "../assets/zenImage.jpg";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray[5],
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  },
  inner: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    backgroundColor: theme.colors.gray[3],
    
  },
  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  hiddenMobile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  container: {
    height: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: 500,
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    color: theme.black,
    fontSize: 40,
    fontWeight: 800,
    lineHeight: 1.1,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.black,
    fontSize: 20,
    fontWeight: 450,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },
  img: {
    height: 400,
    width: 300,
  },

  control: {
    fontSize: 14,
    boxSizing: "border-box",
    alignItems: "center",
    position: "absolute",
    width: 300,
    height: 40,
    background: theme.white,
    border: "1px solid #317FCE",
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.hero}>
      <Overlay
        opacity={1.5}
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, .25) 30%)"
        zIndex={0}
      />

      <Container className={classes.container}>
        <div className={classes.inner}>
          <Group
            sx={{ height: 50, width: 1000 }}
            spacing={100}
            className={classes.hiddenMobile}
          >
            <a className={classes.links}>HOME</a>
            <a className={classes.links} >ABOUT US</a>
            <a className={classes.links}>FIND CALM</a>
            <a className={classes.links}>CONTACT US</a>
            <a className={classes.links}>BLOG</a>
          </Group>
        </div>

        <Flex direction="row">
          <img className={classes.img} src={zenImage} />
          <Flex
            direction="column"
            mih={50}
            gap="md"
            justify="center"
            align="center"
          >
            <Title className={classes.title}>
              A wellness platform for providing calm in a reactive world
            </Title>

            <Text className={classes.description}>
              To educate, support, and empower the community to improve and
              maintain their overall health and well-being through healthy
              lifestyle choices and to create a culture of wellness.
            </Text>
          </Flex>
        </Flex>

        <div className={classes.controls}>
          <Button
            variant="light"
            size="xl"
            className={classes.control}
            onClick={() => navigate("/weather")}
          >
            Get started
          </Button>
        </div>
      </Container>
    </div>
  );
}
