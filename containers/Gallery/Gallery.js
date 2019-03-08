import React, {Component} from 'react';
import {FlatList, Text} from 'react-native'
import {fetchGallery} from "../../store/actions";
import {connect} from "react-redux";
import Card from "../../components/Card";

class Gallery extends Component {
    componentDidMount() {
        this.props.fetchGallery();

    };

    render() {

        if (!this.props.gallery) {
            return <Text>Loading...</Text>
        }

        return (
            <FlatList
                data={this.props.gallery}
                renderItem={({item}) => <Card item = {item}/>}
                keyExtractor={(item) => item.id}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        gallery: state.gallery,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGallery: () => dispatch(fetchGallery())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);