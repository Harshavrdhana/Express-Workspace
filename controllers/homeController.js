const homeController = (req,res)=>{
  const data={
    name:'Harsha',
    userId: 40
  }
  res.render("index" , data) //used to render 'ejs' files
}

export {homeController};