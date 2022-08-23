import { useState } from 'react';
import { readFile } from '../../helpers/images';

const Photo = () => {
  const [imageSrc, setImageSrc] = useState(null); //file data
  const [filename, setFilename] = useState(null); //file adress
  const handleFileChange = async(e: any) => {
    if (e.target.files && e.target.files.length) {
      //we got a file...
      const file = e.target.files[0];
      console.log(e.target.files[0]);
      setFilename(file.path);
      //get the image data from the file
      const imageData:any = await readFile(file)
      //setImageSrc to that image data
      setImageSrc(imageData)

    }
  };
  if (!imageSrc) {
    return (
      <>
        <h1>Please choose photo to crop</h1>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </>
    );
  }
  return(
    <>
    <img src={imageSrc}/>
    </>
  )
};

export default Photo;