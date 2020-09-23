import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Landing from '../Landing/Landing'
import Index from '../IndexPage/IndexPage'
import authService from "../../services/authService";
import Users from "../Users/Users";
import PreArrivalList from '../../components/PreArrivalList/PreArrivalList';
import AddPre from '../AddPre/AddPre'
import * as preArrivalAPI from '../../services/pre-api'
import PostArrivalList from '../../components/PostArrivalList/PostArrivalList'
import AddPostList from '../AddPostPage/AddPostPage'
import * as PostArrivalAPI from '../../services/post-api'
import EditPreArrival from '../EditPreArrival/EditPreArrival'
import EditPost from '../EditPost/EditPost'
import "./App.css";


class App extends Component {
  state = {
    preArrivals: [],
    postArrivals: [],
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: [] });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddPre = async newPreData => {
    const newPreArrival = await preArrivalAPI.create(newPreData);
    newPreArrival.addedBy = {name: this.state.user.name, _id: this.state.user._id}
    this.setState(state => ({
      preArrivals: [...state.preArrivals, newPreArrival]
    }), () => this.props.history.push('/preArrival')) 
  }

  handleAddPost = async newPostData => {
    const newPost = await PostArrivalAPI.create(newPostData);
    this.setState(state => ({
      postArrivals: [...state.postArrivals, newPost]
    }), () => this.props.history.push('/post')) 
  }

  
  handleUpdatePreArrival = async updatedPreData => {
    const updatedPreArrival = await preArrivalAPI.update(updatedPreData);
    const newPreArrivalsArray = this.state.preArrivals.map(pre => 
      pre._id === updatedPreArrival._id ? updatedPreArrival : pre
      );
      this.setState(
        {preArrivals: newPreArrivalsArray},
        () => this.props.history.push('/preArrival')
        );
      }

  handleDeletePreArrival = async id => {
    if(authService.getUser()){
      await preArrivalAPI.deleteOne(id);
      this.setState(state => ({
        preArrivals: state.preArrivals.filter(pre => pre._id !== id)
      }), () => this.props.history.push('/preArrival'));
    } else {
      this.props.history.push('/login')
    }
  }

  handleUpdateToDo = async updatedPostData => {
    const updatedPost = await PostArrivalAPI.update(updatedPostData);
    const newPostArray = this.state.postArrivals.map(t =>
      t._id === updatedPost._id ? updatedPost : t
    );
    this.setState(
      { postArrivals: newPostArray },
      () => this.props.history.push('/post')
    );
  }

  handleDeletePostArrival = async id => {
    if(authService.getUser()) {
      await PostArrivalAPI.deleteOne(id);
      this.setState(state => ({
        postArrivals: state.postArrivals.filter(a => a._id !== id)
      }), () => this.props.history.push('/post'))
    } else {
      this.props.history.push('/login')
    }
  }

  async componentDidMount() {
    const preArrivals = await preArrivalAPI.getAll();
    const postArrivals = await PostArrivalAPI.getAll();
    console.log(preArrivals)
    this.setState({ preArrivals, postArrivals })
  }


  render() {
    const {user} = this.state
    return (
      <>
        <NavBar user={user} 
        handleLogout={this.handleLogout} 
        />
        <Route
          exact
          path="/"
          render={({history}) => (
            <main>
              <Landing />
              <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
            
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />

        <Route 
          exact
          path="/index"
          render={() => 
            <Index /> } />

        <Route 
          exact
          path="/preArrival"
          render={() =>
            <PreArrivalList 
              preArrivals={this.state.preArrivals}
              user={this.state.user}
              handleDeletePreArrival={this.handleDeletePreArrival}
        /> } />

        <Route
          exact
          path="/addPreArrival"
          render={() =>
            authService.getUser() ?
              <AddPre
                handleAddPre={this.handleAddPre}
                />
                :
                <Redirect to='/login' />
          } />

          <Route 
              exact
              path="/post"
              render={() => 
                <PostArrivalList 
                postArrivals={this.state.postArrivals}
                user={this.state.user}
        handleDeletePostArrival={this.handleDeletePostArrival}
                /> 
              } />

        <Route
            exact
            path="/postToDo"
            render={() =>
              authService.getUser() ?
              <AddPostList
              handleAddPost={this.handleAddPost}
              />
              :
              <Redirect to="/login" />
        }/>
        
         <Route
          exact path='/editPost' render={({ location }) =>
            authService.getUser() ?
              <EditPost
                handleUpdateToDo={this.handleUpdateToDo}
                location={location}
                user={this.state.user}
              />
              :
              <Redirect to='/login' />
          } />

        <Route 
        exact path='/edit' render={({location}) =>
        authService.getUser() ?
          <EditPreArrival 
            handleUpdatePreArrival={this.handleUpdatePreArrival}
            location={location}
            user={this.state.user}
          />
          :
          <Redirect to='/login' />
        }/>
      </>
    );
  }
}

export default App;

