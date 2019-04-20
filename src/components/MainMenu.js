import React, {Component} from 'react'
import classes from './BlogPage.module.css'
import {Link} from 'react-router-dom';
import Footer from './../public/Footer/Footer';
import {connect} from "react-redux";
import { fetchProducts } from "./../store/actions";


class MainMenu extends Component {
    componentDidMount() {
        this
            .props
            .dispatch(fetchProducts());
    }

    render() {
        const {error, loading, products} = this.props;
        let Datatmp = Object
            .values(products)
            .slice(0, 8);
        return (
            <div>
                <ul className={classes.posts}>
                    {// this iterates through the articles JSON and calls your ArticleListItem
                    // component for each article
                    Object
                        .values(Datatmp)
                        .map(data => {
                            return <li key={data.title}>
                                <span>&gt;&nbsp;{data.date}</span>
                                <Link to={`/blogList/${data.slug}`}>
                                    {data.title}</Link>
                            </li>
                        })}

                </ul>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {products: state.items, loading: state.loading, error: state.error};
};


export default connect(mapStateToProps)(MainMenu);