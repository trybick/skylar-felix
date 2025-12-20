import { imageSources } from '../utils/images';
import './ImagesContainer.css';

const ImagesContainer = () => (
  <div className="imagesContainer">
    {imageSources.map((src, i) => (
      <img key={`${src}-${i}`} src={src} alt="" className="image" />
    ))}
  </div>
);

export default ImagesContainer;
