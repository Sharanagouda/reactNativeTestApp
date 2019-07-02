
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';


const defaultProps = {
    title: "Button",
    backgroundColor: "gray",
    iconName: "",
    onPress: () => { },
    disabled: false
}

class Button extends Component {

    render() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.props.onPress} disabled={this.props.disabled}>
                    <View style={[styles.buttonStyle, { backgroundColor: this.props.backgroundColor }]}>
                        <Text style={styles.buttonTitle}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

Button.defaultProps = defaultProps;

export default Button;


const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 16,
        marginVertical: 8
    },
    buttonStyle: {
        padding: 14,
        borderRadius: Platform.OS === "ios" ? 12 : 4,
        flexDirection: "row",
        justifyContent: "center"
    },
    buttonTitle: {
        color: "#ffffff",
        fontSize: 16
    },
});
