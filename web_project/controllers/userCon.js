const login = (req, res)=>{
    res.render('login')
}

const signup = (req, res)=>{
    res.render('signup')
}

const index = (req, res)=>{
    res.render('index')
}

module.exports = {
    login,
    signup,
    index,
}