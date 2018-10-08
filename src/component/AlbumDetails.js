import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { headerContainerStyles, thumbnailStyles, images, headerTextStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnailStyles} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContainerStyles}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={images} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now!</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContainerStyles: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: 5
  },
  thumbnailStyles: {
    width: 50,
    height: 50,
    padding: 5
  },
  headerTextStyle: {
    fontSize: 20
  },
  images: {
    height: 300,
    width: null,
    flex: 1
  }
};

export default AlbumDetails;
