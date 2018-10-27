import { Navigation } from "react-native-navigation"
import Icon from "react-native-vector-icons/FontAwesome5"

import Discover from "./src/screens/Discover/Discover"
import Sell from "./src/screens/Sell/Sell"
import Social from "./src/screens/Social/Social"
import Activities from "./src/screens/Activities/Activities"
import Profile from "./src/screens/Profile/Profile"
import imageGallery from "./src/components/ImageGallery/ImageGallery"
import Camera from "./src/screens/CameraScreen/CameraScreen"


Navigation.registerComponent(
  "shoplet.DiscoverScreen",
  () => Discover
)

Navigation.registerComponent(
  "shoplet.SellScreen",
  () => Sell
)

Navigation.registerComponent(
  "shoplet.SocialScreen",
  () => Social
)

Navigation.registerComponent(
  "shoplet.ActivitiesScreen",
  () => Activities
)

Navigation.registerComponent(
  "shoplet.ProfileScreen",
  () => Profile
)

Navigation.registerComponent(
  "shoplet.imageGallery",
  () => imageGallery
)
Navigation.registerComponent(
  "shoplet.CameraScreen",
  () => Camera
)


export default () => {
  Promise.all([
    Icon.getImageSource("search",30),
    Icon.getImageSource("users",30),
    Icon.getImageSource("plus",30),
    Icon.getImageSource("bell",30),
    Icon.getImageSource("user-alt",30)
  ])
  .then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "shoplet.DiscoverScreen",
          label: "Discover",
          title: "Discover",
          icon: sources[0]
        },
        {
          screen: "shoplet.SocialScreen",
          label: "Social",
          title: "Social",
          icon: sources[1]
        },
        {
          screen: "shoplet.SellScreen",
          label: "Sell",
          title: "Sell",
          icon: sources[2]
        },
        {
          screen: "shoplet.ActivitiesScreen",
          label: "Activities",
          title: "Activities",
          icon: sources[3]
        },
        {
          screen: "shoplet.ProfileScreen",
          label: "Profile",
          title: "Profile",
          icon: sources[4]
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: 'black'
      },
      appStyle:{
        orientation: 'portrait',
        drawUnderNavBar: true,
        navBarTransparent: true,
        navBarHeight: 0,
        navBarHidden: true,
        tabBarSelectedButtonColor: 'black' // for android
      },
      animationType: 'fade'
    })
  })
}


