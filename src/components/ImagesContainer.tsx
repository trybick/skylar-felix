import { imageSources } from '../utils/images';
import './ImagesContainer.css';

const ImagesContainer = () => (
  <div className="imagesContainer">
    {imageSources.map((src) => (
      <img key={src} src={src} alt="" className="image" />
    ))}
  </div>
);

export default ImagesContainer;
