import { GifGridItem } from "./GifGridItem";
import { useEffectGifs } from "../hooks/useEffectGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useEffectGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            { isLoading && <h2 className='animate__animated animate__flash'>Loading...</h2> }

            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
