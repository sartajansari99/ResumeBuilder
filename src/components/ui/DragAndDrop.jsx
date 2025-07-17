// src/components/ui/DragAndDrop.jsx
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DragAndDrop = ({ id, index, moveItem, children }) => {
  const ref = React.useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'SECTION',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) return;
      
      const dragIndex = item.index;
      const hoverIndex = index;
      
      if (dragIndex === hoverIndex) return;
      
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'SECTION',
    item: () => ({ id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div 
      ref={ref} 
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="cursor-move"
      data-handler-id={handlerId}
    >
      {children}
    </div>
  );
};

export default DragAndDrop;