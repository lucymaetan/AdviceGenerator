const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
  
    console.log(data)
    document.getElementById("adviceNum").innerHTML = `Advice #${data.slip.id}`
    document.getElementById("adviceTxt").innerHTML = `"${data.slip.advice}"`
  }
  
  fetchAdvice()