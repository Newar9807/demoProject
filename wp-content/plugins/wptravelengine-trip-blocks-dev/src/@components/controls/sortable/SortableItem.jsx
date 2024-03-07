import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from '@emotion/styled';
import Icons from '../../assets/Icons';

const SortableItemStyle = styled.div`
    width: 100%;
    position: relative;
    .wc__sort-button{
        padding: 0;
        background-color: transparent;
        font-size: 0;
        border: none;
        width: 12px;
        height: 20px;
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        cursor: move;
        color: #42474B;
        opacity: .5;
        svg{
            vertical-align: top;
            width: 100%;
            height: 100%;
        }
        &:hover{
            color: var(--cw__secondary-color);
            opacity: 1;
        }
    }
    > .cw__control-item{
        border: 1px solid var(--cw__border-color);
        border-radius: var(--cw__border-radius);
        padding: 12px;
        padding-left: 34px;
        background-color: #ffffff;
    }
`

const SortableItem = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.id });

    const { children } = props

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <SortableItemStyle {...attributes} ref={setNodeRef} style={style} >
            <button className="wc__sort-button" type="button" {...listeners}>
                {Icons.move}
            </button>
            {children}
        </SortableItemStyle>
    );
}

export default SortableItem;