import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "sweetalert2/dist/sweetalert2.min.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import CustomToolbar from "./CustomToolbar";
import "../App.scss";
import events from "./Events";

const localizer = momentLocalizer(moment);
const EventCalendar = () => {
  const [selectedImages, setSelectedImages] = useState(null);

  const dispatch = useDispatch();
  const [isOpen, setIsModalOpen] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedImages(event.images);
    setIsModalOpen(true);
  };

  const addToCartImage = (images) => {
    dispatch(addToCart(images));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const eventStyleGetter = (event) => {
    let backgroundColor = "";
    switch (
      event.type
    ) {
      case "National":
        backgroundColor = "#cf09ec";
        break;
      case "International":
        backgroundColor = "#0834e9";
        break;
      default:
        backgroundColor = "#6b28b6";
        break;
    }
    return {
      style: {
        backgroundColor,
      },
    };
  };
  return (
    <div>
      <Calendar
        defaultView="month"
        style={{ height: "100vh" }}
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        eventPropGetter={eventStyleGetter}
        views={["year", "month"]}
        components={{
          toolbar: CustomToolbar,
        }}
        formats={{
          weekdayFormat: (date, culture, localizer) =>
            localizer.format(date, "dddd", culture),
        }}
      />
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={closeModal}
          center
          contentLabel="Event Images"
        >
          {selectedImages && (
            <div>
              {selectedImages.map((image) => (
                <div
                  style={{
                    maxWidth: "640px",
                    margin: "0 auto",
                    backgroundColor: "white",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    borderRadius: "0.375rem",
                  }}
                  key={image.id}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={image.url}
                      alt=""
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      style={{
                        position: "absolute",
                        top: "80%",
                        left: "50%",
                        height: "25%",
                        width: "20%",
                        transform: "translate(-50%, -50%)",
                      }}
                      variant="outline-primary"
                      className="rounded-circle"
                      onClick={() => addToCartImage(image)}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default EventCalendar;
