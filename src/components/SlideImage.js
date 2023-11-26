import { SliderBox, ImageSlider } from 'react-native-image-slider-box';
import { View } from 'react-native';

const SlideImage = () => {
    const images = {
        image0: require('../../assets/images/Cotco2.png'),
        image1: require('../../assets/images/Cotco2.png'),
        image2: require('../../assets/images/Cotco3.png'),
        image3: require('../../assets/images/Cuabac2.png'),
        image4: require('../../assets/images/Cuabac3.png'),
        image5: require('../../assets/images/Dienkinhthien2.png'),
        image6: require('../../assets/images/Nha3.png'),
        image7: require('../../assets/images/Haulau2.png'),
    }

    return (
        <View>
            <SliderBox images={Object.values(images)}/>
        </View>
    )
}

export default SlideImage;