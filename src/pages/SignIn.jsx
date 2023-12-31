import { useRef } from "react";
import { Link as Anchor, useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import Swal from "sweetalert2";
import user_action from "../store/actions/users";
const { signin } = user_action;

export default function SignIn() {
  const navigate = useNavigate();
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const dispatch = useDispatch();

  async function handleSignIn(){
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
  }    
  let responseDispatch = dispatch(signin({ data }))
  .then((res) => {
    if (res.payload.token) {
      Swal.fire({
        icon: "success",
        title: "Logged in!",
      });
      navigate("/");
    }}
  )
  }
  let name = useSelector(store=>store); 
  console.log(name);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1614586125858-e695dd97d1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80')",
      }}
    >
      <div className="min-h-screen text-gray-900 flex justify-center">
        <div className="flex-1 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-3xl text-white font-bold">My Tinerary</h2>
            </div>
          </div>
        </div>
        <div className="max-w-sm m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="mt-12 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-bold">Sign In</h1>
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col gap-2">
              <button className="flex items-center bg-indigo-100 border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >
                        </path>
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        >
                        </path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        >
                        </path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>Sign In with Google</span>
              </button>

              <button className="flex items-center bg-indigo-100 border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  version="1.1"
                >
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-200.000000, -160.000000)"
                      fill="#4460A0"
                    >
                      <path
                        d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                        id="Facebook"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span>Sign In with Facebook</span>
              </button>
            </div>

            <div className="my-6 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or
              </div>
            </div>

            <div className="my-6 border-b text-center">
              <div className="text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 mb-2">
                Sign in with e-mail
              </div>
              <div className="text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Don't have an account?
                <Anchor to="/auth/signup" className="ml-2 text-blue-500">
                  Sign Up
                </Anchor>
              </div>
            </div>

            <div className="mx-auto max-w-xs">
              <input
                ref={mail_signin}
                className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Email"              
                name="mail_signin"
                id="mail_signin"
                defaultValue=""
              />

              <input
                className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                ref={password_signin}
                name="password_signin"
                id="password_signin"
                defaultValue=""
                placeholder="Password"
              />
            </div>

            <div className="flex justify-end">
              <input
                type="button"
                className="max-w-sm px-6 py-2 mt-4 rounded-lg font-medium bg-indigo-500 text-gray-100 text-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                value="Sign In!"
                onClick={handleSignIn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}