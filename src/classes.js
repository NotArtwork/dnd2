import React from 'react'


const UserObject = {
    firstName: 'Antonio',
    lastName: 'Arce',
    signup: function() {
        console.log(this.firstName, 'signed up')
    }
}

class User {
    // constructor tells JS what any given instance of User consists of
    // contructor() is called automatically any time you say "new" in JS
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }

    signup() {
        console.log(this.name, 'signed up!')
    }
}

// class User < ActiveRecord::Base (Ruby)
class AdminUser extends User {
    constructor(name, email, password) {
        super(name, email,password)
        this.admin = true
    }
}


// <app name="" var =""
// App written as a Class Component rather than Function Component
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render(){
        return(
            <div>
                <h1>Hello React Class</h1>
                <h2>Count is {this.state.count}</h2>
                <button onClick={() => { this.setState({count: this.state.count+1})}}>Click Me</button>
            </div>
        )
    }
}

// this = an instance of User.
// a user is a data structure that hsa these attrs: name, email, and password.
let user = new User('Antonio', 'AntArce3@gmail.com', 'password')

 
// Classes are data structures that allow us to create blueprints for future projects
console.log(UserObject)