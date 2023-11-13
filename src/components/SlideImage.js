import { SliderBox, ImageSlider } from 'react-native-image-slider-box';
import { View } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

const SlideImage = () => {
    const images = {
        image1: require('../../assets/images/beach.png'),
        image2: require('../../assets/images/beach.png'),
        image3: require('../../assets/images/beach.png'),
        image4: require('../../assets/images/beach.png'),
        image5: require('../../assets/images/beach.png'),
    }

    return (
        <View>
            <SliderBox images={Object.values(images)}/>
        </View>
    )
}

export default SlideImage;