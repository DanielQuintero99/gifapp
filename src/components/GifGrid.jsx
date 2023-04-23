
import {useFetchGifs} from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({category}) => {


  const {images, isLoading}=useFetchGifs(category)

  return (
   <>
   {isLoading && <p>Loading...</p>
   
   }
    <div className="card-grid">
      {images.map((image)=>{
        return <GifItem key={image.id} {...image} />
      }
      )}
    </div>
   </>
  )
}

export default GifGrid