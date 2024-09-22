import { useState, useEffect,  } from 'react'

const items = [
    {
      id: 1,
      imageUrl:"https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 1",
      description: "Description of item 1",
    },
    {
      id: 2,
      imageUrl:"https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 2",
      description: "Description of item 2",
    },
    {
      id: 3,
      imageUrl:"https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 3",
      description: "Description of item 3",
    },
  ];

export default function Carousel(){
    const [currentItem, setCurrentItem] = useState(0);

    const handleNext = () => {
        setCurrentItem((prevCurrentItem) => {
          if (prevCurrentItem === items.length - 1) {
            return 0;
          }
          return prevCurrentItem + 1;
        });
      };

      const handlePrev = () => {
        setCurrentItem((prevCurrentItem) => {
          if (prevCurrentItem === 0) {
            return items.length - 1;
          }
          return prevCurrentItem - 1;
        });
      };

      useEffect(()=>{
        const intervalId = setInterval(()=>{
            handleNext();
        },1000);
        return ()=>{
            clearInterval(intervalId);
        }
      },[])


    return (
        <div className="carousel">
            <button onClick={handlePrev}>Prev</button>
            <div className="carousel-item">
                <img src={items[currentItem].imageUrl} alt={items[currentItem].imageUrl} />
                <h2>{items[currentItem].title}</h2>
                <p>{items[currentItem].description}</p>
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}