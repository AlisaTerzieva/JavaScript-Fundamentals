function palindrome(input) {
    let str = input.toString();
    let isPalindrome = true;
    for (let i = 0; i < str.length/2; i++){
        if (str[i] != str[str.length - i - 1])
            isPalindrome = false;
    }
    console.log(isPalindrome);
}

palindrome(['haah']);