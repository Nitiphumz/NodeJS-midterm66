module.exports = {

  //Api1 ข้อ x+x
  que1(req, res) {
    input = parseInt(JSON.stringify(req.body["input"]));
    console.log("input = " + input);
    output = input + input;
    console.log("result = " + output);
    res.send(output.toString());
  },

  //Api2 ข้อ GCD
  que2 (req,res){
    a = parseInt(JSON.stringify(req.body['a']))
    b = parseInt(JSON.stringify(req.body['b']))
    console.log('a = '+ a)
    console.log('b = '+ b)

    for(i=a+b;i>0;i--)
    {
        if(b%i==0 && a%i==0){
            gcd=i;
            break;
        }
    }
    console.log('GCD = '+ gcd)
    res.send(gcd.toString())
}
}
