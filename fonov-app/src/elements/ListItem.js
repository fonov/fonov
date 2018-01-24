import React, {Component} from "react";


class ListItem extends Component {

    render() {

        const {key, title, after, onClick} = this.props;

        return (
            <li className="" key={key} onClick={onClick}>
                <div className="item-content">
                    <div className="item-inner">
                        <div className="item-title">{title}</div>
                        <div className="item-after">
                            <span className="">{after}</span>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default ListItem