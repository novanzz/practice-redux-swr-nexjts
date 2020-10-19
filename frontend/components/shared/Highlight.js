import { useState, useEffect } from 'react';

const Highlight = props => {

  //UI/UX
  const [htmlSlide, setHtmlSlide] = useState(null);
  const [slideIndexs, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(slideIndexs => slideIndexs <= 2?slideIndexs + 1:slideIndexs=1);
      autoSlide(slideIndexs)
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndexs]);

  const slides = (n) => {
    elementCarousel(n)
    setSlideIndex(n)
  }

  const currentSlide = (n) => {
    setSlideIndex(n)
    elementCarousel(n)
  }
  
  const autoSlide = (n) => elementCarousel(n)

  const elementCarousel = (n) => {   
    const data = [
      {
        src: "https://deo.shopeemobile.com/shopee/digital-product/static/202007/c47zgg5nh9fs.jpg",
        text: "Caption One"
      },
      {
        src: "https://deo.shopeemobile.com/shopee/digital-product/static/202007/c49xsufj1skc.jpg",
        text: "Caption Two"
      },
      {
        src: "https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2020/10/2/3f788230-2e55-4e27-9a07-3ee44ddb20cb.jpg.webp",
        text: "Caption Three"
      }
    ]

    const styleNone = {
      display: 'none'
    };

    const styleBlock = {
      display: 'block'
    };

    let slideIndex = 1
    n > data.length ? slideIndex = 1 : slideIndex = n
    if (n <= 0) { slideIndex = data.length }

    const item = data.map((item, index) => {
      var styling = ""
      slideIndex == index + 1 ? styling = styleBlock : styling = styleNone;
      return (
        <div className="mySlides fade" key={index} style={styling}>
          {/* <div className="numbertext">{index + 1} / {data.length}</div> */}
          <img src={item.src} style={{ width: "100%" }} />
          {/* <div className="text">{item.text}</div> */}
          <div className="dotWrap">
            <span className={`dot ${index == 0 && "active"}`} onClick={() => currentSlide(1)}></span>
            <span className={`dot ${index == 1 && "active"}`} onClick={() => currentSlide(2)}></span>
            <span className={`dot ${index == 2 && "active"}`} onClick={() => currentSlide(3)}></span>
          </div>
        </div>
      )
    })

    const items = (
      <div className="slideshow-container">
        { item }
        <a className="prev" onClick={() => slides(slideIndex-1)}>&#10094;</a>
        <a className="next" onClick={() => slides(slideIndex+1)}>&#10095;</a>
      </div>
    )

    setHtmlSlide(
      items
    )
  }

  return (
    <div>
      { htmlSlide == null && elementCarousel(1)}
      { htmlSlide }
    </div>
  )
}

export default Highlight