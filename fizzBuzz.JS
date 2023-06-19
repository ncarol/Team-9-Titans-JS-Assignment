function fizzBuzz(a,b)
{
    let concatenation = a.concat(b);
    let lengthOfStrings = concatenation.length; 
    if((lengthOfStrings%3===0) && (lengthOfStrings%5===0))
    {
      return "FizzBuzz";
    }
    else if(lengthOfStrings%5===0)
    {
      return "Buzz";
    }
    else if(lengthOfStrings%3===0)
    {
            return "Fizz";

    }
}
const result = fizzBuzz("girls", "boydd");
console.log(result);