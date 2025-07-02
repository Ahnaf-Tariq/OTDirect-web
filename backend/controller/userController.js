const loginUser = async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    if(!password || (!email && !phone)){
        res.json({success:false,msg:'Missing Required Fields'})
    }
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export { loginUser, registerUser };
