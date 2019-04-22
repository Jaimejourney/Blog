import React, {Component} from 'react'
import classes from './BlogPage.module.css'
import {Link} from 'react-router-dom';
import PageFooter from './../public/Footer/PageFooter';
import {connect} from "react-redux";
import { numberPerPage } from './../public/Const/Const';

class BlogPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagenumber: props.id
        }
    }

    componentWillReceiveProps(props) {
        this.setState({pagenumber: props.id})
    }

    render() {
        const {error, loading, products} = this.props;
        let tmp = Object.values(products);
        let Datatmp = tmp
            .slice(tmp.length - this.state.pagenumber * 8 - 8 < 0 ? 0 : tmp.length - this.state.pagenumber * 8 - 8 , tmp.length - this.state.pagenumber * 8).reverse();
        let last = false;
        if (Object.values(Datatmp).length < 8) {
            last = true;
        }
       
        return (
            <div>
                <ul className={classes.posts}>
                    {Object
                        .values(Datatmp)
                        .map(data => {
                            return <li key={data.title}>
                                <span>&gt;&nbsp;04 Mar 2017</span>
                                <Link to={`/blogList/${data.slug}`}>
                                    {data.title}</Link>
                            </li>
                        })}
                </ul>
                <PageFooter id={this.state.pagenumber} last={last}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {products: state.items, loading: state.loading, error: state.error};
};

export default connect(mapStateToProps)(BlogPage);