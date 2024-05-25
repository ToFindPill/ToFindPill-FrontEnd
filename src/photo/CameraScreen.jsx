import {Camera, useCameraDevice} from 'react-native-vision-camera';

function CameraScreen() {
  const device = useCameraDevice('front');
  if (device == null) {
    // return <NoCameraErrorView />;
    console.log('카메라 없음')
  } else {
    return (
      <Camera
        // style={.absoluteFill}
        device={device}
        isActive={true}
      />
    );
  }
}

export default CameraScreen;
