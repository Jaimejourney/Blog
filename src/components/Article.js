import React, {Component} from 'react';
import classes from './Article.module.css';
import {connect} from "react-redux";

class Article extends Component {
    render() {
        const {error, loading, products} = this.props;
        return (
            <div>
                <h3>{products[this.props.name].title}</h3>
                <div
                    className={classes.postContent}
                    dangerouslySetInnerHTML={{
                    __html: products[this.props.name].text
                }}></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {products: state.items, loading: state.loading, error: state.error};
};

export default connect(mapStateToProps)(Article);
