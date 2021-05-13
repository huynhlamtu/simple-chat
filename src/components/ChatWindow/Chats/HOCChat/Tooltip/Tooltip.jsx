import React from "react";
import {
  faEdit,
  faTimesCircle,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tooltip.css";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteMessage } from "../../../../../actions";
import store from "../../../../../store";

function Tooltip({ onSelectMsg, id, onSetOnEdit, onEdit }) {
  const { activeThreadId } = store.getState();
  if (onEdit)
    return (
      <div
        className="tooltip-item cancel onEdit"
        title="cancel"
        onClick={() => onSelectMsg(null)}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
    );

  const onDelete = () => {
    onSelectMsg(null);
    store.dispatch(deleteMessage(id, activeThreadId));
  };

  return (
    <div className="tooltip">
      <div className="tooltip-item delete" title="delete" onClick={onDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
      <div
        className="tooltip-item edit"
        title="edit"
        onClick={() => onSetOnEdit(true)}
      >
        <FontAwesomeIcon icon={faPencilAlt} />
      </div>
      <div
        className="tooltip-item cancel"
        title="cancel"
        onClick={() => onSelectMsg(null)}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
    </div>
  );
}

export default Tooltip;
