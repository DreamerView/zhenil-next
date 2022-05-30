import { useState,useCallback } from 'react';
import Cropper from 'react-easy-crop'

const ResizeImage = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels);
    }, []);
    return(
    <div class="main__crop_image">
        <Cropper
            image='https://asianwiki.com/images/e/e8/Song_Joong-Ki-p002.jpeg'
            crop={crop}
            zoom={zoom}
            aspect={3 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
        />
        <button>Save</button>
    </div>
    )
};
export default ResizeImage;