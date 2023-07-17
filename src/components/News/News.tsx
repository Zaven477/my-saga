import { useSelector } from "react-redux";
import { IDataState, INews } from "../../store/types";
import './style.css';

export const News = () => {
  const news = useSelector((state: IDataState) => state.news);
  const loading = useSelector((state: IDataState) => state.loading)
  const error = useSelector((state: IDataState) => state.error);
  

  if(error) {
   return (
      <p className="error">Loading error</p>
   )
  }
  
  if(loading) {
   return (
      <div>Loading...</div>
   )
  }

  return (
    <div>
      <h1>News</h1>
      {news.map((item) => {
        return (
          <p key={item.id} className="text">{item.title}</p>
        )
      })}
    </div>
  );
};
