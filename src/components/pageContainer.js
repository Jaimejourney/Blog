import React, {Component} from 'react'
import blogList from './blogList'
import data from './../data/products.json'

class Pagecontainer extends Component {
    constructor() {
        super()
        this.state = {
            dataList:[],
            pageConfig: {
                totalPage: data.length //总页码
            }
        }
        this.getCurrentPage = this.getCurrentPage.bind(this)
    }
    getCurrentPage(currentPage) {
        this.setState({
            dataList:data[currentPage-1].name
        })
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.dataList}
                </div>
                <blogList pageConfig={this.state.pageConfig}
                               pageCallbackFn={this.getCurrentPage}/>
            </div>

        )
    }
}
export default Pagecontainer