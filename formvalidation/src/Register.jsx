// import React from 'react'
// import { useEffect, useState, useRef } from 'react'
// import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3, 24}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).(8-24)$/;



// function Register() {

// const userRef = useRef();
// const errRef = userRef();


// const [user, setUser] = useState('');
// const [validName, setValidName] = useState(false);
// const [userFocus, setUserFocus] = useState(false);

// const[pwd, setPwd] = useState('');
// const [ validPwd, setValidPwd] = useState(false);
// const [pwdFocus, setPwdFocus] = useState(false);

// const [matchPwd, setMatchPwd] = useState('');
// const [validMatch, setValidMatch] = useState(false);
// const [ matchFocus, setMatchFocus] = useState(false);

// const [errMsg, setErrMsg] = useState('');
// const [success, setSuccess] = useState(false);


// useEffect(() =>{
//     userRef.current.focus();
// }, [])

// useEffect(() =>{
//     const result = USER_REGEX.test(user);
//     console.log(result);
//     console.log(user)
//     setValidName(result)

// }, [user])


// useEffect(() => {
//   const result = PWD_REGEX.test(pwd);
//   console.log(result)
//   console.log(pwd)
//   const match = pwd === matchPwd;
//   setValidMatch(match);

// }, [pwd, matchPwd])


// useEffect(() =>{
//     setErrMsg('')
// }, [pwd, user, matchPwd])

// const handleSubmit = async (e) =>{
//     e.preventDefault();
//     // if button is enabled by a js hack here use this security feature
//     const v1 = USER_REGEX.test(user);
//     const v2 =PWD_REGEX.test(pwd);
//     if (!v1 || !v2){
//         setErrMsg("Invalid entry");
//         return;
//     }
//     console.log(user, pwd)
//     setSuccess(true);
// }

//   return (
//     <>
//     {success ? (
//    <section>
   
//         <h1> success</h1>
//         <p>
//             <a href="#"> Sign In</a>
//         </p>
       

//    </section>
    
//     ) : (
   



//     <section>
        
//         <p className={errMsg ? "errmsg" : "offscreen"}aria-live='assertive' >{errMsg}</p>
//         <h1>Register</h1>

//         <form onSubmit={handleSubmit}>
//             <label htmlFor="username">Username: 
//                 <span className={validName ? "valid" : "hide" }>
//                     <FontAwesomeIcon incon={faCheck} />
//                 </span>
//                 <span className={validName || !user ? "hide" : "invalid"}>
//                     <FontAwesomeIcon incon={faTimes} />
//                 </span>
//             </label>

//             <input type="text"
//             id='username'
//             ref={userRef}
//             autoComplete='off'
//             onChange={(e) =>setUser(e.target.value) }
//             required
//             aria-invalid={validName ? "false" : "true"}
//             aria-describedby='uidnote'
//             onFocus={() =>setUserFocus(true) }
//             onBlur={() =>setUserFocus(false)}
            
//             />

//             <p id='uidnote' className={userFocus && user && !validName ? "instruction" : "offscreen"}> <FontAwesomeIcon icon={faInfoCircle} />
//             4 to 24 characters . <br />
//             must begine with a letter <br />
//             letter, numbers, underscore, hyphens allowed.

//             </p>


// {/* password section here */}

//            <label htmlFor="password">Password: 
//                 <span className={validPwd ? "valid" : "hide" }>
//                     <FontAwesomeIcon incon={faCheck} />
//                 </span>
//                 <span className={validPwd || !pwd ? "hide" : "invalid"}>
//                     <FontAwesomeIcon incon={faTimes} />
//                 </span>
//             </label>

//             <input type="password"
//             id='password'
           
//             onChange={(e) =>setPwd(e.target.value) }
//             required
//             aria-invalid={validPwd ? "false" : "true"}
//             aria-describedby='uidnote'
//             onFocus={() =>setPwdFocus(true) }
//             onBlur={() =>setPwdFocus(false)}
            
//             />

//             <p id='uidnote' className={pwdFocus && pwd && !validPwd ? "instruction" : "offscreen"}> <FontAwesomeIcon icon={faInfoCircle} />
//             4 to 24 characters . <br />
//             must include uppercase and lowercase text numbers and special characters.   <br />
            
//             Allowed spacial character: <span aria-label="exclamation mark">
//                 !
//             </span>
//             <span aria-label='at symbol' >@</span>
//             <span aria-label='hashtag' >#</span>
//             <span aria-label='dollar sign' >$</span>
//             <span aria-label='percent' >%</span>

//             </p>


//             {/* confirm password section here */}

//             <label htmlFor="confirm_pwd"> confirm Password: 
//                 <span className={validMatch && matchPwd ? "valid" : "hide" }>
//                     <FontAwesomeIcon incon={faCheck} />
//                 </span>
//                 <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
//                     <FontAwesomeIcon incon={faTimes} />
//                 </span>
//             </label>


//             <input type="password"
//             id='confirm_pwd'
           
//             onChange={(e) =>setMatchPwd(e.target.value) }
//             required
//             aria-invalid={validMatch ? "false" : "true"}
//             aria-describedby='confirmnote'
//             onFocus={() =>setPwdFocus(true) }
//             onBlur={() =>setPwdFocus(false)}
            
//             />

//            <p id='uidnote' className={matchFocusFocus && !validMatch ? "instruction" : "offscreen"}> <FontAwesomeIcon icon={faInfoCircle} />
//            Must match the first password field here
           
//             </p>




// <button
// disabled={  validName || !validPwd || !validMatch ? true : false}

// >Sign Up here</button>

//         </form>
//         Already have an account ? <br />
//         <span className='line' >
//             <a href="#"> Sign In here</a>

//         </span>
//     </section>
//     )};
//     </>
//   )
// }

// export default Register




import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('')
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>


                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register