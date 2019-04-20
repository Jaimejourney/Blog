import React,{Component} from 'react';
import classes from './blogList.module.css';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class blogList extends Component {
    render(){
        const {error, loading, products} = this.props;
        return(
            <ul className={classes.posts}>
                {// this iterates through the articles JSON and calls your ArticleListItem
                // component for each article
                Object
                    .values(products)
                    .map(data => {
                        return <li>
                            <span>&gt;&nbsp;{data.date}</span>
                            <Link to={`/blogList/${data.slug}`}>
                            {data.title}</Link>
                        </li>
                    })}
            </ul>

        )
    }
} 


const mapStateToProps = state => {
    return {products: state.items, loading: state.loading, error: state.error};
};

export default connect(mapStateToProps)(blogList);
