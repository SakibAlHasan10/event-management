
const RegisterOthersWay = () => {
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
                <button className='flex w-full  items-center gap-8 border mb-2 rounded-3xl py-3 px-3'>
                    
                    <img src="/github.png" alt="logo" className='w-6' />
                    <span>Log in with GitHun</span>
                </button>
                <button className='flex w-full items-center gap-8 border mb-2 rounded-3xl py-3 px-3'>
                    <img src="/google.png" alt="logo" className='w-6' />
                    <span>Log in with Google</span>
                </button>
            </div>
            
        </div>
    );
};

export default RegisterOthersWay;