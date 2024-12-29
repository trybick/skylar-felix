import { imageSources } from '../utils/images';

const ImagesContainer = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: '30px',
    }}
  >
    {imageSources.map((src) => (
      <img
        key={src}
        src={src}
        style={{
          borderRadius: '20px',
          maxWidth: '85%',
          marginBottom: '40px',
          width: '400px',
          transition: 'filter 0.3s',
        }}
      />
    ))}
  </div>
);

export default ImagesContainer;
