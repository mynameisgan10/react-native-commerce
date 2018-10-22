import { Navigation } from "react-native-navigation"
import Home from "./src/screens/Home/Home"

Navigation.registerComponent(
  "shoplet.HomeScreen",
  () => Home
)



export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "shoplet.HomeScreen",
    title: "home"
  }
})
