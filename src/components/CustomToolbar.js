import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-responsive-modal/styles.css";
import { useNavigate } from 'react-router-dom';

const CustomToolbar = ({ label, view, views, onView, onNavigate, localizer }) => {
  const viewDate = moment(view);
  const navigate = useNavigate();
  const handleGoToCart = () => {
    navigate('/cart');
  };
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onNavigate("PREV")}>
          {"<<"}
        </button>
        <button type="button" onClick={() => onNavigate("PREV")}>
          {"<"}
        </button>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onNavigate("NEXT")}>
          {">"}
        </button>
        <button type="button" onClick={() => onNavigate("NEXT")}>
          {">>"}
        </button>
      </span>
      <span>
        <span className="type_1">
          <button></button>
        </span>
        <span className="type_1_txt">National Occasion</span>
      </span>
      <span>
        <span className="type_2">
          <button></button>
        </span>
        <span className="type_2_txt">International Occasion</span>
      </span>
      <span>
        <span className="type_3">
          <button></button>
        </span>
        <span className="type_3_txt">Other Occasion</span>
      </span>
      <button onClick={handleGoToCart} className="go-to-cart">
        {"Go to Cart"}
      </button>
    </div>
  );
};
export default CustomToolbar;
