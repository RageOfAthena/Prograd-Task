import styles from "./Books.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pp from "./no-img-icon.jpg";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Books(props) {
  const [fet, onfet] = useState(false);
  const [page,onpage]=useState(0);
  const [loc, onloc] = useState();
  const [when, onwhen] = useState();
  const [price, onprice] = useState();
  const [bed, onbed] = useState();
  const [arr, onarr] = useState();
  const [search, onsearch] = useState();
  const [authors, setauthors] = useState([]);
  const [title, settitle] = useState([]);
  const [type,settype]=useState([]);
  const [pub,setpub]=useState([]);
  const query = useSelector((state) => {
    return state.counter.query;
  });
  // console.log(query);
  useEffect(() => {
    if (query !== " ") {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCDgRAXUYvnfJtU9bAOBlh0SU9Lu7MkhpE&maxResults=40`
      )
        .then((e) => {
          return e.json();
        })
        .then((e) => {
          onfet(e.items);
          
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [query]);
  useEffect(()=>{
    setauthors([]);
    settitle([]);
    settype([]);
    setpub([]);
  },[fet])
  useEffect(()=>{
    if(fet)
  fet?.forEach((e)=>{e.volumeInfo?.authors?.forEach((k)=>{setauthors(prevState => [...prevState, k])})})
  
  },[fet,page]);
  useEffect(()=>{
    if(fet)
  fet?.forEach((e)=>{settitle(prevState => [...prevState, e.volumeInfo?.title])});
  
  },[fet,page]);
  useEffect(()=>{
    if(fet)
  fet?.forEach((e)=>{e.volumeInfo?.categories?.forEach((k)=>{settype(prevState => [...prevState, k])})})
  
  },[fet,page]);
  useEffect(()=>{
    if(fet)
  fet?.forEach((e)=>{setpub(prevState => [...prevState, e.volumeInfo?.publisher])});
  
  },[fet,page])

  return (
    <React.Fragment>
      <div className={styles.filters}>
        <div className={styles.filterslocation}>
          <h3 className={styles.filterslocationtitle}>Title</h3>
          <select
            value={loc}
            onChange={(e) => {
              onloc(e.target.value);
            }}
          >
            <option value="">Choose a Option</option>
            {/* <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option> */}
            {title.slice(page*10,(page*10)+10).map((e)=>{if(e!==undefined) return (<option>{e}</option>)})}
            
          </select>
        </div>
        <div className={styles.filterswhen}>
          <h3 className={styles.filterswhentitle}>Authors</h3>
          <select
            onChange={(e) => {
              onwhen(e.target.value);
            }}
          >
            <option value="">Choose a Option</option>
            {/* <option value="0-3">0-3</option>
            <option value="3-5">3-5</option>
            <option value="5-8">5-8</option>
            <option value="8-10">8-10</option>
            <option value="10-15">10-15</option> */}
            {authors.slice(page*10,(page*10)+10).map((e)=>{if(e!==undefined) return (<option>{e}</option>)})}
          </select>
        </div>
        <div className={styles.filtersprice}>
          <h3 className={styles.filterspricetitle}>Subject</h3>
          <select
            onChange={(e) => {
              onprice(e.target.value);
            }}
          >
            <option value="">Choose a Option</option>
            {/* <option value="0-3">0-3</option>
            <option value="3-5">3-5</option>
            <option value="5-8">5-8</option>
            <option value="8-10">8-10</option>
            <option value="10-15">10-15</option> */}
            {type.slice(page*10,(page*10)+10).map((e)=>{if(e!==undefined) return (<option>{e}</option>)})}
          </select>
        </div>
        <div className={styles.filtersproperty}>
          <h3 className={styles.filterspropertytitle}>Publisher</h3>
          <select
            onChange={(e) => {
              onbed(e.target.value);
            }}
          >
            <option value="">Choose a Option</option>
            {/* <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option> */}
            {pub.slice(page*10,(page*10)+10).map((e)=>{if(e!==undefined) return (<option>{e}</option>)})}
          </select>
        </div>
        
      </div>  
      {query === " " && (
        <div className={styles.nosearch}>No Search Results</div>
      )}
      {query !== " " && (
        <React.Fragment>
        <div className={styles.books}>
          {fet &&
            fet.slice(page*10,(page*10)+10).map((e, i) => {
              if((((loc && loc==e?.volumeInfo?.title) || loc===undefined || loc=="")) && (((when && e?.volumeInfo?.authors?.includes(when)) || when===undefined || when=="")) && (((price && e?.volumeInfo?.categories==(price)) || price===undefined || price=="")) && (((bed && e?.volumeInfo?.publisher?.includes(bed)) || bed===undefined || bed==""))){
                return (
                  <Link to={`/book/${e.id}`} className={styles.book1} key={i}>
                    {/* <div className={styles.books1} key={i}> */}
                    {/* <img
                      src={
                        e.volumeInfo.imageLinks !== undefined
                          ? e.volumeInfo.imageLinks.thumbnail
                          : `${pp}`
                      }
                      alt={`${e.volumeInfo.title} book cover`}
                    ></img> */}
                    <div className={styles.imagesa}>
                    <LazyLoadImage
                    placeholderSrc={e.volumeInfo.imageLinks?.smallThumbnail}
                    effect="blur"
                    src={
                      e.volumeInfo.imageLinks !== undefined
                        ? e.volumeInfo.imageLinks?.thumbnail
                        : `${pp}`
                    }
                    alt={`${e.volumeInfo.title} book cover`}
                    className={styles.limg}
                  /></div>
                    <article>
                      <h1>{e?.volumeInfo?.title}</h1>
                      <p>{e.volumeInfo?.authors?.join(" ")}</p>
                    </article>
                    {/* </div> */}
                  </Link>
                );
              }
              
            })}
        </div>
        {(loc===undefined||loc==="") && (when===undefined||when==="") && (price===undefined||price==="") && (bed===undefined||bed==="") && <div className={styles.pagination}>
          <div onClick={(e)=>{onpage(0);onloc(undefined);}}>1</div>
          <div onClick={(e)=>{onpage(1);onloc(undefined);}}>2</div>
          <div onClick={(e)=>{onpage(2);onloc(undefined);}}>3</div>
          <div onClick={(e)=>{onpage(3);onloc(undefined);}}>4</div>
        </div>}
        

        </React.Fragment>
      )}
    </React.Fragment>
  );
}
export default Books;
