import toast from "react-hot-toast";
import useApi from "../../ContextApi/useApi";
import { useNavigate } from "react-router-dom";

const RegisterOthersWay = () => {
  const { registerWithGoogle, registerWithGitHub } = useApi();
  const navigate = useNavigate()
     //   sign up with google
  const handleGoogleSignUp = () => {
    registerWithGoogle()
      .then((res) => {
        navigate('/')
        res && toast.success("Your registration is success");
        // console.log(res.user);
      })
      .catch((error) => {
        navigate('/')
        error && toast.error("Please check your information");
        // console.error(error)
      });
  };
  //   sign up with github
  const handleGithubSignUp = () => {
    registerWithGitHub()
      .then((res) => {
        res && toast.success("Your registration is success");
        // console.log(res.user);
      })
      .catch((error) => {
        error && toast.error("Please check your information");
        // console.error(error)
      });
  };
    return (
        <div>
            <div>
                <p className="flex items-center gap-2 py-5 px-5">
                <span className="border-b  w-full "></span>
                Or
                <span className="border-b w-full "></span>
                </p>
            </div>
            <div className='px-5 text-base font-semibold'>
                <button onClick={handleGithubSignUp} className='flex w-full  items-center gap-8 border mb-2 rounded-3xl py-3 px-3'>
                    
                    <img src="/github.png" alt="logo" className='w-6' />
                    <span>Log in with GitHun</span>
                </button>
                <button onClick={handleGoogleSignUp} className='flex w-full items-center gap-8 border mb-2 rounded-3xl py-3 px-3'>
                    <img src="/google.png" alt="logo" className='w-6' />
                    <span>Log in with Google</span>
                </button>
            </div>
            
        </div>
    );
};

export default RegisterOthersWay;