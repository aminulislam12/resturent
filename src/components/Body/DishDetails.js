import React from "react";
import Loadcommets from "./LoadComments";
import NewComment from "./NewComment";
import { BaseURL } from "../../redux/BaseURL";

const DishDetails = (props) => {
  return (
    <div>
      <div className="modal-box">
        <div className="modal-img">
          <img
            src={BaseURL + props.dish.image}
            alt={props.dish.name}
            className="menu-img"
          />
        </div>
        <div className="modal-text">
          <h3>{props.dish.name}</h3>
          <p>{props.dish.description}</p>
          <button className="btn btn-success btn-block">
            ${props.dish.price}
          </button>
        </div>
      </div>
      <hr />
      <Loadcommets
        comment={props.comments}
        commentIsLoading={props.commentisLoading}
      />
      <hr />
      <NewComment dishId={props.dish.id} addComment={props.addComment} />
    </div>
  );
};

export default DishDetails;
