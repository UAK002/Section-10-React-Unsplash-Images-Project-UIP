import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url =
  'https://api.unsplash.com/search/photos?client_id=ZpHERRZLFMcptAlGTYga5y0P3lz4hP1slFkQXQeq9Wo&query=office';

const Gallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(response);
  return <div>Gallery</div>;
};
export default Gallery;
