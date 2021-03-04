import { Fragment } from 'react';
import { useTypedSelector } from './../hooks/use-typed-selector';
import CellListItem from './CellListItem';
import AddCell from './AddCell';

const CellList: React.FC = () => {
    const cells = useTypedSelector(({ cells: { order, data } }) => {
        return order.map((id) => {
            return data[id];
        });
    });

    const renderedCells = cells.map((cell) => (
        <Fragment key={cell.id}>
            <CellListItem cell={cell} />
            <AddCell previousCellId={cell.id} />
        </Fragment>
    ));

    return (
        <div>
            <div className={cells.length === 0 ? 'force-visible' : ''}>
                <AddCell previousCellId={null} />
            </div>
            {renderedCells}
        </div>
    );
};

export default CellList;
