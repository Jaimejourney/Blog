import React from 'react';
import classes from './PageFooter.module.css';
import {Link} from 'react-router-dom';

const PageFooter = ({id, last}) => (
    <div>
        <div className={classes.PageFooter}>

            {parseInt(id) === 0
                ? <div></div>
                : <Link to={`/page/${parseInt(id) - 1}`}>
                    Prev
                </Link>
}
            {last === false
                ? <Link to={`/page/${parseInt(id) + 1}`}>
                        Next
                    </Link>
                : <div></div>
}
        </div>
    </div>
);

export default PageFooter;
