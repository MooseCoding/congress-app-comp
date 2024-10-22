import { FC } from "react";


const DisasterTipsCard : FC = ({title, info}) => {
    return (
      <div className="p-4 m-2 bg-white shadow rounded-lg">
        <h1><b>{title}</b></h1>
        {(title==='Preparation') && <h4>{info[1]}</h4>}
        {(title==='During the event') && <h4>{info[1]}</h4>}
        {(title==='After') && <h4>{info[2]}</h4>}
      </div>
    );
  }
  

export default DisasterTipsCard;
