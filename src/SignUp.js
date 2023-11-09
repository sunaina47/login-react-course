export default function SignUp(){

    function validateFormb(){

    }
    return(
        <form action="#" method="post" id="formb" onsubmit={validateFormb}>
            <div className="container">
                <Title />
                <InputFields>
                    <UserName />
                    <Password />
                </InputFields>
                <Actions />
            </div>
        </form>
    );
}

function Title(){
    return(
        <div>
        <h1>Sign Up</h1>
        <p className="description">Please fill in this form to create an account.</p>
        <hr />
        </div>
    );
}

function InputFields({children}){
    return(
        <div>
            { children } 
        </div>
    );
}

function UserName(){
    return(
        <div>
            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" />
        </div>
    );
}

function Password(){
    return(
        <div>
            <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" 
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" 
                title="*Password must contain atleat 8 characters, 1 uppercase letter, 1 lowercase letter and a special charater" />
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" />
        </div>
    )
}

function Actions(){
    const myStyle ={
        
    };
    return(<div>
        <label>
        <input type="checkbox" name="remember" style={myStyle}/> Remember me
        </label>
        <p>By creating an account you agree to our <a href="#" style={{color: "dodgerblue"}}>Terms & Privacy</a>.</p>
        <div class="clearfix"> 
            <a> <button class="cancelbtn" formaction = "index.html">Cancel</button></a>
            <a><button class="signupbtn" type = "submit" formaction = "index.html" >Sign Up</button></a>
        </div>      
    </div>);
}