import { Link } from 'react-router-dom';

export default function App(){
  return(
    <div className="card">
      <Form />
    </div>
  );
}

function Title(){
  return(
    <h2>Employee Login</h2>
  )
}

function Form(){
  function validateForma(){

  }
  return(
    <form action="app.html" method="post" id="forma" onsubmit={validateForma}>
      <Title />
      <Avatar />
      <LogInFields>
        <UserName/>
        <Password />
        <SignInBtn />
      </LogInFields>
      <div className="signup">
        New user? <span className="create"><Link to="/SignUp.js">Create an account.</Link></span>
      </div>
    </form>
  );
}
 //function validateForma(){
  // let formaData = document.getElementById("forma");
  // var name = formaData.elements.namedItem("uname").value;
  // var nameErr = document.getElementById("errormsg");
  // name = name.trim();

  // if(name == null || name === ""){
  //     Err = "*Name can't be blank";
  //     nameErr.textContent = Err;
  //     return false;
 //}

function Avatar(){
  return(
    <div className="imgcontainer">
      <img src="assets/img_avatar1.png" alt="Avatar" className="avatar" />
    </div>
  );
}

//Log-in field containing username and password details
function LogInFields({children}){
  return(
    <div class="container">
        {children}
    </div>
  );
}

function UserName(){
  return(
    <div>
      <label for="uname"><b>Username or email address</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required />
      <p id="errormsg"></p>
    </div>
  );
}

function Password(){
  return(
    <div className="password-container">
      <label for="psw"><b>Password</b>
      <span class="psw"> <a href="#">Forgot password?</a></span></label>
      <input type="password" placeholder="Enter Password" name="psw"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
        title="*Password must contain atleast 8 characters, 1 uppercase letter,
        1 lowercase letter and a special charater" id ="password" required />
    </div>
  );
}

function SignInBtn(){
return(
  <div>
  <button type="submit"  className="signinbtn">Sign in</button>
    <label>
      <input type="checkbox" name="remember" /> Remember me
    </label>
  </div>
);
}