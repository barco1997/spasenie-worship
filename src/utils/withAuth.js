import React, { Component } from "react";

import axios from "axios";
import { HttpService } from "./http";
import { bool } from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { VIEWS } from "../constants";
import { getPath } from "../helpers/pathHelpers";
import ls from "local-storage";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails
} from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";

const mapStateToProps = store => ({
  isAuthenticated: false
});

const withAuth = Component => {
  class AuthComponent extends React.Component {
    state = {
      hasAccess: null
    };

    async componentDidMount() {
      let self = this;
      if (
        !(
          sessionStorage.getItem("token") &&
          Math.floor(Date.now() / 1000) < sessionStorage.getItem("exp")
        ) /*!fakeAuth.isAuthenticated*/
      ) {
        var username = sessionStorage.getItem("username") || "";
        var authenticationData = {
          Username: username,
          Password: sessionStorage.getItem("password")
        };
        var authenticationDetails = new AuthenticationDetails(
          authenticationData
        );
        var poolData = {
          UserPoolId: "eu-central-1_Mz3ifOuWV", // Your user pool id here
          ClientId: "220ne8j118iqe6re9shf3dk4ip" // Your client id here
        };
        var userPool = new CognitoUserPool(poolData);
        var userData = {
          Username: username,
          Pool: userPool
        };

        var cognitoUser = new CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function(result) {
            var idToken = result.getIdToken().getJwtToken();
            console.log("TOKEN", result.getIdToken());
            ls.set("locale", result.getIdToken().payload.locale);
            axios.defaults.headers.common["Identity"] = idToken;
            axios.defaults.headers.common["x-api-key"] =
              "n02wIwHelV3Xd9H9YSSwL6kuoJ0ZQnFy7Y3yuh69";
            axios.defaults.headers.common["Content-Type"] = "application/json";
            HttpService.setToken(idToken);
            sessionStorage.setItem("token", idToken);
            sessionStorage.setItem(
              "exp",
              result.getIdToken().payload.exp -
                result.getIdToken().payload.auth_time +
                Math.floor(Date.now() / 1000)
            );
            self.setState({
              hasAccess: true
            });
          },
          onFailure: function(err) {
            self.setState({
              hasAccess: false
            });
          }
        });
      } else {
        self.setState({
          hasAccess: true
        });
      }
    }

    render() {
      const { hasAccess } = this.state;

      if (hasAccess === null) {
        return null;
      }

      if (!hasAccess) {
        return (
          <Redirect
            to={{
              pathname: getPath(VIEWS.LOGIN),
              state: { from: this.props.location }
            }}
          />
        );
      }

      return <Component {...this.props} />;
    }
  }

  AuthComponent.propTypes = {
    isAuthenticated: bool.isRequired
  };

  return compose(withRouter, connect(mapStateToProps))(AuthComponent);
};

export default withAuth;
