const emailValidityCheck = (email) => {
    const emailArray = email.split("@");
    if (emailArray.length !== 2) return false;
    if (emailArray[0] === "" || emailArray[0] === undefined || emailArray[0].startsWith("+")) return false
    if (emailArray[1] === "" || emailArray[1] === undefined || !emailArray[1].endsWith(".com")) return false

    let localName = emailArray[0].split("+")[0];
    localName = localName.replace(/\./g, "");
    let domainName = emailArray[1];

    return localName + "@" + domainName
}


var numUniqueEmails = function (emails) {
    let set = new Set();
    for (let i = 0; i < emails.length; i++) {
        let email = emails[i];
        const isValidEmail = emailValidityCheck(email);
        if (isValidEmail !== false) {
            if (!set.has(isValidEmail)) {
                set.add(isValidEmail);
            }
        }
    }
    return set.size;
};
console.log(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]));