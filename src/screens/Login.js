import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import {compose } from "redux";
import {reduxForm,Field }from "redux-form";

import Button from "./../components/Button";
import InputText from '../components/inputText';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            value: '',
            mobNumber: '',
        };
    }

    onChange = (key, value) => {
        console.log("onChange ",key, value)
        this.setState({
            [key]: value
        });
    }

    onSubmit = values => {
        
        console.log("onSubmit ",values)
        
    }
    renderTextInput = (field) => {
        console.log("renderInput ", field )
        const { meta: { touched, error }, placeholder, isPassword, onIconPress, keyboardType, label, secureTextEntry, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    label={label}
                    onIconPress={onIconPress}
                    secureTextEntry={secureTextEntry}
                    isPassword={isPassword}
                    placeholder={placeholder}
                    {...restInput} />
                <Text style={styles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }


    render() {
        const { Email, Password, handleSubmit } = this.props;
        const {value} = this.state;
        return (
            <View style={styles.container}>

                <Text style={styles.instructions}>Login screen</Text>
                <View>
                    <Field
                        style={{ marginTop: 0 }}
                        name="email"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="Enter Email Address"
                        component={this.renderTextInput}
                    />
                    <Field
                        name="password"
                        label="Password"
                        component={this.renderTextInput}
                        placeholder="Enter Password"
                        onIconPress={this.onIconPress}
                        isPassword={true}
                        secureTextEntry={!this.state.isPasswordShown}
                    />
                    </View>
                    <View>
                    <Button
                        title="Login"
                        backgroundColor="rgb(15, 113, 184)"
                        onPress={handleSubmit(this.onSubmit)} />
                    </View>

            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "login",
    })
)(Login);

const styles = StyleSheet.create({
    textInputContainer: {
        paddingHorizontal: 16,
        marginTop: 32
    },
    textInputLabel: {
        color: "rgb(15, 113, 184)",
        fontSize: 16
    },
    textInputBox: {
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(204, 204, 204)",
        paddingBottom: 5,
        paddingTop: 12,
        fontSize: 18
    },
    passwordEyeIconCont: {
        position: "absolute",
        bottom: 6,
        right: 16,
        zIndex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    errorText: {
        color: 'red',
        paddingHorizontal: 16
    },
});
