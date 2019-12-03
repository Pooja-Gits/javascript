// Write isPasswordValid
// Accepts password and username as args
// Password must:
//   - be at least 8 chars long
//   - cannot contain spaces
//   - cannot contain username
// If all req. are met return true else false

function isPasswordValid(password, username) {
    if (password.length < 8)
        return false;
    if (password.toLowerCase().indexOf(" ") !== -1)
        return false;
    if (password.toLowerCase().indexOf(username.toLowerCase()) !== -1)
        return false;
    return true;
}