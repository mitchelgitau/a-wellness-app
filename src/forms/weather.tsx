import { Button, Group, TextInput, Radio, Flex, Card, createStyles } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { z, object, string, boolean } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { fetchWeatherData } from "../api/hooks/useWeather";

const useStyles = createStyles((theme) => ({

card: {
  padding: theme.spacing.lg,
  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
    width: '100%'
  }
},
}))

const weatherSchema = z.object({
  name: z.string().min(1, "Please input your name"),
  location: z.string().min(1, "Please input a valid location name"),
  unitName: z.string(),
});

const WeatherApp = () => {
  const { classes } = useStyles();
  const form = useForm({
    validate: zodResolver(weatherSchema),
  });
  
  const onSubmitHandler = () => {
    const { location } = form.values;
    fetchWeatherData(location);
  };

  return (
    <div>
      <Flex align="center"  direction="column" justify="center" mt='md'>
      <Card className={classes.card} shadow='sm'  w='60%' >
      <form onSubmit={form.onSubmit(onSubmitHandler)}>
        
          <TextInput
            my = "md"
            size = "md"
            label="Enter your name"
            name="name"
            {...form.getInputProps("name")}
          />
          <TextInput
          my = "md"
          size = "md"
            label="Enter your location"
            name="location"
            {...form.getInputProps("location")}
          />
          <Radio.Group label="Unit Name" {...form.getInputProps("unitName")}my = "md"
            size = "md">
            <Flex>
            <Radio label="Celsius" value="celsius" />
            <Radio label="Fahrenheit" value="fahrenheit" mx= "md"/>
            </Flex>
          </Radio.Group>
          <Button variant = "light"type="submit">Get the weather</Button>
        
      </form>
      </Card>
      </Flex>
    </div>
  )};
  
export default WeatherApp;
