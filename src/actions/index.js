import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import InputText from "./../components/inputText";
import Button from "./../components/Button";

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
        console.log("onChange ", key, value)
        this.setState({
            [key]: value
        });
    }

    onSubmit = values => {
        console.log("onSubmit ", values)

    }
    renderTextInput = (field) => {

        const { input, onEnter, returnKeyType, maxLength, secureTextEntry, keyboardType, placeholder,
            input: { onChange } } = field
        return (
            <View style={[styles.textInputContainer, this.props.style]}>
                <Text style={styles.textInputLabel}>{this.props.label}</Text>
                <InputText
                    style={styles.textInputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="rgba(51, 51, 51, 0.6)"
                    selectionColor="rgb(51, 51, 51)"
                    returnKeyType={returnKeyType}
                    placeholder={placeholder}
                    onChangeText={onChange}
                    onBlur={input.onBlur}
                    onFocus={input.onFocus}
                    onSubmitEditing={onEnter}

                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    editable={true} />
                {/*{isPassword &&
                    <View style={styles.passwordEyeIconCont}>
                        <TouchableOpacity onPress={onIconPress}>
                            <Icon
                                name={secureTextEntry ? "eye" : "eye-off"}
                                type="material-community"
                                color="rgb(51, 51, 51)"
                                size={28}
                            />
                        </TouchableOpacity>
                    </View>

    }*/}

            </View>
        );
    }
    render() {
        const { Email, Password, handleSubmit } = this.props;
        const { value } = this.state;
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
