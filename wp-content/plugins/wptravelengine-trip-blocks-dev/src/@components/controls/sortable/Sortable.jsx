import styled from "@emotion/styled";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

const SortableWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px 0;
`

const Sortable = ({ items, setItems, children, ...rest }) => {

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(a => a.id === active.id);
        const newIndex = items.findIndex(a => a.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <SortableWrapper {...rest}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
        >
          {children}
        </SortableContext>
      </DndContext>
    </SortableWrapper>
  );
};

export default Sortable;
