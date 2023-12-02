import { SliderBox } from 'react-native-image-slider-box';
import { View, StyleSheet, Dimensions } from 'react-native';

const SlideTour = () => {
    const images = {
        image0: require('../../assets/tour-images/tour-dem-0.jpg'),
        image1: require('../../assets/tour-images/tour-vn-0.jpg'),
        image2: require('../../assets/tour-images/tour-nn-0.jpg'),
    };

    const captions = [
        'Tour đêm Hoàng Thành Thăng Long',
        'Tour dành cho du khách trong nước',
        'Tour dành cho du khách nước ngoài',
    ]

    return (
        <View style={styles.container}>
            <SliderBox
                style={styles.sliderBox}
                images={Object.values(images)}
                dotColor='#dec584'
                inactiveDotColor='#e2d7a7'
                autoplay
                circleLoop
                autoplayInterval={4000}
                onCurrentImagePressed={(index) => {
                    console.log(`Image ${index} pressed`);
                    // handle the press event here
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderBox: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.25,
        left: '5%',
        borderRadius: 16, // Adjust the border radius as needed
    },
});

export default SlideTour;
